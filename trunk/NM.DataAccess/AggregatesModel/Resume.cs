using System;
using System.Collections.Generic;
using System.Text;
using NM.DataAccess.SeedWork;
namespace NM.DataAccess.AggregatesModel
{
    public class Resume : Entity
    {
        public string DocumentName { get; private set; }
        public string DocumentExtension { get; private set; }
        public long DocumentSize { get; private set; }
        public Resume(string documentName, string documentExtension, long documentSize)
        {
            this.DocumentName = documentName;
            this.DocumentExtension = documentExtension;
            this.DocumentSize = documentSize;
        }
    }
}

