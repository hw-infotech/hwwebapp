using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.AggregatesModel
{
    public class Requirment : Entity
    {
        public string JobRequirment { get; private set; }

        public Requirment(string jobRequirment)
        {
            JobRequirment = jobRequirment;
        }

    }
}
