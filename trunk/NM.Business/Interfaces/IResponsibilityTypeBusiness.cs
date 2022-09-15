using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
   public interface IResponsibilityTypeBusiness
    {

        ResultModel<List<ResponsibilityTypeModel>> GetAll();
        ResultModel<ResponsibilityTypeModel> Create(ResponsibilityTypeModel responsibilityTypeModel);

    }
}
