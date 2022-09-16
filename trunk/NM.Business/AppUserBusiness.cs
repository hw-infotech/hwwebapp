using AutoMapper;
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
    public class AppUserBusiness : IAppUserBusiness
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;

        public AppUserBusiness(IMapper _mapper, IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;
            unitOfWork = _unitOfWork;


        }
        public ResultModel<AppUserModel> GetAppUser(string bsonId)
        {
            ResultModel<AppUserModel> resultModel = new ResultModel<AppUserModel>();
            var appUser = unitOfWork.UserRepository.Get(x => x.BsonId == bsonId && !x.IsDeleted).FirstOrDefault();
            if (appUser != null)
            {
                resultModel.Data = mapper.Map<AppUserModel>(appUser);
                resultModel.Data.Password = "";
                resultModel.Success = true;
                resultModel.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
            }
            return resultModel;
        }
        public ResultModel<bool> UpdateAppUser(AppUserModel appUserModel)
        {
            ResultModel<bool> resultModel = new ResultModel<bool>()
            {
                Data = false,
                Success = false
            };
            var appUser = unitOfWork.UserRepository.Get(x => x.BsonId == appUserModel.BsonId).FirstOrDefault();
            if (appUser != null)
            {
                var password = string.IsNullOrWhiteSpace(appUserModel.Password) ? appUser.Password : Common.Hash(appUserModel.Password);
                appUserModel.PhoneNumber = string.IsNullOrWhiteSpace(appUserModel.PhoneNumber) ? appUser.PhoneNumber : appUserModel.PhoneNumber;
                appUserModel.EmailId = string.IsNullOrWhiteSpace(appUserModel.EmailId) ? appUser.EmailId : appUserModel.EmailId;
                appUserModel.Address = string.IsNullOrWhiteSpace(appUserModel.Address) ? appUser.Address : appUserModel.Address;

                // set private propertis value
                appUser = appUser.UpdateAppUser(appUser, appUserModel.FirstName, appUserModel.PhoneNumber, appUserModel.EmailId, appUserModel.Address, password);

                appUser.UpdatedOn = DateTime.UtcNow;
                unitOfWork.UserRepository.Update(appUser);
                resultModel.Data = true;
                resultModel.Success = true;
                resultModel.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
            };


            return resultModel;
        }
    }
}
