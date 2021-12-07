using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NM.API.Application.Models
{
    public class TestimonialsVM
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string ProjectName { get; set; }
        public string URL { get; set; }
        public string Designation { get; set; }
        public int CategoryId { get; set; }
        public int CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}
