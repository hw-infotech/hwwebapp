using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface ITechnologyBusiness
    {
        ResultModel<bool> CreateTechnology(TechnologyModel technologyModel);
        ResultModel<bool> UpdateTechnology(TechnologyModel technologyModel);
        ResultModel<bool> DeleteTechnology(string bsonId);
        ResultModel<TechnologyModel> GetTechnologyByBsonId(string bsonId);
        ResultModel<List<TechnologyModel>> GetAllTechnology();
    }
}
