
using NM.DataAccess.SeedWork;

namespace NM.DataAccess.AggregatesModel
{
   public class ApplyJob : Entity
    {
        public string Title { get; private set; }
        public string Description { get; private set; }
        public int JobOpenId { get; set; }
        public ApplyJob(string title, string description, int jobOpenId)
        {
            this.Title = title;
            this.Description = description;
            this.JobOpenId = jobOpenId;

        }
    }
}
