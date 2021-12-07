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
    public class ClientBusiness: IClientBusiness
    {
        #region Private Properties
        private readonly IMapper mapper;
        private readonly IConfiguration configuration;
        private readonly IUnitOfWork unitOfWork;

        #endregion

        #region Constructor
        public ClientBusiness(IMapper _mapper, IConfiguration _configuration, IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;
            configuration = _configuration;
            unitOfWork = _unitOfWork;
        }

        #endregion
        public ResultModel<bool> CreateClient(ClientModel clientModel)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            Client client = new Client(clientModel.Name, clientModel.Designation, clientModel.Feedback, clientModel.ImageURL, clientModel.VideoURL);
            client.CreatedBy = 1;
            unitOfWork.ClientRepository.Insert(client);
            result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
            result.Data = true;
            result.Success = true;
            return result;
        }
        public ResultModel<bool> UpdateClient(ClientModel clientModel)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            var client = unitOfWork.ClientRepository.Get(x => x.BsonId == clientModel.BsonId && !x.IsDeleted).FirstOrDefault();
            if (client != null)
            {
                clientModel.UpdatedBy = 1;
                clientModel.UpdatedOn = DateTime.UtcNow;
                clientModel.CreatedBy = client.CreatedBy;
                clientModel.CreatedOn = client.CreatedOn;
                mapper.Map(clientModel, client);
                unitOfWork.ClientRepository.Update(client);
                result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                result.Data = true;
                result.Success = true;
            }
            return result;
        }

        public ResultModel<bool> DeleteClient(string bsonId)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            var client = unitOfWork.ClientRepository.SingleOrDefault(x => x.BsonId == bsonId);
            if (client != null)
            {
                client.IsDeleted = true;
                client.UpdatedOn = DateTime.UtcNow;
                unitOfWork.ClientRepository.Update(client);
                result.Data = true;
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;

            }
            return result;
        }

        public ResultModel<ClientModel> GetClientByBsonId(string bsonId)
        {
            ResultModel<ClientModel> result = new ResultModel<ClientModel>();
            var client = unitOfWork.ClientRepository.SingleOrDefault(x => x.BsonId == bsonId && !x.IsDeleted);
            if (client != null)
            {
                result.Data = new ClientModel();
                mapper.Map(client, result.Data);
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }
        public ResultModel<List<ClientModel>> GetAllClients()
        {
            ResultModel<List<ClientModel>> result = new ResultModel<List<ClientModel>>();
            var clients = unitOfWork.ClientRepository.GetAllAsQueryable(x => !x.IsDeleted).ToList();
            if (clients != null)
            {
                result.Data = new List<ClientModel>();
                mapper.Map(clients, result.Data);
                result.Success = true;
                result.TotalRecords = clients.Count();
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }
    }
}
