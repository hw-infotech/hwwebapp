using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NM.API.Application.Models
{
    public class RequirmentVM
    {
        public int? Id { get; set; }
        [Required(ErrorMessage = "Job Requirment is required")]
        public string JobRequirment { get; set; }
    }
}
