using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.AggregatesModel
{
    public class EnquiryType:Entity
    {
        public string Name { get; private set; }
        public IList<UserEnquiryType> UserEnquiryTypes { get; set; }
        public EnquiryType(string name)
        {
            Name = name;
        }
    }
}
