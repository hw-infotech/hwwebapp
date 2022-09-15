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

            Job job = new Job(jobModel.Title, jobModel.Description, jobModel.Status, jobModel.Functions, jobModel.JobType, jobModel.Industries, jobModel.Level);
            job.CreatedBy = curentUserId;

            //List<JobRequirments> jobRequierment = jobModel.JobRequirments.Select(x => new JobRequirments { RequirmentId = x, Job = job }).ToList();

            //Add jobRequierments
            List<JobRequirments> jobRequierment = new List<JobRequirments>();
            jobModel.JobRequirment.ForEach(id => jobRequierment.Add(new JobRequirments()
            {
                RequirmentId = id
            }));
            jobRequierment.ForEach(item => item.Job = job);
            job.JobRequirments = jobRequierment;
            //Add job Responsibilites
            List<JobResponsibilityTypes> jobResponsibilityTypes = new List<JobResponsibilityTypes>();
            jobModel.JobResponsibility.ForEach(Id =>
            {
                jobResponsibilityTypes.Add(new JobResponsibilityTypes()
                {
                    ResponsibilityTypeId = Id
                });
            });
            jobResponsibilityTypes.ForEach(x => x.Job = job);
            job.JobResponsibilityTypes = jobResponsibilityTypes;
            // Add JobBenefits
            List<JobBenefits> jobBenefits = new List<JobBenefits>();
            jobModel.JobBenefit.ForEach(Id =>
            {
                jobBenefits.Add(new JobBenefits()
                {
                    BenefitTypesId = Id
                });

            });
            jobBenefits.ForEach(x => x.Job = job);
            job.JobBenefits = jobBenefits;

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
            var Jobs = unitOfWork.JobRepository.FilterExpressionRange(x => !x.IsDeleted, new string[] { "JobRequirments", "JobResponsibilityTypes", "JobBenefits" }).ToList();
            if (Jobs != null)
            {
                List<JobModel> jobModels = new List<JobModel>();
                Jobs.ForEach(x => jobModels.Add(new JobModel { Title = x.Title, Description = x.Description, Status = x.Status, Functions = x.Functions, JobType = x.JobType, Industries = x.Industries, Level = x.Level, JobRequirment = x.JobRequirments.Count > 0 ? x.JobRequirments.Select(y => y.Id).ToList() : new List<int>(), JobResponsibility = x.JobResponsibilityTypes.Count > 0 ? x.JobResponsibilityTypes.Select(y => y.Id).ToList() : new List<int>(), JobBenefit = x.JobBenefits.Count > 0 ? x.JobBenefits.Select(y => y.Id).ToList() : new List<int>() }));
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
            var job = unitOfWork.JobRepository.FilterExpressionRange(x => !x.IsDeleted && x.BsonId == bsonId, new string[] { "JobRequirments", "JobResponsibilityTypes", "JobBenefits" }).FirstOrDefault();
            if (job != null)
            {
                var jobModel = mapper.Map<JobModel>(job);
                jobModel.JobRequirment = job.JobRequirments.Count > 0 ? job.JobRequirments.Select(x => x.RequirmentId).ToList() : new List<int>();
                jobModel.JobBenefit = job.JobBenefits.Count > 0 ? job.JobBenefits.Select(x => x.Id).ToList() : new List<int>();
                jobModel.JobResponsibility = job.JobResponsibilityTypes.Count > 0 ? job.JobResponsibilityTypes.Select(x => x.Id).ToList() : new List<int>();

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

            var JobEntity = unitOfWork.JobRepository.FilterExpressionRange(x => !x.IsDeleted && x.BsonId == jobModel.BsonId, new string[] { "JobRequirments", "JobResponsibilityTypes", "JobBenefits" }).FirstOrDefault();
            if (JobEntity != null)
            {
                JobEntity = JobEntity.GetUpdatedJob(JobEntity, jobModel.Title, jobModel.Description, jobModel.Status, jobModel.Functions, jobModel.JobType, jobModel.Industries, jobModel.Level);

                JobEntity.UpdatedOn = DateTime.UtcNow;
                JobEntity.UpdatedBy = curentUsertId;

                //Add jobRequierments
                List<JobRequirments> jobRequierment = new List<JobRequirments>();
                jobModel.JobRequirment.ForEach(id => jobRequierment.Add(new JobRequirments()
                {
                    JobId = JobEntity.Id,
                    RequirmentId = id
                }));
                //  jobRequierment.ForEach(item => item.Job = JobEntity);


                //Add job Responsibilites
                List<JobResponsibilityTypes> jobResponsibilityTypes = new List<JobResponsibilityTypes>();
                jobModel.JobResponsibility.ForEach(Id =>
                {
                    jobResponsibilityTypes.Add(new JobResponsibilityTypes()
                    {
                        JobId = JobEntity.Id,
                        ResponsibilityTypeId = Id
                    });
                });
                //jobResponsibilityTypes.ForEach(x => x.Job = JobEntity);


                // Add JobBenefits
                List<JobBenefits> jobBenefits = new List<JobBenefits>();
                jobModel.JobBenefit.ForEach(Id =>
                {
                    jobBenefits.Add(new JobBenefits()
                    {
                        JobId = JobEntity.Id,
                        BenefitTypesId = Id
                    });

                });
                // jobBenefits.ForEach(x => x.Job = JobEntity);

                //delete old relational data
                if (JobEntity.JobRequirments != null && JobEntity.JobRequirments.Count > 0)
                    unitOfWork.JobRequirmentsRepository.DeleteAll(JobEntity.JobRequirments.ToList());

                if (JobEntity.JobBenefits != null && JobEntity.JobBenefits.Count > 0)
                    unitOfWork.JobBenefitsRepository.DeleteAll(JobEntity.JobBenefits.ToList());

                if (JobEntity.JobResponsibilityTypes != null && JobEntity.JobResponsibilityTypes.Count > 0)
                    unitOfWork.JobResponsibilityTypesRepository.DeleteAll(JobEntity.JobResponsibilityTypes.ToList());
                
                JobEntity.JobRequirments = null;
                JobEntity.JobResponsibilityTypes = null;
                JobEntity.JobBenefits = null;

                unitOfWork.JobRequirmentsRepository.InsertAll(jobRequierment);
                unitOfWork.JobResponsibilityTypesRepository.InsertAll(jobResponsibilityTypes);
                unitOfWork.JobBenefitsRepository.InsertAll(jobBenefits);

                unitOfWork.JobRepository.Update(JobEntity);
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

