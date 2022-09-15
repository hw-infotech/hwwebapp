using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    public class ResponsibilityTypeController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IResponsibilityTypeBusiness responsibilityTypeBusiness;

        public ResponsibilityTypeController(IMapper _mapper, IResponsibilityTypeBusiness _responsibilityTypeBusiness)
        {
            responsibilityTypeBusiness = _responsibilityTypeBusiness;
            mapper = _mapper;
        }

        [HttpPost]
        [Route("create")]
        public ActionResult<ResultVM<bool>> Create(ResponsibilityTypeVM responsibilityTypeVM)
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
                var jobModel = mapper.Map<ResponsibilityTypeModel>(responsibilityTypeVM);
                var result = responsibilityTypeBusiness.Create(jobModel);
                mapper.Map(result, resultVM);
                return resultVM;
            }
            catch (Exception ex)
            {
                resultVM.Message = ex.Message;
                resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.BadRequest);
                return StatusCode(StatusCodes.Status400BadRequest, new
                {
                    Result = resultVM
                });
            }
        }

        [HttpGet]
        [Route("getAll")]
        public ActionResult<ResultVM<List<ResponsibilityTypeModel>>> GetAll()
        {
            var resultVM = new ResultVM<List<ResponsibilityTypeModel>>();
            try
            {
                var result = responsibilityTypeBusiness.GetAll();
                resultVM.Data = mapper.Map<List<ResponsibilityTypeModel>>(result.Data);
                return resultVM;
            }
            catch (Exception ex)
            {
                resultVM.Success = false;
                resultVM.Data = new List<ResponsibilityTypeModel>();
                resultVM.Message = ex.Message;
                resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.ServerError);
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    Result = resultVM
                });
            }
        }



    }
}
