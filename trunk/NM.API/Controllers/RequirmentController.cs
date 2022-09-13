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
    public class RequirmentController : ControllerBase
    {

        private readonly IMapper mapper;
        private readonly IRequirmentBusiness requirmentBusiness;
        public RequirmentController(IMapper _mapper, IRequirmentBusiness _requirmentBusiness)
        {
            mapper = _mapper;
            requirmentBusiness = _requirmentBusiness;
        }
        [HttpGet]
        [Route("getAll")]
        public ActionResult<ResultVM<List<RequirmentVM>>> GetAll()
        {
            var resultVM = new ResultVM<List<RequirmentVM>>();
            try
            {
                var result = requirmentBusiness.GetAll();
                resultVM.Data = mapper.Map<List<RequirmentVM>>(result.Data);
                return resultVM;
            }
            catch (Exception ex)
            {
                resultVM.Success = false;
                resultVM.Data = new List<RequirmentVM>();
                resultVM.Message = ex.Message;
                resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.ServerError);
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    Result = resultVM
                });
            }
        }
        [HttpPost]
        [Route("create")]
        public ActionResult<ResultVM<bool>> Create(RequirmentVM requirmentVM)
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
                var jobModel = mapper.Map<RequirmentModel>(requirmentVM);
                var result = requirmentBusiness.Create(jobModel);
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
    }
}
