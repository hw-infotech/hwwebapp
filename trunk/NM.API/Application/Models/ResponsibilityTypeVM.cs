using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NM.API.Application.Models
{
    public class ResponsibilityTypeVM
    {
        public int? Id { get; set; }
        [Required(ErrorMessage = "Responsibility is required")]
        public string Responsibility { get; set; }
    }
}
