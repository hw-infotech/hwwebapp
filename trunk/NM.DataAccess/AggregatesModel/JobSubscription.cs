using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.AggregatesModel
{
    public class JobSubscription : Entity
    {
        public string EmailId { get; private set; }
        public string JobBsonId { get; private set; }

        public JobSubscription(string emailId, string jobBsonId)
        {
            JobBsonId = jobBsonId;
            EmailId = emailId;
        }
    }
}

