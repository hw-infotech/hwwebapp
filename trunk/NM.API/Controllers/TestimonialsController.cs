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
    public class TestimonialsController : ControllerBase
    {
        #region Private Properties
        IMapper mapper;
        ITestimonialsBusiness testimonialsBusiness;
        #endregion
        #region Constructor
        public TestimonialsController(IConfiguration config, IMapper _mapper, ITestimonialsBusiness _ITestimonialsBusiness)
        {
            mapper = _mapper;
            testimonialsBusiness = _ITestimonialsBusiness;
        }
        #endregion
        [HttpPost]
        [Route("create")]
        public ActionResult<ResultVM<bool>> Create(TestimonialsVM testimonialsVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                TestimonialsModel testimonialsModel = new TestimonialsModel();
                mapper.Map(testimonialsVM, testimonialsModel);
                var result = testimonialsBusiness.CreateTestimonials(testimonialsModel);
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
        public ActionResult<ResultVM<bool>> Update(TestimonialsVM testimonialsVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                TestimonialsModel TestimonialsModel = new TestimonialsModel();
                mapper.Map(testimonialsVM, TestimonialsModel);
                var result = testimonialsBusiness.UpdateTestimonials(TestimonialsModel);
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

    }
}