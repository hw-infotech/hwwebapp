using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using NM.API.Application.Model;

namespace NM.API.Controllers
{
    public class BaseController : ControllerBase
    {
        private IConfiguration _config;
        public BaseController(IConfiguration config)
        {
            _config = config;
        }
        protected int GetUserId()
        {
            return int.Parse(this.User.Claims?.FirstOrDefault(i => i.Type == "UserId")?.Value);
        }
        //protected int getroleid()
        //{
        //    return int.parse(this.user.claims.first(i => i.type == "roleid").value);
        //}
        protected string GenerateJSONWebToken(int userId)
        {
            var securityKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new List<Claim>{
            new Claim("UserId", userId.ToString(), ClaimValueTypes.String)
        };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"], _config["Jwt:Audience"],
              claims,
              expires: DateTime.Now.AddSeconds(100),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}