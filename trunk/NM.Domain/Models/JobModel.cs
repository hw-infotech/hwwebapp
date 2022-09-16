using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class JobModel : EntityModel
    {
        public string BsonId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public string Functions { get; set; }
        public string JobType { get; set; }
        public string Industries { get; set; }
        public string Level { get; set; }
        public string JobRequirments { get; set; }
        public string JobResponsibilityTypes { get; set; }
        public string JobBenefits { get; set; }
    }
}
