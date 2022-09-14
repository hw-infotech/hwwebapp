using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using NM.API.Application.Models;
using NM.API.Model;
using NM.Business.Interfaces;
using NM.DataAccess.AggregatesModel;
using NM.Domain.Models;
using NM.Utility;
using System;
using System.Collections.Generic;
using System.Linq;

namespace NM.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserEnquiryController : BaseController
    {
        private readonly IMapper mapper;
        IUserEnquiryBusiness userEnquiryBusiness;
        public UserEnquiryController(IMapper _mapper, IUserEnquiryBusiness _userEnquiryBusiness, IConfiguration config) : base(config)
        {
            mapper = _mapper;
            userEnquiryBusiness = _userEnquiryBusiness;
        }

        [HttpPost]
        [Route("create")]
        public ActionResult<ResultVM<bool>> Create(UserEnquiryVM userEnquiryVM)
        {
            var resultVM = new ResultVM<bool>()
            {
                Data = false,
                Success = false
            };
            try
            {
                if (!ModelState.IsValid)
                {
                    resultVM.Message = ModelState.Values.SelectMany(s => s.Errors).FirstOrDefault().ErrorMessage;
                    resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.BadRequest);
                    return resultVM;
                }
                var userEnquiryModel = new UserEnquiryModel();
                mapper.Map(userEnquiryVM, userEnquiryModel);
                var resultModel = userEnquiryBusiness.Create(userEnquiryModel);
                mapper.Map(resultModel, resultVM);
                return resultVM;
            }
            catch (Exception ex)
            {
                resultVM.Message = ex.Message;
                resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.ServerError);
                return StatusCode(StatusCodes.Status500InternalServerError, new { Result = resultVM });
            }
        }

        [HttpGet]
        [Route("getAll")]
        public ActionResult<ResultVM<List<UserEnquiryVM>>> GetAll()
        {
            var resultVM = new ResultVM<List<UserEnquiryVM>>()
            {
                Success = false,
            };
            try
            {
                var resulrModel = userEnquiryBusiness.GetAll();
                mapper.Map(resulrModel, resultVM);
                return resultVM;
            }
            catch (Exception ex)
            {
                resultVM.Success = false;
                resultVM.Data = new List<UserEnquiryVM>();
                resultVM.Message = ex.Message;
                resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.ServerError);
                return StatusCode(StatusCodes.Status500InternalServerError, new { Result = resultVM });
            }
        }
        [HttpGet]
        [Route("get")]
        public ActionResult<ResultVM<UserEnquiryVM>> Get(string bsonId)
        {
            var resultVM = new ResultVM<UserEnquiryVM>();
            try
            {
                var resulrModel = userEnquiryBusiness.GetById(bsonId);
                mapper.Map(resulrModel, resultVM);
                return resultVM;
            }

            catch (Exception ex)
            {

                resultVM.Success = false;
                resultVM.Data = new UserEnquiryVM();
                resultVM.Message = ex.Message;
                resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.ServerError);
                return StatusCode(StatusCodes.Status500InternalServerError, new { Result = resultVM });
            }
        }
        [HttpPost]
        [Route("update")]
        public ActionResult<ResultVM<bool>> Update(UserEnquiryVM userEnquiryVM)
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
                UserEnquiryModel userEnquiryModel = mapper.Map<UserEnquiryModel>(userEnquiryVM);
                var result = userEnquiryBusiness.UpdateUserEnquiry(userEnquiryModel);
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
