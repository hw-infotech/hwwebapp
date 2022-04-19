using System;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NM.API.Application.Models;
using NM.API.Model;
using NM.Domain.Models;
using Microsoft.Extensions.Configuration;
using NM.Utility;
using NM.Business.Interfaces;
using System.Collections.Generic;

namespace NM.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        #region Private Properties
        IMapper mapper;
        IProjectBusiness projectBusiness;
        #endregion
        #region Constructor
        public ProjectController(IConfiguration config, IMapper _mapper, IProjectBusiness _projectBusiness)
        {
            mapper = _mapper;
            projectBusiness = _projectBusiness;
        }
        #endregion
        [HttpPost]
        [Route("create")]
        public ActionResult<ResultVM<bool>> Create(ProjectVM projectVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                ProjectModel projectModel = new ProjectModel();
                mapper.Map(projectVM, projectModel);
                var result = projectBusiness.CreateProject(projectModel);
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
        public ActionResult<ResultVM<bool>> Update(ProjectVM projectVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                ProjectModel projectModel = new ProjectModel();
                mapper.Map(projectVM, projectModel);
                var result = projectBusiness.UpdateProject(projectModel);
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
                var result = projectBusiness.DeleteProject(bsonId);
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
        public ActionResult<ResultVM<ProjectVM>> Get(string bsonId)
        {
            ResultVM<ProjectVM> resultVM = new ResultVM<ProjectVM>();
            try
            {
                var result = projectBusiness.GetProjectByBsonId(bsonId);
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
        public ActionResult<ResultVM<List<ProjectVM>>> GetAll()
        {
            ResultVM<List<ProjectVM>> resultVM = new ResultVM<List<ProjectVM>>();
            try
            {
                var result = projectBusiness.GetAllProjects();
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
        [Route("getTop")]
        public ActionResult<ResultVM<List<ProjectVM>>> GetTop()
        {
            ResultVM<List<ProjectVM>> resultVM = new ResultVM<List<ProjectVM>>();
            try
            {
                var result = projectBusiness.GetTopProjects();
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