using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using NM.API.Application.Models;
using NM.API.Model;
using NM.Business.Interfaces;
using NM.Domain.Models;
using NM.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

namespace NM.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class JobController : BaseController
    {
        private readonly IMapper mapper;
        private readonly IJobBusiness jobBusiness;
        public JobController(IMapper _mapper, IJobBusiness _jobBusiness, IConfiguration config) : base(config)
        {
            mapper = _mapper;
            jobBusiness = _jobBusiness;
        }
        [HttpGet]
        [Route("getAll")]
        public ActionResult<ResultVM<List<JobVM>>> GetAll()
        {
            var resultVM = new ResultVM<List<JobVM>>();
            try
            {
                var result = jobBusiness.GetAll();
                mapper.Map(result, resultVM);
                return resultVM;
            }
            catch (Exception ex)
            {
                resultVM.Success = false;
                resultVM.Data = new List<JobVM>();
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
        public ActionResult<ResultVM<bool>> Create(JobVM jobVM)
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
                var jobModel = mapper.Map<JobModel>(jobVM);
                var result = jobBusiness.CreateJob(jobModel);
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
        [Route("get")]
        public ActionResult<ResultVM<JobVM>> Get(string bsonId)
        {
            var resultVM = new ResultVM<JobVM>();
            try
            {
                var result = jobBusiness.GetById(bsonId);
                mapper.Map(result, resultVM);
            }
            catch (Exception ex)
            {
                resultVM.Success = false;
                resultVM.Data = new JobVM();
                resultVM.Message = ex.Message;
                resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.ServerError);
                return StatusCode(StatusCodes.Status500InternalServerError, new { Result = resultVM });
            }
            return resultVM;
        }
        [HttpPost]
        [Route("update")]
        public ActionResult<ResultVM<bool>> Update(JobVM jobVM)
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
                var jobModel = mapper.Map<JobModel>(jobVM);
                var result = jobBusiness.UpdateJob(jobModel);
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

        [HttpGet]
        [Route("delete")]
        public ActionResult<ResultVM<bool>> Deletejob(string bsonId)
        {
            var resultVM = new ResultVM<bool>();
            try
            {
                var result = jobBusiness.DeleteJob(bsonId);
                mapper.Map(result, resultVM);
            }
            catch (Exception ex)
            {
                resultVM.Success = false;
                resultVM.Data = false;
                resultVM.Message = ex.Message;
                resultVM.StatusCode = Convert.ToInt32(Enums.StatusCode.ServerError);
                return StatusCode(StatusCodes.Status500InternalServerError, new { Result = resultVM });
            }
            return resultVM;


        }
    }
}
