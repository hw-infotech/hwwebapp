using AutoMapper;
using NM.Business.Interfaces;
using NM.DataAccess.AggregatesModel;
using NM.DataAccess.Interface;
using NM.Domain.Models;
using NM.Utility;
using System;
using Microsoft.Extensions.Configuration;
using System.Linq;
using System.Collections.Generic;

namespace NM.Business
{
    public class BlogBusiness: IBlogBusiness
    {
        #region Private Properties
        private readonly IMapper mapper;
        private readonly IConfiguration configuration;
        private readonly IUnitOfWork unitOfWork;

        #endregion

        #region Constructor
        public BlogBusiness(IMapper _mapper, IConfiguration _configuration,IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;       
            configuration = _configuration;     
            unitOfWork = _unitOfWork;
        }
        #endregion
        public ResultModel<bool> CreateBlog(BlogModel blogModel)
          {
            ResultModel<bool> result = new ResultModel<bool>();
            Blog blog = new Blog(blogModel.Title,blogModel.Description,blogModel.CategoryId);
            blog.CreatedBy = 1;
            unitOfWork.BlogRepository.Insert(blog);
            result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
            result.Data = true;
            result.Success = true;
            return result;
          }

        public ResultModel<bool> UpdateTechnology(TechnologyModel technologyModel)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            var technology = unitOfWork.TechnologyRepository.Get(x => x.BsonId == technologyModel.BsonId && !x.IsDeleted).FirstOrDefault();
            if (technology != null)
            {
                technologyModel.UpdatedBy = 1;
                technologyModel.UpdatedOn = DateTime.UtcNow;
                technologyModel.CreatedBy = technology.CreatedBy;
                technologyModel.CreatedOn = technology.CreatedOn;
                mapper.Map(technologyModel, technology);
                unitOfWork.TechnologyRepository.Update(technology);
                result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                result.Data = true;
                result.Success = true;
            }
            return result;
        }
        public ResultModel<bool> UpdateBlog(BlogModel blogModel)
        {
            ResultModel<bool> result = new ResultModel<bool>();
                var blog = unitOfWork.BlogRepository.Get(x => x.BsonId == blogModel.BsonId && !x.IsDeleted).FirstOrDefault();
                if (blog != null)
                {
                    blogModel.UpdatedBy = 1;
                    blogModel.UpdatedOn = DateTime.UtcNow;
                    blogModel.CreatedBy = blog.CreatedBy;
                    blogModel.CreatedOn = blog.CreatedOn;
                    mapper.Map(blogModel, blog);
                    unitOfWork.BlogRepository.Update(blog);
                    result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                    result.Success = true;
                }
          
            return result;
        }

        public ResultModel<bool> DeleteBlog(string bsonId)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            var blog = unitOfWork.BlogRepository.SingleOrDefault(x => x.BsonId == bsonId);
            if (blog != null)
            {
                blog.IsDeleted = true;
                blog.UpdatedOn = DateTime.UtcNow;
                unitOfWork.BlogRepository.Update(blog);
                result.Data = true;
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }
        public ResultModel<List<BlogModel>> GetAllBlogs()
        {
            ResultModel<List<BlogModel>> result = new ResultModel<List<BlogModel>>();
                var blog = unitOfWork.BlogRepository.GetAllAsQueryable(x => !x.IsDeleted).ToList();
            if (blog != null)
            {
                result.Data = new List<BlogModel>();
                mapper.Map(blog, result.Data);
                result.Success = true;
                result.TotalRecords = blog.Count();
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
                return result;
        }
       
        public ResultModel<BlogModel> GetBlogByBsonId(string bsonId)
        {
            ResultModel<BlogModel> result = new ResultModel<BlogModel>();
            var blog =unitOfWork.BlogRepository.SingleOrDefault(x => x.BsonId == bsonId && !x.IsDeleted);
            if (blog != null)
            {
                result.Data = new BlogModel();
                mapper.Map(blog,result.Data);
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }
        public ResultModel<List<BlogModel>> GetBlogsByCategory(int categoryId)
        {
            ResultModel<List<BlogModel>> result = new ResultModel<List<BlogModel>>();
                result.Data = new List<BlogModel>();
                var blog = unitOfWork.BlogRepository.GetAllAsQueryable(x => !x.IsDeleted && x.CategoryId == categoryId);
            if(blog !=null)
            {
                mapper.Map(blog, result.Data);
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;

        }

    }
}
