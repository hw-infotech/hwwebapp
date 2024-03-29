﻿using System;
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
using NM.Domain.Models;
using NM.Utility;

namespace NM.API.Controllers
{
    [Route("api/[controller]")]
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

        [HttpPost]
        [Route("Subscribe")]
        public ActionResult<ResultVM<bool>> Subscribe(NewsLetterVM newsLetterVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                NewsLetterModel newsLetterModel = new NewsLetterModel();
                mapper.Map(newsLetterVM, newsLetterModel);
                var result = newsLetterBusiness.SubscribeNewsLetter(newsLetterModel);
                mapper.Map(result, resultVM);
                return resultVM;
            }
            catch (Exception ex)
            {
                resultVM.Message = ex.Message;
                resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.BadRequest);
                return StatusCode(StatusCodes.Status400BadRequest, new { Result = resultVM });
            }
        }

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
        [HttpGet]
        [Route("UnSubscribe")]
        public ActionResult<ResultVM<bool>> UnSubscribe(string bsonId)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                var result = newsLetterBusiness.UnSubscribeByBsonId(bsonId);
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

        [HttpPost]
        [Route("SendNewsLetter")]
        public ActionResult<ResultVM<bool>> SendNewsLetter(NewsLetterTemplateVM  newsLetterTemplateVM)
        {
            var resultVM = new ResultVM<bool>();
            try
            {
                if (!ModelState.IsValid)
                {
                    resultVM.Message = ModelState.Values.SelectMany(s => s.Errors).FirstOrDefault().ErrorMessage;
                    resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.BadRequest);
                    return BadRequest(resultVM);
                }
                var newsLetterTemplateModel = new NewsLetterTemplateModel();
                mapper.Map(newsLetterTemplateVM, newsLetterTemplateModel);
                var result= newsLetterBusiness.SendNewsLetter(newsLetterTemplateModel);
                mapper.Map(result, resultVM);
                return resultVM;
            }
            catch(Exception ex)
            {
                Common.LogMessage(ex.Message);
                resultVM.Message = ex.Message;
                resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.BadRequest);
                return StatusCode(StatusCodes.Status500InternalServerError, new { Result = resultVM, Codes = new string[] { "ServerError" } });
            }
        }
        [HttpGet]
        [Route("getAllSubscribers")]
        public ActionResult<ResultVM<List<NewsLetterVM>>> GetAllSubscribers()
        {
            ResultVM<List<NewsLetterVM>> resultVM = new ResultVM<List<NewsLetterVM>>();
            try
            {
                var result = newsLetterBusiness.GetAllSubscribers();
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
        [HttpGet]
        [Route("getAllUnSubscribers")]
        public ActionResult<ResultVM<List<NewsLetterVM>>> GetAllUnSubscribers()
        {
            ResultVM<List<NewsLetterVM>> resultVM = new ResultVM<List<NewsLetterVM>>();
            try
            {
                var result = newsLetterBusiness.GetAllUnSubscribers();
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