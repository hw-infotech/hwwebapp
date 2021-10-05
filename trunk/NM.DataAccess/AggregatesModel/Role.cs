using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.AggregatesModel
{
    public class Role: Entity
    {
        public string Name { get; private set; }
        public bool IsActive { get; private set; }
        public bool IsDefault { get; private set; }
        public Role(string name, bool isActive, bool isDefault)
        {
            this.Name = name;
            this.IsActive = isActive;
            this.IsDefault = isDefault;
        }

    }
}
