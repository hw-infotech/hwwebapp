using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using NM.API.Application.Models;
using NM.API.Model;
using NM.Business.Interfaces;
using NM.Utility;

namespace NM.API.Controllers
{
    [Route("api/NewsLetterController")]
    [ApiController]
    public class NewsLetterController : ControllerBase
    {
        #region Private Properties
        IMapper mapper;
        INewsLetterBusiness newsLetterBusiness;
        #endregion
        #region Constructor
        public NewsLetterController(IConfiguration config, IMapper _mapper, INewsLetterBusiness _newsLetterBusiness)
        {
            mapper = _mapper;
            newsLetterBusiness = _newsLetterBusiness;
        }
        #endregion
        [HttpGet]
        [Route("getAll")]
        public ActionResult<ResultVM<List<NewsLetterVM>>> GetAll()
        {
            ResultVM<List<NewsLetterVM>> resultVM = new ResultVM<List<NewsLetterVM>>();
            try
            {
                var result = newsLetterBusiness.GetAllNewsLetter();
                mapper.Map(result, resultVM);
                return resultVM;
            }
            catch (Exception ex)
            {
                Common.LogMessage(ex.Message);
                resultVM.Message = ex.Message;
                resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.BadRequest);
                return StatusCode(StatusCodes.Status400BadRequest, new { Result = resultVM, Codes = new string[] { "ServerError" } });
            }

        }
    }
}