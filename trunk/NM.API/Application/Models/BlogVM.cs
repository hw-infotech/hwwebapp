using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NM.API.Application.Models
{
    public class BlogVM
    {
        public string BsonId { get; set; }
        [Required(ErrorMessage = "Title is required")]
        [MaxLength(100, ErrorMessage = "Name can't be more than 50 characters"),
       MinLength(3, ErrorMessage = "Name can't be less than 3 characters")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Title is required")]
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public int CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}
