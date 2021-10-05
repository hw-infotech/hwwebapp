using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NM.API.Application.Models
{
    public class TechnologyVM
    {
        public string BsonId { get; set; }
        [Required(ErrorMessage = "Name is required")]
        [MaxLength(100, ErrorMessage = "Name can't be more than 50 characters"),
          MinLength(3, ErrorMessage = "Name can't be less than 3 characters")]
        public string Name { get; set; }
        public string ImageURL { get; set; }
        public int ClientId { get; set; }
        public int CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}
