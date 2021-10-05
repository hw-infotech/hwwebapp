using System;
using System.Collections.Generic;
using System.Text;
using NM.DataAccess.SeedWork;

namespace NM.DataAccess.AggregatesModel
{
    public class CurrentOpening: Entity
    {
        public string Title { get; private set; }
        public string Description { get; private set; }
        public CurrentOpening(string title, string description)
        {
            this.Title = title;
            this.Description = description;
        }
    }
}
