using System;
using System.Collections.Generic;
using NM.DataAccess.SeedWork;

namespace NM.DataAccess.AggregatesModel
{
    public class Department: Entity
    {
        public string Title { get; private set; }
        public string Description { get; private set; }
        public Department(string title, string description)
        {
            this.Title = title;
            this.Description = description;
        }
    }
}
