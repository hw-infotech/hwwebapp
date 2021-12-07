using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.AggregatesModel
{
    public class Testimonials : Entity
    {
        public string Name { get; private set; }
        public string Description { get; private set; }
        public string ProjectName { get; private set; }
        public string URL { get; private set; }
        public string Designation { get; private set; }
        public Testimonials(string name, string description, string projectName, string uRL, string designation)
        {
            this.Name = name;
            this.Description = description;
            this.ProjectName = projectName;
            this.URL = uRL;
            this.Designation = designation;
        }

    }
}
