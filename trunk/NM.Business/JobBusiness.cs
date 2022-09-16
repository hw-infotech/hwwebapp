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
        private readonly INewsLetterBusiness newsLetterBusiness;

        public JobBusiness(IMapper _mapper, IUnitOfWork _unitOfWork, INewsLetterBusiness _newsLetterBusiness)
        {
            newsLetterBusiness = _newsLetterBusiness;
            mapper = _mapper;
            unitOfWork = _unitOfWork;
        }
        public ResultModel<bool> CreateJob(JobModel jobModel, int curentUserId = 0)
        {
            var result = new ResultModel<bool>()
            {
                Data = false,
                Success = false
            };
            jobModel.BsonId = string.Empty;
            
            Job job = new Job(jobModel.Title, jobModel.Description, jobModel.Status, jobModel.Functions, jobModel.JobType, jobModel.Industries, jobModel.Level, jobModel.JobRequirments, jobModel.JobResponsibilityTypes, jobModel.JobBenefits);
            job.CreatedBy = curentUserId;
            unitOfWork.JobRepository.Insert(job);
            if (job.Id > 0)
            {
                newsLetterBusiness.SendNewsLetter(new NewsLetterTemplateModel() { Title = jobModel.Title, Description = jobModel.Description });
                result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                result.Data = true;
                result.Success = true;
            }
            return result;
        }
        public ResultModel<List<JobModel>> GetAll()
        {
            ResultModel<List<JobModel>> result = new ResultModel<List<JobModel>>();
            var jobs = unitOfWork.JobRepository.GetAll(x => !x.IsDeleted).ToList();
            if (jobs != null)
            {
               var jobModels= mapper.Map<List<JobModel>>(jobs);
               
               
                result.Data = jobModels;
                result.TotalRecords = jobs.Count();
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
            var job = unitOfWork.JobRepository.Get(x => !x.IsDeleted && x.BsonId == bsonId).FirstOrDefault();
            if (job != null)
            {
                var jobModel = mapper.Map<JobModel>(job);
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

            var JobEntity = unitOfWork.JobRepository.Get(x => !x.IsDeleted && x.BsonId == jobModel.BsonId).FirstOrDefault();
            if (JobEntity != null)
            {
                mapper.Map(jobModel, JobEntity);
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

