using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface IClientBusiness
    {
        ResultModel<bool> CreateClient(ClientModel clientModel);
        ResultModel<bool> UpdateClient(ClientModel clientModel);
        ResultModel<bool> DeleteClient(string bsonId);
        ResultModel<ClientModel> GetClientByBsonId(string bsonId);
        ResultModel<List<ClientModel>> GetAllClients();
    }
}
