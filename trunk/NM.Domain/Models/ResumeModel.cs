using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class ResumeModel: EntityModel
    {
        public string DocumentName { get;  set; }
        public string DocumentExtension { get;  set; }
        public long DocumentSize { get;  set; }
    }
}
