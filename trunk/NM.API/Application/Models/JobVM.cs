using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NM.API.Application.Models
{
    public class JobVM
    {
        public string BsonId { get; set; }
        [Required(ErrorMessage = "Title is required")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Description is required")]
        public string Description { get; set; }
        [Required(ErrorMessage = "Status is required")]
        public bool Status { get; set; }
        [Required(ErrorMessage = "Functions is required")]
        public string Functions { get; set; }
        [Required(ErrorMessage = "JobType is required")]
        public string JobType { get; set; }
        [Required(ErrorMessage = "Industries is required")]
        public string Industries { get; set; }
        [Required(ErrorMessage = "Level is required")]
        public string Level { get; set; }
        [Required(ErrorMessage = "Responsibility is required")]
        public string Responsibility { get; set; }
        [Required(ErrorMessage = "Benefits is required")]
        public string Benefits { get; set; }


        //Relational Table 
        [Required(ErrorMessage = "JobRequirments is required")]
        public List<int> JobRequirments { get; set; }

    }
}
