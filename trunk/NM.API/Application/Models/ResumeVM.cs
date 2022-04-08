using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NM.API.Application.Models
{
    public class ResumeVM
    {
        public string BsonId { get; set; }
        public string DocumentName { get;  set; }
        public string DocumentExtension { get;  set; }
        public long DocumentSize { get;  set; }
        public int CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}
