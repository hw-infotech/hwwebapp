using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.AggregatesModel
{
    public class BenefitTypes : Entity
    {
        public string BenefitType { get; private set; }
        public BenefitTypes(string benefitType)
        {
            BenefitType = benefitType;
        }
    }
}
