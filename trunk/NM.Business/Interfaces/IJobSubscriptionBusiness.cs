using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface IJobSubscriptionBusiness
    {
        ResultModel<bool> CreateJobSubscription(JobSubscriptionModel jobSubscriptionModel, int curentUserId = 0);
    }
}
