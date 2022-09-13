using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace NM.DataAccess.Interface
{
    public interface IRepository<TEntity> where TEntity : class
    {
        List<TEntity> Get(Expression<Func<TEntity, bool>> filter = null, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null, string includeProperties = "", bool ignoreLanguage = false);

        List<TEntity> Get(int limit, int skip, Expression<Func<TEntity, bool>> filter = null, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null, string includeProperties = "", bool ignoreLanguage = false);

        List<TResult> GetAs<TResult>(Expression<Func<TEntity, TResult>> select, Expression<Func<TEntity, bool>> filter = null, string includeProperties = "", bool ignoreLanguage = false) where TResult : class;
        Task<List<TEntity>> GetAsync(Expression<Func<TEntity, bool>> filter = null, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
           string includeProperties = "", bool ignoreLanguage = false);
        Task<List<TResult>> GetAsAsync<TResult>(Expression<Func<TEntity, TResult>> select, Expression<Func<TEntity, bool>> filter = null, string includeProperties = "") where TResult : class;

        Task<List<TEntity>> GetAsync(int limit, int skip, Expression<Func<TEntity, bool>> filter = null,
          Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null, string includeProperties = ""
          );
        int GetCount(Expression<Func<TEntity, bool>> filter = null);

        TEntity GetById(object id);
        TEntity SingleOrDefault(Expression<Func<TEntity, bool>> filter);
        Task<TEntity> SingleOrDefaultAsync(Expression<Func<TEntity, bool>> filter);

        void Insert(TEntity entity, bool SaveChanges = true);

        void InsertAll(List<TEntity> entities, bool SaveChanges = true);

        bool DeleteAll(List<TEntity> entities, bool SaveChanges = true);

        void UpdateAll(List<TEntity> entities, bool SaveChanges = true);

        bool Delete(object id, bool SaveChanges = true);

        bool Delete(TEntity entityToDelete, bool SaveChanges = true);

        void Update(TEntity entityToUpdate, bool SaveChanges = true);
        bool Any(Expression<Func<TEntity, bool>> filter);
        bool Exists(Expression<Func<TEntity, bool>> filter);
        IEnumerable<TEntity> GetAll();
        IQueryable<TEntity> GetAllAsQueryable();
        IEnumerable<TEntity> GetAll(Expression<Func<TEntity, bool>> whereCondition);
        IQueryable<TEntity> GetAllAsQueryable(Expression<Func<TEntity, bool>> whereCondition);
        List<TEntity> FilterExpressionRange(Expression<Func<TEntity, bool>> filter = null, params string[] includes);

    }
}
