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
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        #region Private Properties
        IMapper mapper;
        IClientBusiness clientBusiness;
        #endregion
        #region Constructor
        public ClientController(IConfiguration config, IMapper _mapper, IClientBusiness _clientBusiness)
        {
            mapper = _mapper;
            clientBusiness = _clientBusiness;
        }
        #endregion

        [HttpPost]
        [Route("create")]
        public ActionResult<ResultVM<bool>> Create(ClientVM clientVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                ClientModel clientModel = new ClientModel();
                mapper.Map(clientVM, clientModel);
                var result = clientBusiness.CreateClient(clientModel);
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
        public ActionResult<ResultVM<bool>> Update(ClientVM clientVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                ClientModel clientModel = new ClientModel();
                mapper.Map(clientVM, clientModel);
                var result = clientBusiness.UpdateClient(clientModel);
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
                var result = clientBusiness.DeleteClient(bsonId);
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
        public ActionResult<ResultVM<ClientVM>> Get(string bsonId)
        {
            ResultVM<ClientVM> resultVM = new ResultVM<ClientVM>();
            try
            {
                var result = clientBusiness.GetClientByBsonId(bsonId);
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
        public ActionResult<ResultVM<List<ClientVM>>> GetAll()
        {
            ResultVM<List<ClientVM>> resultVM = new ResultVM<List<ClientVM>>();
            try
            {
                var result = clientBusiness.GetAllClients();
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