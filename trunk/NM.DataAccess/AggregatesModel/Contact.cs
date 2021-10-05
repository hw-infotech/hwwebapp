using System;
using System.Collections.Generic;
using System.Text;
using NM.DataAccess.SeedWork;
namespace NM.DataAccess.AggregatesModel
{
    public class Contact: Entity
    {
        public string Name { get; private set; }
        public string Email { get; set; }
        public string Description { get; private set; }
        public Contact(string name, string email, string description)
        {
            this.Name = name;
            this.Email = email;
            this.Description = description;
        }
    }
}
