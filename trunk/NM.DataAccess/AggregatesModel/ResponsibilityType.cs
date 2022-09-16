using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.AggregatesModel
{
    public class ResponsibilityType : Entity
    {
        public string Responsibility { get; private set; }
        public ResponsibilityType(string responsibility)
        {
            Responsibility = responsibility;
        }
    }
}
