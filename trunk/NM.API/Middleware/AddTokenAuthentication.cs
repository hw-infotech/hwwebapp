using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace NM.API.Middleware
{
    public static class AuthenticationExtension
    {
        public static IServiceCollection AddTokenAuthentication(this IServiceCollection services, IConfiguration config)
        {
            var secret = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]));
            services.AddAuthentication(x =>
            {
               // x.AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    IssuerSigningKey = secret,
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidIssuer = config["Jwt:Issuer"],
                    ValidAudience = config["Jwt:Audience"]
                };

                x.Events = new JwtBearerEvents()
                {
                    OnAuthenticationFailed = c =>
                    {
                        if (c.Exception.GetType() == typeof(SecurityTokenExpiredException))
                        {
                            c.Response.StatusCode = 401;

                            var bytes = Encoding.UTF8.GetBytes(Utility.Messages.TokenExpire);
                            c.Response.Body.WriteAsync(bytes, 0, bytes.Length);

                        }
                        return Task.CompletedTask;
                    }
                };
            });

            return services;
        }
    }
}
