using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class FileUploadModel :EntityModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public IFormFile Files { get; set; }
    }
}
