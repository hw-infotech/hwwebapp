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
    public class JobSubscriptionController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IJobSubscriptionBusiness jobSubscriptionBusiness;
        public JobSubscriptionController(IMapper _mapper, IJobSubscriptionBusiness _jobSubscriptionBusiness)
        {
            mapper = _mapper;
            jobSubscriptionBusiness = _jobSubscriptionBusiness;
        }


        [HttpPost]
        [Route("create")]
        public ActionResult<ResultVM<bool>> Create(JobSubscriptionVM jobSubscriptionVM)
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
                var jobModel = mapper.Map<JobSubscriptionModel>(jobSubscriptionVM);
                var result = jobSubscriptionBusiness.CreateJobSubscription(jobModel);
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
