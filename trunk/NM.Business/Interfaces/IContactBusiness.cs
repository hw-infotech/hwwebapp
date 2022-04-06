using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface IContactBusiness
    {
        ResultModel<bool> CreateContact(ContactModel contactModel);
        ResultModel<bool> UpdateContact(ContactModel contactModel);
        ResultModel<bool> DeleteContact(string bsonId);
        ResultModel<ContactModel> GetContactByBsonId(string bsonId);
        ResultModel<List<ContactModel>> GetAllContact();
    }
}
