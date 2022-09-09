using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class UserEnquiryModel:EntityModel
    {
        public string Name { get; set; }
        public string CompanyName { get; set; }
        public string Message { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Status { get; set; }
        public List<int> EnquiryTypes { get; set; }
    }
}
