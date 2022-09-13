using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface IJobBusiness
    {
        ResultModel<bool> CreateJob(JobModel jobModel,int curentUserId=0);
        ResultModel<List<JobModel>> GetAll();
        ResultModel<JobModel> GetById(string bsonId);
        ResultModel<bool> UpdateJob(JobModel jobModel, int curentUserId=0);
        ResultModel<bool> DeleteJob(string bsonId);
    }
}

