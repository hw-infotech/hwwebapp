using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.AggregatesModel
{
    public class JobResponsibilityTypes : Entity
    {
        public int JobId { get; set; }
        public int ResponsibilityTypeId { get; set; }
        public Job Job { get; set; }
        public ResponsibilityType ResponsibilityType { get; set; }
    }
}
