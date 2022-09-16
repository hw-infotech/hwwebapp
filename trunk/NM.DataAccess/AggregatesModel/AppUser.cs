using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NM.DataAccess.AggregatesModel
{
    public class AppUser : Entity
    {
        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public string EmailId { get; private set; }
        public string PhoneNumber { get; private set; }
        public string Password { get; private set; }
        public string ImagePath { get; private set; }
        public int RoleId { get; private set; }
        public bool IsActive { get; private set; }
        public string Address { get; private set; }
        public DateTime? DateOfBirth { get; private set; }
        public int Gender { get; private set; }
        public string RoleName { get; private set; }
        public int? DepartmentId { get; private set; }
        public AppUser(string firstName, string lastName, string emailId, string phoneNumber, string password, string imagePath, int roleId, bool isActive, DateTime? dateOfBirth, int gender, string roleName, int? departmentId)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.EmailId = emailId;
            this.PhoneNumber = phoneNumber;
            this.Password = password;
            this.ImagePath = imagePath;
            this.RoleId = roleId;
            this.IsActive = isActive;
            this.DateOfBirth = dateOfBirth;
            this.Gender = gender;
            this.RoleName = roleName;
            this.DepartmentId = departmentId;
        }
        public AppUser UpdateAppUser(AppUser appUser, string firstName, string phoneNumber, string emailId, string address, string password)
        {
            appUser.FirstName = firstName.Split(" ").Length > 0 ? firstName.Split(" ")[0] : appUser.FirstName;
            appUser.LastName = firstName.Split(" ").Length > 1 ? firstName.Split(" ")[1] : appUser.LastName;
            appUser.PhoneNumber = phoneNumber;
            appUser.EmailId = emailId;
            appUser.Address = address;
            appUser.Password = password;
            return appUser;
        }
    }
}
