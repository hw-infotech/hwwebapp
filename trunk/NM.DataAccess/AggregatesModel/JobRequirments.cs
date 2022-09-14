using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.AggregatesModel
{
    public class JobRequirments : Entity
    {
        public int JobId { get; set; }
        public Job Job { get; set; }
        public int RequirmentId { get; set; }
        public Requirment Requirment { get; set; }
       
    }
}
