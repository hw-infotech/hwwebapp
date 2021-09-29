using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
   public class TechnologyModel: EntityModel
    {
        public string Name { get; set; }
        public string ImageURL { get; set; }
        public int ClientId { get; set; }
    }
}
