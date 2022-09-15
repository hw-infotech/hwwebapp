using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.AggregatesModel
{
    public class JobBenefits : Entity
    {
        public int JobId { get; set; }
        public int BenefitTypesId { get; set; }
        public Job Job { get; set; }
        public BenefitTypes BenefitTypes { get; set; }
    }
}
