using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class BlogCategoriesModel: EntityModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
