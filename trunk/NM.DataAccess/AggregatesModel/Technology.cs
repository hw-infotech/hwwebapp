using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.AggregatesModel
{
    public class Technology : Entity
    {
        public string Name { get; private set; }
        public string ImageURL { get; private set; }
        public int ClientId { get; private set; }
        public Technology(string name, string imageURL, int clientId)
        {
            this.Name = name;
            this.ImageURL = imageURL;
            this.ClientId = clientId;
        }
    }
}
