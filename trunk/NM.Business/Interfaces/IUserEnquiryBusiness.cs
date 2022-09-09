using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface IUserEnquiryBusiness
    {
        ResultModel<bool> Create(UserEnquiryModel userEnquiryModel);
        ResultModel<List<UserEnquiryModel>> GetAll();
        ResultModel<UserEnquiryModel> GetById(string bsonId);
        ResultModel<bool> UpdateUserEnquiry(UserEnquiryModel userEnquiryModel);
    }
}
