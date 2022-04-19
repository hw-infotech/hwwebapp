using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using NM.API.Application.Model;
using NM.API.Model;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System;
using NM.Utility;
using System.Linq;
using NM.Business.Interfaces;
using AutoMapper;

namespace NM.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : BaseController
    {
        private readonly IMapper mapper;
        private readonly IAccountBusiness accountBusiness;
        public AccountController(IConfiguration config, IAccountBusiness _accountBusiness, IMapper _mapper) : base(config)
        {
            accountBusiness = _accountBusiness;
            mapper = _mapper;
        }

        [Route("login")]
        [HttpPost]
        public ActionResult<ResultVM<AppUserVM>> LogIn(AppUserVM login)
        {
            var result = new ResultVM<AppUserVM>();
            string Token = string.Empty;
            //var user = await AuthenticateUser(login);
            try
            {
                if(!ModelState.IsValid)
                {
                    result.Message = ModelState.Values.SelectMany(s => s.Errors).FirstOrDefault().ErrorMessage;
                    result.StatusCode = Convert.ToInt32(Enums.StatusCode.BadRequest);
                }
                else
                {
                    var resultModel = accountBusiness.UserExists(login.EmailId, login.Password);
                    mapper.Map(resultModel, result);
                    if (resultModel.Data != null)
                    {
                        Token = GenerateJSONWebToken();
                    }
                }
            }
            catch (Exception ex)
            {
                result.Message = ex.Message;
                result.StatusCode = (int)Enums.StatusCode.ServerError;
            }
            return Ok(new { Token, result = result });
        }
        [HttpGet]
        //[AllowAnonymous]
        [Route("ForgotPassword")]
        public ActionResult<ResultVM<AppUserVM>> ForgotPassword(string EmailId)
        {
            var resultVM = new ResultVM<bool>();
            var result = accountBusiness.GetUserByEmailId(EmailId);
            if (result.Success)
            {
                //string otp = string.Empty;
                //while (userBusiness.CheckIfOTPExists(otp)) { otp = Common.GenerateRandomOTP(); };
                //ResetPasswordModel resetPasswordModel = new ResetPasswordModel()
                //{
                //    UserId = result.Data.Id,
                //    EmailId = result.Data.EmailId,
                //    OTP = otp
                //};
                //userBusiness.SaveResetOTP(resetPasswordModel);

                string subject = "Reset Password";
                string body = string.Format("Hi,< br />< br /> We got request for reset your account password.Please use below OTP to reset your password"
     
                          );
                bool isSent = new Mailer()
                                .Subject(subject)
                                .Body(body)
                                .To(EmailId)
                                .Send();
                resultVM.Success = isSent;
                resultVM.Message = isSent ? Enums.ResetPasswordEmail : Enums.EmailError;
            }
            else
                resultVM.Message = result.Message;
            return Ok(new { result = result });
        }

    }
}
