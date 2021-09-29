using System;
using System.Collections.Generic;
using System.Text;
using NM.DataAccess.SeedWork;

namespace NM.DataAccess.AggregatesModel
{
    public class Project: Entity
    {
        public string Name { get; private set; }
        public string Description { get; private set; }
        public string ImageURL { get; private set; }
        public int ClientId { get; private set; }
        public int TechnologyId { get; private set; }
        public Project(string name, string description, string imageURL, int clientId, int technologyId)
        {
            this.Name = name;
            this.Description = description;
            this.ImageURL = imageURL;
            this.ClientId = clientId;
            this.TechnologyId = technologyId;
        }

    }
}
