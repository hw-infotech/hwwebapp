using AutoMapper;
using AutoMapper.Configuration;
using NM.Business.Interfaces;
using NM.DataAccess.Interface;
using NM.Domain.Models;
using NM.DataAccess.AggregatesModel;
using System.Collections.Generic;
using System;
using NM.Utility;
using System.Linq;

namespace NM.Business
{
    public class UserEnquiryBusiness : IUserEnquiryBusiness
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        public UserEnquiryBusiness(IUnitOfWork _unitOfWork, IMapper _mapper)
        {
            unitOfWork = _unitOfWork;
            mapper = _mapper;
        }
        public ResultModel<bool> Create(UserEnquiryModel userEnquiryModel)
        {
            // Initial I have set to false
            var result = new ResultModel<bool>()
            {
                Data = false,
                Success = false
            };
            var userEnquiry = new UserEnquiry(userEnquiryModel.Name, userEnquiryModel.CompanyName, userEnquiryModel.Message, userEnquiryModel.PhoneNumber, userEnquiryModel.Email, Messages.EnquiryStatusPannding);
            List<UserEnquiryType> userEnquiryTypes = new List<UserEnquiryType>();
            userEnquiryModel.EnquiryTypes.ForEach(id => userEnquiryTypes.Add(new UserEnquiryType() { EnquiryTypeId = id }));
            userEnquiryTypes.ForEach(item => item.UserEnquiry = userEnquiry);
            userEnquiry.UserEnquiryTypes = userEnquiryTypes;
            unitOfWork.UserEnquiryRepository.Insert(userEnquiry);
            if (userEnquiry.Id > 0)
            {
                result.Success = true;
                result.Data = true;
                result.Message = Messages.EnquirySuccess;
            }
            return result;
        }

        public ResultModel<List<UserEnquiryModel>> GetAll()
        {
            var result = new ResultModel<List<UserEnquiryModel>>()
            {
                Success = false
            };

            var userEnquiries = unitOfWork.UserEnquiryRepository.GetAllAsQueryable(x => !x.IsDeleted).ToList();
            if (userEnquiries != null)
            {
                result.Data = new List<UserEnquiryModel>();
                mapper.Map(userEnquiries, result.Data);
                result.TotalRecords = userEnquiries.Count();
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }
        public ResultModel<UserEnquiryModel> GetById(string bsonId)
        {
            var result = new ResultModel<UserEnquiryModel>();

            var userEnquiry = unitOfWork.UserEnquiryRepository.Get(x => x.BsonId == bsonId).FirstOrDefault();
            if (userEnquiry != null)
            {
                result.Data = mapper.Map<UserEnquiryModel>(userEnquiry);
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }
        ResultModel<bool> IUserEnquiryBusiness.UpdateUserEnquiry(UserEnquiryModel userEnquiryModel)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            var userEnquiry = unitOfWork.UserEnquiryRepository.Get(x => x.BsonId == userEnquiryModel.BsonId && !string.IsNullOrWhiteSpace(x.Email)).FirstOrDefault();
            if (userEnquiry != null)
            {
                var newUserEnquiry = mapper.Map<UserEnquiryModel>(userEnquiry);
                newUserEnquiry.Status = Messages.EnquiryStatusResolved;
                newUserEnquiry.Message = string.Empty;
                mapper.Map(newUserEnquiry, userEnquiry);
                bool isSent = new Mailer()
                          .Subject(Messages.EnquiryReply)
                          .Body(userEnquiryModel.Message)
                          .To(userEnquiry.Email)
                          .Send();
                if (isSent)
                    unitOfWork.UserEnquiryRepository.Update(userEnquiry);
                result.StatusCode = (int)Enums.StatusCode.OK;
                result.Data = true;
                result.Message = "";
                result.Success = true;
            }
            return result;
        }
    }
}
