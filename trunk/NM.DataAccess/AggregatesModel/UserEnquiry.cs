using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.AggregatesModel
{
    public class UserEnquiry : Entity
    {
        public string Name { get; private set; }
        public string CompanyName { get; private set; }
        public string Message { get; private set; }
        public string PhoneNumber { get; private set; }
        public string Email { get; private set; }
        public string Status { get; private set; }
        public IList<UserEnquiryType>  UserEnquiryTypes { get; set; }
        public UserEnquiry(string name,string companyName,string message,string phoneNumber,string email,string status)
        {
            Name = name;
            CompanyName = companyName;
            Message = message;
            PhoneNumber = phoneNumber;
            Email = email;
            Status = status;
        }
      
    }
}
