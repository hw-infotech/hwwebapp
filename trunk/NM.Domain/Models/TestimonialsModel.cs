using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class TestimonialsModel : Entity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string ProjectName { get; set; }
        public string URL { get; set; }
        public string Designation { get; set; }
    }
}
