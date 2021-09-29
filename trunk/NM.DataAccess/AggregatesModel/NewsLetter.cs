using System;
using System.Collections.Generic;
using System.Text;
using NM.DataAccess.SeedWork;

namespace NM.DataAccess.AggregatesModel
{
    public class NewsLetter: Entity
    {
        public string Email { get; private set; }
        public NewsLetter(string email)
        {
            this.Email = email;
        }
    }
}
