using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NM.API.Application.Models
{
    public class ClientVM
    {
        [Required(ErrorMessage = "Name is required")]
        [MaxLength(100, ErrorMessage = "Name can't be more than 50 characters"),
        MinLength(3, ErrorMessage = "Name can't be less than 3 characters")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Designation is required")]
        public string Designation { get; set; }
        public string Feedback { get; set; }
        public string ImageURL { get; set; }
        public string VideoURL { get; set; }
        public string BsonId { get; set; }
        public Boolean IsDeleted { get; set; }
        public int CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}
