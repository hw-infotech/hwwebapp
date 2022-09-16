using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface IAppUserBusiness
    {
        ResultModel<AppUserModel> GetAppUser(string bsonId);
        ResultModel<bool> UpdateAppUser(AppUserModel appUserModel);
    }
}
