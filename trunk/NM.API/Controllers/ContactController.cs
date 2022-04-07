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
    public class ContactController : ControllerBase
    {
        #region Private Properties
        IMapper mapper;
        IContactBusiness contactBusiness;
        #endregion
        #region Constructor
        public ContactController(IConfiguration config, IMapper _mapper, IContactBusiness _contactBusiness)
        {
            mapper = _mapper;
            contactBusiness = _contactBusiness;
        }
        #endregion

        [HttpPost]
        [Route("create")]
        public ActionResult<ResultVM<bool>> Create(ContactVM contactVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                ContactModel contactModel = new ContactModel();
                mapper.Map(contactVM, contactModel);
                contactModel.Services = String.Join(',', contactVM.Services);
                var result = contactBusiness.CreateContact(contactModel);
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
        public ActionResult<ResultVM<bool>> Update(ContactVM contactVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                ContactModel contactModel = new ContactModel();
                mapper.Map(contactVM, contactModel);
                contactModel.Services = String.Join(',', contactVM.Services);
                var result = contactBusiness.UpdateContact(contactModel);
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
                var result = contactBusiness.DeleteContact(bsonId);
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
        public ActionResult<ResultVM<ContactVM>> Get(string bsonId)
        {
            ResultVM<ContactVM> resultVM = new ResultVM<ContactVM>();
            try
            {
                var result = contactBusiness.GetContactByBsonId(bsonId);
                mapper.Map(result, resultVM);
                resultVM.Data.Services = result.Data.Services.Split(',').ToList();
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
                var result = contactBusiness.GetAllContact();
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