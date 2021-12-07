using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface IBlogBusiness
    {
        ResultModel<bool> CreateBlog(BlogModel blogModel);
        ResultModel<bool> UpdateBlog(BlogModel blogModel);
        ResultModel<bool> DeleteBlog(string bsonId);
        ResultModel<List<BlogModel>> GetAllBlogs();
        ResultModel<BlogModel> GetBlogByBsonId(string bsonId);
        ResultModel<List<BlogModel>> GetBlogsByCategory(int categoryId);
    }
}
