using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NM.API.Application.Models
{
    public class JobSubscriptionVM
    {
        [Required(ErrorMessage = "JobBsonId is required")]
        public string JobBsonId { get; set; }
        [Required(ErrorMessage = "EmailId is required")]
        public string EmailId { get; set; }
    }
}
