using AutoMapper;
using NM.Business.Interfaces;
using NM.DataAccess.Interface;
using NM.Domain.Models;
using NM.Utility;
using System;
using System.Linq;

namespace NM.Business
{
   
    public class AccountBusiness : IAccountBusiness
    {
    
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        public AccountBusiness(IUnitOfWork _unitOfWork, IMapper _mapper)
        {
            unitOfWork = _unitOfWork;
            mapper = _mapper;
        }
        public ResultModel<AppUserModel> UserExists(string email, string password)
        {
            ResultModel<AppUserModel> result = new ResultModel<AppUserModel>();
            var hashPassword = Common.Hash(password);
            var user = unitOfWork.UserRepository.SingleOrDefault(x => x.EmailId.ToLower() == email.ToLower() && x.Password == hashPassword);
            if (user != null)
            {
                    result.Data = new AppUserModel();
                    mapper.Map(user, result.Data);
                    result.Success = true;
                    result.Message = Messages.Login;
                    result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                
            }
            else
            {
                result.Message = Messages.LoginFail;
                result.StatusCode = Convert.ToInt32(Enums.StatusCode.NotFound);
            }
            return result;
        }
        public ResultModel<AppUserModel> GetUserByEmailId(string EmailId)
        {
            ResultModel<AppUserModel> result = new ResultModel<AppUserModel>();
            var user = unitOfWork.UserRepository.Get(x => x.EmailId.ToLower() == EmailId.ToLower()).FirstOrDefault();
            if (user !=null )
            {
                result.Data = new AppUserModel();
                mapper.Map(user, result.Data);
                result.Success = true;
            }
            else
                result.Message = string.Format(Enums.ExistMsg, "No account with the email entered");
            return result;
        }

    }
}