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
using Microsoft.Extensions.Options;
using System.Text;

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
            string body = EmailHelper.GetResumeEmailBody(formFile.Name, hostEnvironment.ContentRootPath);
            var extension = System.IO.Path.GetExtension(formFile.FileName);
            byte[] fileBytes;

            using (var ms = new MemoryStream())
            {
                formFile.CopyTo(ms);
                 fileBytes = ms.ToArray();
                // act on the Base64 data
            }


            bool isSent = new Mailer()
                               .Subject(AppSettingsModel.ResumeRequest)
                               .Body(body)
                               .To(AppSettingsModel.MailUserName)
                               .Attachment(fileBytes, formFile.FileName)
                               .Send();
            Resume resume = new Resume(formFile.FileName, extension, formFile.Length);
            resume.CreatedBy = 1;
            unitOfWork.ResumeRepository.Insert(resume);
            result = ResultModel<bool>.GetResponseModal(true, (int)Enums.StatusCode.OK, true);
            return result;
        }

           public ResultModel<ResumeModel> GetResumeByBsonId(string bsonId)
        {
                ResultModel<ResumeModel> result = new ResultModel<ResumeModel>();
                var resume = unitOfWork.ResumeRepository.SingleOrDefault(x => x.BsonId == bsonId && !x.IsDeleted);
                if(resume != null)
                {
                ResumeModel data = new ResumeModel();
                    mapper.Map(resume, data);
                result = ResultModel<ResumeModel>.GetResponseModal(data, (int)Enums.StatusCode.OK, true);
               
                }     
                return result;
        }

    }
}
