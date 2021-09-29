using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class ContactModel: EntityModel
    {
        public string Name { get; private set; }
        public string Email { get; set; }
        public string Description { get; private set; }
    }
}
