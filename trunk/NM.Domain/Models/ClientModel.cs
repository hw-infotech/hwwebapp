using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class ClientModel: EntityModel
    {
        public string Name { get; set; }
        public string Designation { get; set; }
        public string Feedback { get; set; }
        public string ImageURL { get; set; }
        public string VideoURL { get; set; }
    }
}
