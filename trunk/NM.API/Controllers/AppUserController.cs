using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NM.API.Application.Model;
using NM.API.Application.Models;
using NM.API.Model;
using NM.Business.Interfaces;
using NM.Domain.Models;
using NM.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NM.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppUserController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IAppUserBusiness appUserBusiness;
        public AppUserController(IMapper _mapper, IAppUserBusiness _appUserBusiness)
        {
            appUserBusiness = _appUserBusiness;
            mapper = _mapper;
        }

        [HttpGet]
        [Route("get")]
        public ActionResult<ResultVM<AppUserVM>> Get(string bsonId)
        {
            var resultVM = new ResultVM<AppUserVM>();
            try
            {
                var result = appUserBusiness.GetAppUser(bsonId);
                mapper.Map(result, resultVM);
            }
            catch (Exception ex)
            {
                resultVM.Success = false;
                resultVM.Data = new AppUserVM();
                resultVM.Message = ex.Message;
                resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.ServerError);
                return StatusCode(StatusCodes.Status500InternalServerError, new { Result = resultVM });
            }
            return resultVM;
        }
        [HttpPost]
        [Route("update")]
        public ActionResult<ResultVM<bool>> Update(AppUserVM appUserVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                if (!ModelState.IsValid)
                {
                    resultVM.Message = ModelState.Values.SelectMany(s => s.Errors).FirstOrDefault().ErrorMessage;
                    resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.BadRequest);
                    return resultVM;
                }
                var appUserModel = mapper.Map<AppUserModel>(appUserVM);
                var result = appUserBusiness.UpdateAppUser(appUserModel);
                mapper.Map(result, resultVM);
            }
            catch (Exception ex)
            {
                Common.LogMessage(ex.Message);
                resultVM.Message = ex.Message;
                resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.BadRequest);
                return StatusCode(StatusCodes.Status400BadRequest, new { Result = resultVM, Codes = new string[] { "ServerError" } });
            }
            return resultVM;
        }
    }
}
