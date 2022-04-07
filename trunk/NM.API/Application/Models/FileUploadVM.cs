using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NM.API.Application.Models
{
    public class FileUploadVM
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public ICollection<IFormFile> Files { get; set; }
    }
}
