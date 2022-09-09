using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace NM.API.Application.Models
{
    public class UserEnquiryVM
    {
        public string BsonId { get; set; }

        [Required(ErrorMessage = "Name Types is required")]
        public string Name { get; set; }
        public string CompanyName { get; set; }

        [Required(ErrorMessage = "Message Types is required")]
        public string Message { get; set; }
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Status is required")]
        public string Status { get; set; }

        [Required(ErrorMessage = "Enquiry Types is required")]
        public List<int> EnquiryTypes { get; set; }
    }
}
