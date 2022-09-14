using AutoMapper;
using AutoMapper.Configuration;
using NM.Business.Interfaces;
using NM.DataAccess.AggregatesModel;
using NM.DataAccess.Interface;
using NM.Domain.Models;
using NM.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;


namespace NM.Business
{
    public class JobBusiness : IJobBusiness
    {
        private readonly IMapper mapper;
        private readonly IUnitOfWork unitOfWork;

        public JobBusiness(IMapper _mapper, IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;
            unitOfWork = _unitOfWork;
        }
        public ResultModel<bool> CreateJob(JobModel jobModel, int curentUserId = 0)
        {
            var result = new ResultModel<bool>()
            {
                Data = false,
                Success = true
            };

            Job job = new Job(jobModel.Title, jobModel.Description, jobModel.Status, jobModel.Functions, jobModel.JobType, jobModel.Industries, jobModel.Level, jobModel.Responsibility, jobModel.Benefits);
            job.CreatedBy = curentUserId;
            //List<JobRequirments> jobRequierment = jobModel.JobRequirments.Select(x => new JobRequirments { RequirmentId = x, Job = job }).ToList();
            List<JobRequirments> jobRequierment = new List<JobRequirments>();
            jobModel.JobRequirments.ForEach(id => jobRequierment.Add(new JobRequirments()
            {
                RequirmentId = id
            }));
            jobRequierment.ForEach(item => item.Job = job);
            unitOfWork.JobRepository.Insert(job);
            if (job.Id > 0)
            {
                result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                result.Data = true;
                result.Success = true;
            }
            return result;
        }
        public ResultModel<List<JobModel>> GetAll()
        {
            ResultModel<List<JobModel>> result = new ResultModel<List<JobModel>>();
            var Jobs = unitOfWork.JobRepository.FilterExpressionRange(x => !x.IsDeleted, new string[] { "JobRequirments" }).ToList();
            if (Jobs != null)
            {
                List<JobModel> jobModels = new List<JobModel>();
                Jobs.ForEach(x => jobModels.Add(new JobModel { Title = x.Title, Description = x.Description, Status = x.Status, Functions = x.Functions, JobType = x.JobType, Industries = x.Industries, Level = x.Level, Responsibility = x.Responsibility, Benefits = x.Benefits, JobRequirments = x.JobRequirments.Count > 0 ? x.JobRequirments.Select(y => y.Id).ToList() : new List<int>() }));
                result.Data = jobModels;
                result.TotalRecords = Jobs.Count();
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }

        public ResultModel<JobModel> GetById(string bsonId)
        {

            ResultModel<JobModel> result = new ResultModel<JobModel>()
            {
                Success = false,
                StatusCode = (int)Enums.StatusCode.NotFound
            };
            var job = unitOfWork.JobRepository.FilterExpressionRange(x => !x.IsDeleted && x.BsonId == bsonId, new string[] { "JobRequirments" }).FirstOrDefault();
            if (job != null)
            {
                var jobModel = mapper.Map<JobModel>(job);
                if (job.JobRequirments.Count > 0)
                    jobModel.JobRequirments = job.JobRequirments.Select(x => x.RequirmentId).ToList();
                result.Data = jobModel;
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }

        public ResultModel<bool> UpdateJob(JobModel jobModel, int curentUsertId = 0)
        {
            var result = new ResultModel<bool>();
            result.Data = false;
            result.Success = false;

            var JobEntity = unitOfWork.JobRepository.FilterExpressionRange(x => !x.IsDeleted && x.BsonId == jobModel.BsonId, new string[] { "JobRequirments" }).FirstOrDefault();
            if (JobEntity != null)
            {
                Job job = new Job(jobModel.Title, jobModel.Description, jobModel.Status, jobModel.Functions, jobModel.JobType, jobModel.Industries, jobModel.Level, jobModel.Responsibility, jobModel.Benefits);

                job.Id = JobEntity.Id;
                job.BsonId = jobModel.BsonId;
                job.UpdatedOn = DateTime.UtcNow;
                job.CreatedBy = JobEntity.CreatedBy;
                job.CreatedOn = JobEntity.CreatedOn;
                job.UpdatedBy = curentUsertId;
                var jobRequirments = unitOfWork.JobRequirmentsRepository.Get(y => y.JobId == JobEntity.Id);

                if (jobRequirments != null && jobRequirments.Count > 0)
                    unitOfWork.JobRequirmentsRepository.DeleteAll(jobRequirments);

                jobRequirments = jobModel.JobRequirments.Select(x => new JobRequirments { RequirmentId = x }).ToList();
                jobRequirments.ForEach(x => x.Job = job);
                job.JobRequirments = jobRequirments;
                //unitOfWork.JobRequirmentsRepository.InsertAll(jobRequirments);
                unitOfWork.JobRepository.Update(job);
                result.Data = true;
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }
        public ResultModel<bool> DeleteJob(string bsonId)
        {
            ResultModel<bool> resultModel = new ResultModel<bool>()
            {
                Data = false,
                Success = false,
                StatusCode = (int)Enums.StatusCode.NotFound
            };
            var result = unitOfWork.JobRepository.Get(x => !x.IsDeleted && x.BsonId == bsonId).Select(x => { x.IsDeleted = true; return x; }).FirstOrDefault();
            if (result != null)
            {
                unitOfWork.JobRepository.Update(result);
                resultModel.Data = true;
                resultModel.Success = true;
                resultModel.StatusCode = (int)Enums.StatusCode.OK;
            }
            return resultModel;
        }
    }
}

