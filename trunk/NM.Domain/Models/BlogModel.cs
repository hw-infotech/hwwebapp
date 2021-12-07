using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class BlogModel: EntityModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
    }
}
