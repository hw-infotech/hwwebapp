using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.SeedWork
{
    public abstract class Entity
    {
        int _Id;
        string _BsonId;
        Boolean _IsDeleted;
        int _CreatedBy;
        DateTime? _CreatedOn;
        int _UpdatedBy;
        DateTime? _UpdatedOn;

        public virtual int Id
        {
            get { return _Id; }
            set { _Id = value; }
        }
        public virtual string BsonId
        {
            get { return _BsonId; }
            set { _BsonId = value; }
        }
        public virtual Boolean IsDeleted
        {
            get { return _IsDeleted; }
            set { _IsDeleted = value; }
        }
        public virtual int CreatedBy
        {
            get { return _CreatedBy; }
            set { _CreatedBy = value; }
        }
        public virtual int UpdatedBy
        {
            get { return _UpdatedBy; }
            set { _UpdatedBy = value; }
        }
        public virtual DateTime? CreatedOn
        {
            get { return _CreatedOn; }
            set { _CreatedOn = value.HasValue ? value.Value : (DateTime?)null; }
        }
        public virtual DateTime? UpdatedOn
        {
            get { return _UpdatedOn; }
            set { _UpdatedOn = value.HasValue ? value.Value : (DateTime?)null; }
        }

        public Entity()
        {
            _BsonId = this.BsonId==null ? Guid.NewGuid().ToString() : this.BsonId;
            _IsDeleted = this.IsDeleted;
            _CreatedOn = DateTime.UtcNow;
            _CreatedBy = this.CreatedBy;
            _UpdatedBy = this.UpdatedBy;
            _UpdatedOn = this.Id > 0 ? DateTime.UtcNow : (DateTime?)null;
        }
    }
}
