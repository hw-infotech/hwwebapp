using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class ProjectModel : EntityModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int TechnologyId { get; set; }
        public string ImageURL { get; set; }
        public int ClientId { get; set; }
    }
}
