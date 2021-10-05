using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class EntityModel
    {
        public int Id { get; set; }
        public string BsonId { get; set; }
        public Boolean IsDeleted { get; set; }
        public int CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}
