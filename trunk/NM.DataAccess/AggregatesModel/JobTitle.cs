using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.AggregatesModel
{
    public class JobTitle : Entity
    {
        public string Title { get; private set; }
        public Job Job { get; set; }

        public JobTitle(string title)
        {
            Title = title;
        }
    }
}
