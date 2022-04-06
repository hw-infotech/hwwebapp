using System;
using System.Collections.Generic;
using System.Text;
using NM.DataAccess.SeedWork;
namespace NM.DataAccess.AggregatesModel
{
    public class Contact: Entity
    {
        public string Services { get; private set; }
        public string Name { get; private set; }
        public string Email { get; private set; }
        public string CompanyName { get; private set; }
        public string ProjectDescription { get; private set; }
        public Contact(string services,string name, string email, string companyName,string projectDescription)
        {
            this.Services = services;
            this.Name = name;
            this.Email = email;
            this.CompanyName = companyName;
            this.ProjectDescription = projectDescription;
        }
    }
}
