using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace NM.Business.Interfaces
{
    public interface IAccountBusiness
    {
        ResultModel<AppUserModel> UserExists(string email, string password);
        ResultModel<AppUserModel> GetUserByEmailId(string EmailId);
    }
}
