using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
   public class ContactUsModel : EntityModel
    {
        public string Services { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string CompanyName { get; set; }
        public string ProjectDescription { get; set; }
    }
}
