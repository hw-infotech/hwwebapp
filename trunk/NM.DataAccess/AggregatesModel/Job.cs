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
        public string JobRequirments { get; private set; }
        public string JobResponsibilityTypes { get; private set; }
        public string JobBenefits { get; private set; }

        public Job(string title, string description, bool status, string functions, string jobType, string industries, string level, string jobRequirments, string jobResponsibilityTypes, string jobBenefits)
        {
            Title = title;
            Description = description;
            Status = status;
            Functions = functions;
            JobType = jobType;
            Industries = industries;
            Level = level;
            JobRequirments = jobRequirments;
            JobResponsibilityTypes = jobResponsibilityTypes;
            JobBenefits = jobBenefits;
        }

        public Job GetUpdatedJob(Job job, string title, string description, bool status, string functions, string jobType, string industries, string level)
        {
            job.Title = title;
            job.Description = description;
            job.Status = status;
            job.Functions = functions;
            job.JobType = jobType;
            job.Industries = industries;
            job.Level = level;
            return job;
        }

    }

}
