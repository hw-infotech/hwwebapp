using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class ApplyJobModel: EntityModel
    {
        public string Title { get;set; }
        public string Description { get; set; }
        public int JobOpenId { get; set; }
    }
}
