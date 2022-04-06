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
using Microsoft.AspNetCore.Http;
using System.IO;
using Microsoft.Extensions.Hosting;

namespace NM.Business
{
    public class ResumeBusiness : IResumeBusiness
    {
        #region Private Properties
        private readonly IMapper mapper;
        private readonly IConfiguration configuration;
        private readonly IUnitOfWork unitOfWork;
        private readonly IHostEnvironment hostEnvironment = null;

        #endregion

        #region Constructor
        public ResumeBusiness(IMapper _mapper, IConfiguration _configuration, IUnitOfWork _unitOfWork,  IHostEnvironment _hostEnvironment)
        {
            mapper = _mapper;
            configuration = _configuration;
            unitOfWork = _unitOfWork;
            hostEnvironment = _hostEnvironment;
        }
        #endregion
        public ResultModel<bool> UploadResume(IFormFile formFile)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            var guid = Guid.NewGuid();
            var path = Path.Combine(hostEnvironment.ContentRootPath, "Resume" ,$"{guid}.pdf");

            Directory.CreateDirectory(Path.GetDirectoryName(path));

            using (var outStream = new FileStream(path, FileMode.Create))
            {
                formFile.CopyToAsync(outStream);
            }
            var extension = System.IO.Path.GetExtension(formFile.FileName);
            Resume resume = new Resume(formFile.FileName, extension, path, formFile.Length);
            resume.CreatedBy = 1;
            unitOfWork.ResumeRepository.Insert(resume);
            result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
            result.Data = true;
            result.Success = true;
            return result;
        }

           public ResultModel<ResumeModel> GetResumeByBsonId(string bsonId)
        {
                ResultModel<ResumeModel> result = new ResultModel<ResumeModel>();
                var resume = unitOfWork.ResumeRepository.SingleOrDefault(x => x.BsonId == bsonId && !x.IsDeleted);
                if(resume != null)
                {
                    result.Data = new ResumeModel();
                    mapper.Map(resume, result.Data);
                    result.Success = true;
                    result.StatusCode = (int)Enums.StatusCode.OK;
                }     
                return result;
        }

    }
}
