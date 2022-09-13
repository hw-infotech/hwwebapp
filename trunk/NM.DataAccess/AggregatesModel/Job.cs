using NM.DataAccess.SeedWork;
using System;
using System.Collections.Generic;

namespace NM.DataAccess.AggregatesModel
{
    public class Job : Entity
    {
        public string Title { get; private set; }
        public string Description { get; private set; }
        public bool Status { get; private set; }
        public string Functions { get; private set; }
        public string JobType { get; private set; }
        public string Industries { get; private set; }
        public string Level { get; private set; }
        public string Responsibility { get; private set; }
        public string Benefits { get; private set; }

        //Relational Table 
        public ICollection<JobRequirments> JobRequirments { get; set; }


        public Job(string title, string description, bool status, string functions, string jobType, string industries, string level, string responsibility, string benefits)
        {
            Title = title;
            Description = description;
            Status = status;
            Functions = functions;
            JobType = jobType;
            Industries = industries;
            Level = level;
            Responsibility = responsibility;
            Benefits = benefits;
        }
    }

}
