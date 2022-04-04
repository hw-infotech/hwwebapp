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

namespace NM.API.Controllers
{
    [Route("Api/BlogController")]
    [ApiController]
    public class BlogController : Controller
    {
        #region Private Properties
        IMapper mapper;
        IBlogBusiness blogBusiness;
        #endregion
        #region Constructor
        public BlogController(IConfiguration config, IMapper _mapper, IBlogBusiness _blogBusiness)
        {
            mapper = _mapper;
            blogBusiness = _blogBusiness;
        }
        #endregion
        [HttpPost]
        [Route("create")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public ActionResult<ResultVM<bool>> Create(BlogVM blogVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                BlogModel blogModel = new BlogModel();
                mapper.Map(blogVM, blogModel);
                var result = blogBusiness.CreateBlog(blogModel);
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
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public ActionResult<ResultVM<bool>> Update(BlogVM blogVM)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                BlogModel blogModel = new BlogModel();
                mapper.Map(blogVM, blogModel);
                var result = blogBusiness.UpdateBlog(blogModel);
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
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public ActionResult<ResultVM<bool>> Delete(string bsonId)
        {
            ResultVM<bool> resultVM = new ResultVM<bool>();
            try
            {
                var result = blogBusiness.DeleteBlog(bsonId);
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
        public ActionResult<ResultVM<BlogVM>> Get(string bsonId)
        {
            ResultVM<BlogVM> resultVM = new ResultVM<BlogVM>();
            try
            {
                var result = blogBusiness.GetBlogByBsonId(bsonId);
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
        public ActionResult<ResultVM<List<BlogVM>>> GetAll()
        {
            ResultVM<List<BlogVM>> resultVM = new ResultVM<List<BlogVM>>();
            try
            {
                var result = blogBusiness.GetAllBlogs();
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
        [Route("getByCategoryId")]
        public ActionResult<ResultVM<List<BlogVM>>> GetByCategory(int categoryId)
        {
            ResultVM<List<BlogVM>> resultVM = new ResultVM<List<BlogVM>>();
            try
            {
                var result = blogBusiness.GetBlogsByCategory(categoryId);
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