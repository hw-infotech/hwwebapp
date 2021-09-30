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
using NM.Domain.Models;
using NM.Utility;

namespace NM.API.Controllers
{
    [Route("api/TechnologyController")]
    [ApiController]
    public class TechnologyController : ControllerBase
    {
        #region Private Properties
        IMapper mapper;
        ITechnologyBusiness technologyBusiness;
        #endregion
        #region Constructor
        public TechnologyController(IConfiguration config, IMapper _mapper, ITechnologyBusiness _technologyBusiness)
        {
            mapper = _mapper;
            technologyBusiness = _technologyBusiness;
        }
        #endregion

        [HttpPost]
        [Route("create")]
        public ActionResult<ResultVM<bool>> Create(TechnologyVM technologyVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                TechnologyModel technologyModel = new TechnologyModel();
                mapper.Map(technologyVM, technologyModel);
                var result = technologyBusiness.CreateTechnology(technologyModel);
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

        [HttpPost]
        [Route("update")]
        public ActionResult<ResultVM<bool>> Update(TechnologyVM technologyVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                TechnologyModel technologyModel = new TechnologyModel();
                mapper.Map(technologyVM, technologyModel);
                var result = technologyBusiness.UpdateTechnology(technologyModel);
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

        [HttpDelete]
        [Route("Delete")]
        public ActionResult<ResultVM<bool>> Delete(string bsonId)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                var result = technologyBusiness.DeleteTechnology(bsonId);
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
        [Route("get")]
        public ActionResult<ResultVM<TechnologyVM>> Get(string bsonId)
        {
            ResultVM<TechnologyVM> resultVM = new ResultVM<TechnologyVM>();
            try
            {
                var result = technologyBusiness.GetTechnologyByBsonId(bsonId);
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
        [Route("getAll")]
        public ActionResult<ResultVM<List<TechnologyVM>>> GetAll()
        {
            ResultVM<List<TechnologyVM>> resultVM = new ResultVM<List<TechnologyVM>>();
            try
            {
                var result = technologyBusiness.GetAllTechnology();
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