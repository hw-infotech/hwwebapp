using AutoMapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using NM.Business.Interfaces;
using NM.DataAccess.AggregatesModel;
using NM.DataAccess.Interface;
using NM.Domain.Models;
using NM.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NM.Business
{

    public class NewsLetterBusiness : INewsLetterBusiness
    {
        #region Private Properties
        private readonly IMapper mapper;
        private readonly IConfiguration configuration;
        private readonly IUnitOfWork unitOfWork;
        private readonly IHostEnvironment hostEnvironment = null;

        #endregion

        #region Constructor
        #endregion
        public NewsLetterBusiness(IMapper _mapper, IConfiguration _configuration, IUnitOfWork _unitOfWork, IHostEnvironment _hostEnvironment)
        {
            mapper = _mapper;
            configuration = _configuration;
            unitOfWork = _unitOfWork;
            hostEnvironment = _hostEnvironment;
        }
        public ResultModel<bool> SubscribeNewsLetter(NewsLetterModel newsLetterModel)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            var emailExist = unitOfWork.NewsLetterRepository.Get(x => x.Email == newsLetterModel.Email).FirstOrDefault();
            if (emailExist == null)
            {
                NewsLetter newsLetter = new NewsLetter(newsLetterModel.Email);
                newsLetter.CreatedBy = 1;
                newsLetter.IsSubscribe = true;
                unitOfWork.NewsLetterRepository.Insert(newsLetter);
                result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                result.Data = true;
                result.Success = true;
            }
            else
            {
                result.Message = Messages.EmailExist;
            }
            return result;
        }
        public ResultModel<bool> UnSubscribeByBsonId(string bsonId)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            var newsLetter = unitOfWork.NewsLetterRepository.SingleOrDefault(x => x.BsonId == bsonId && !x.IsDeleted);
            if (newsLetter != null)
            {
                newsLetter.IsSubscribe = false;
                newsLetter.UpdatedBy = 1;
                unitOfWork.NewsLetterRepository.Update(newsLetter);
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }

        public ResultModel<List<NewsLetterModel>> GetAllNewsLetter()
        {
            ResultModel<List<NewsLetterModel>> result = new ResultModel<List<NewsLetterModel>>();
            var NewsLetters = unitOfWork.NewsLetterRepository.GetAllAsQueryable(x => !x.IsDeleted).ToList();
            if (NewsLetters != null)
            {
                result.Data = new List<NewsLetterModel>();
                mapper.Map(NewsLetters, result.Data);
                result.Success = true;
                result.TotalRecords = NewsLetters.Count();
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }

        public ResultModel<bool> SendNewsLetter(NewsLetterTemplateModel newsLetterTemplateModel)
        {
            var result = new ResultModel<bool>();
            dynamic userEmails = unitOfWork.NewsLetterRepository.GetAllAsQueryable(x => x.IsSubscribe && !x.IsDeleted && !String.IsNullOrWhiteSpace(x.Email)).Select(s => s.Email).AsEnumerable();
            if (userEmails == null)
            {
                result.Data = false;
                result.Success = false;
                result.Message = "No Subscriber Found";
                result.TotalRecords = userEmails.Count();
                result.StatusCode = (int)Enums.StatusCode.NotFound;
                return result;
            }
            userEmails = String.Join(",", userEmails);
            var body = EmailHelper.GetNewsLetterEmailBody(newsLetterTemplateModel.Title, newsLetterTemplateModel.Description, hostEnvironment.ContentRootPath);
            bool isSent = new Mailer()
                           .Subject("News Letter")
                           .Body(body)
                           .To(userEmails)
                           .Send();
            result.Success = isSent;
            result.Message = isSent ? Messages.NewsLetterEmail : Messages.EmailError;
            return result;

        }
    }
}
