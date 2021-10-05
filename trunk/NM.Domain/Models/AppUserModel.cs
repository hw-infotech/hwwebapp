using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class AppUserModel : EntityModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailId { get; set; }
        public string PhoneNumber { get; set; }
        public string Password { get; set; }
        public string ImagePath { get; set; }
        public int RoleId { get; set; }
        public bool IsActive { get; set; }
        public string Address { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public int Gender { get; set; }
        public string RoleName { get; set; }
        public int? DepartmentId { get; set; }
    }
}
