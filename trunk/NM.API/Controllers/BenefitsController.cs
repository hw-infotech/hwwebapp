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
    public class BenefitsController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IBenefitTypeBusiness benefitTypeBusiness;
        public BenefitsController(IMapper _mapper, IBenefitTypeBusiness _benefitTypeBusiness)
        {
            mapper = _mapper;
            benefitTypeBusiness = _benefitTypeBusiness;

        }
        [HttpGet]
        [Route("getAll")]
        public ActionResult<ResultVM<List<BenefitsTypesVM>>> GetAll()
        {
            var resultVM = new ResultVM<List<BenefitsTypesVM>>();
            try
            {
                var result = benefitTypeBusiness.GetAllBenefitType();
                resultVM.Data = mapper.Map<List<BenefitsTypesVM>>(result.Data);
                return resultVM;
            }
            catch (Exception ex)
            {
                resultVM.Success = false;
                resultVM.Data = new List<BenefitsTypesVM>();
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
