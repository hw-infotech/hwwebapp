using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NM.API.Application.Models;
using NM.API.Model;
using NM.Business.Interfaces;
using NM.Domain.Models;
using NM.Utility;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace NM.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
  //  [Authorize]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ResumeController : Controller
    {
        #region Private Properties
        IMapper mapper;
        IResumeBusiness resumeBusiness;
        #endregion
        #region Constructor
        public ResumeController(IConfiguration config, IMapper _mapper, IResumeBusiness _resumeBusiness)
        {
            mapper = _mapper;
            resumeBusiness = _resumeBusiness;
        }
        #endregion
        [HttpPost]
        [Route("create")]
        public ActionResult<ResultVM<bool>> UploadResume([FromForm] FileUploadVM fileUploadVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                var formFile = fileUploadVM.Files.FirstOrDefault();
                //Check if file size exceeds 500kb
                if (formFile.Length > (0.5 * 1024 * 1024))
                    return StatusCode(StatusCodes.Status400BadRequest, new { Codes = new string[] { "FileSizeExceeded" } });
                var result = resumeBusiness.UploadResume(formFile);
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
        

        [HttpGet]
        [Route("get")]
        public ActionResult<ResultVM<ResumeVM>> Get(string bsonId)
        {
            ResultVM<ResumeVM> resultVM = new ResultVM<ResumeVM>();
            try
            {
                var result = resumeBusiness.GetResumeByBsonId(bsonId);
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
