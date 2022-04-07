using AutoMapper;
using Microsoft.Extensions.Configuration;
using NM.Business.Interfaces;
using NM.DataAccess.AggregatesModel;
using NM.DataAccess.Interface;
using NM.Domain.Models;
using NM.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NM.Business
{
    public class ContactBusiness : IContactBusiness
    {
        #region Private Properties
        private readonly IMapper mapper;
        private readonly IConfiguration configuration;
        private readonly IUnitOfWork unitOfWork;

        #endregion

        #region Constructor
        public ContactBusiness(IMapper _mapper, IConfiguration _configuration, IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;
            configuration = _configuration;
            unitOfWork = _unitOfWork;
        }

        #endregion
        //public ResultModel<bool> CreateContact(ContactModel contactModal)
        //{
        //    ResultModel<bool> result = new ResultModel<bool>();
        //    Contact contact = new Contact(contactModal.Services, contactModal.Name, contactModal.Email, contactModal.CompanyName, contactModal.ProjectDescription);
        //    contact.CreatedBy = 1;
        //    unitOfWork.ContactRepository.Insert(contact);
        //    result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
        //    result.Data = true;
        //    result.Success = true;
        //    return result;
        //}
        public ResultModel<bool> UpdateContact(ContactModel contactModal)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            var contact = unitOfWork.ContactRepository.Get(x => x.BsonId == contactModal.BsonId && !x.IsDeleted).FirstOrDefault();
            if (contact != null)
            {
                contactModal.UpdatedBy = 1;
                contactModal.UpdatedOn = DateTime.UtcNow;
                contactModal.CreatedBy = contact.CreatedBy;
                contactModal.CreatedOn = contact.CreatedOn;
                mapper.Map(contactModal, contact);
                unitOfWork.ContactRepository.Update(contact);
                result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                result.Data = true;
                result.Success = true;
            }
            return result;
        }

        public ResultModel<bool> DeleteContact(string bsonId)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            var contact = unitOfWork.ContactRepository.SingleOrDefault(x => x.BsonId == bsonId);
            if (contact != null)
            {
                contact.IsDeleted = true;
                contact.UpdatedOn = DateTime.UtcNow;
                unitOfWork.ContactRepository.Update(contact);
                result.Data = true;
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;

            }

            return result;
        }
        public ResultModel<ContactModel> GetContactByBsonId(string bsonId)
        {
            ResultModel<ContactModel> result = new ResultModel<ContactModel>();
            var contact = unitOfWork.ContactRepository.SingleOrDefault(x => x.BsonId == bsonId && !x.IsDeleted);
            if (contact != null)
            {
                result.Data = new ContactModel();
                mapper.Map(contact, result.Data);
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }
        public ResultModel<List<ContactModel>> GetAllContact()
        {
            ResultModel<List<ContactModel>> result = new ResultModel<List<ContactModel>>();
            var contacts = unitOfWork.ContactRepository.GetAllAsQueryable(x => !x.IsDeleted).ToList();
            if (contacts != null)
            {
                result.Data = new List<ContactModel>();
                mapper.Map(contacts, result.Data);
                result.Success = true;
                result.TotalRecords = contacts.Count();
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }

        public ResultModel<bool> CreateContact(ContactModel contactModal)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            var contact = unitOfWork.ContactRepository.Get(x => x.Email == contactModal.Email && !x.IsDeleted).FirstOrDefault();
            if (contact != null)
            {
                contactModal.BsonId = contact.BsonId;
                contactModal.UpdatedBy = 1;
                contactModal.UpdatedOn = DateTime.UtcNow;
                contactModal.CreatedBy = contact.CreatedBy;
                contactModal.CreatedOn = contact.CreatedOn;
                mapper.Map(contactModal, contact);
                unitOfWork.ContactRepository.Update(contact);
                result = ResultModel<bool>.GetResponseModal(true, (int)Enums.StatusCode.OK, true);
                return result;
            }

            contactModal.UpdatedBy = 1;
            contactModal.UpdatedOn = DateTime.UtcNow;
            contactModal.CreatedBy = contact.CreatedBy;
            contactModal.CreatedOn = contact.CreatedOn;
            mapper.Map(contactModal, contact);
            unitOfWork.ContactRepository.Update(contact);
            result = ResultModel<bool>.GetResponseModal(true, (int)Enums.StatusCode.OK, true);
            return result;

        }

    }
}
