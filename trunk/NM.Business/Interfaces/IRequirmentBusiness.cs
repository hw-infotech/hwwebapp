using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface IRequirmentBusiness
    {
        ResultModel<List<RequirmentModel>> GetAll();
        ResultModel<RequirmentModel>Create(RequirmentModel RequirmentModel);
    }
}
