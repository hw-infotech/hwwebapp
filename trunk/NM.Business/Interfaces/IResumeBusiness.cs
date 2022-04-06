using Microsoft.AspNetCore.Http;
using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface IResumeBusiness
    {
        ResultModel<bool> UploadResume(IFormFile formFile);
        ResultModel<ResumeModel> GetResumeByBsonId(string bsonId);
        
    }
}

