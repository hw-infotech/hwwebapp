using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class Role : EntityModel
    {
        public string Name { get; private set; }
        public bool IsActive { get; private set; }
        public bool IsDefault { get; private set; }
    }
}
