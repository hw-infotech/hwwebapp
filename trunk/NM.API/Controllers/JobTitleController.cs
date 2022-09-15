using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NM.API.Application.Models;
using NM.API.Model;
using NM.Business.Interfaces;
using NM.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NM.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobTitleController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IJobTitleBusiness jobTitleBusiness;
        public JobTitleController(IMapper _mapper, IJobTitleBusiness _jobTitleBusiness)
        {
            mapper = _mapper;
            jobTitleBusiness = _jobTitleBusiness;
        }

        [HttpGet]
        [Route("getAll")]
        public ActionResult<ResultVM<List<JobTitleVM>>> GetAll()
        {
            var resultVM = new ResultVM<List<JobTitleVM>>();
            try
            {
                var result = jobTitleBusiness.GetAll();
                resultVM.Data = mapper.Map<List<JobTitleVM>>(result.Data);
                return resultVM;
            }
            catch (Exception ex)
            {
                resultVM.Success = false;
                resultVM.Data = new List<JobTitleVM>();
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
