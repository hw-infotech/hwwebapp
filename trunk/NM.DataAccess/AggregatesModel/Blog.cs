using System;
using System.Collections.Generic;
using NM.DataAccess.SeedWork;

namespace NM.DataAccess.AggregatesModel
{
    public class Blog: Entity
    {
        public string Title { get; private set; }
        public string Description { get; private set; }
        public int CategoryId { get; private set; }
        public Blog(string title, string description,int categoryId)
        {
            this.Title = title;
            this.Description = description;
            this.CategoryId = categoryId;
        }

    }
}
