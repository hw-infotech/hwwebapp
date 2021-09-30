using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NM.API.Application.Models
{
    public class NewsLetterVM
    {
        public string BsonId { get; set; }
        [Required(ErrorMessage = "Email Id is required")]
        [DataType(DataType.EmailAddress, ErrorMessage = "Email is not valid")]
        [EmailAddress]
        public string Email { get; set; }
        public bool IsSubscribe { get; set; }
        public int CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}
