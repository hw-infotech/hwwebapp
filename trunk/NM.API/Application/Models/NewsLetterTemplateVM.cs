using System.ComponentModel.DataAnnotations;

namespace NM.API.Application.Models
{
    public class NewsLetterTemplateVM
    {
        [Required(ErrorMessage = "Title is required")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Description is required")]
        public string Description { get; set; }
    }
}
