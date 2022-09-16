using AutoMapper;
using NM.Business.Interfaces;
using NM.DataAccess.AggregatesModel;
using NM.DataAccess.Interface;
using NM.Domain.Models;
using NM.Utility;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business
{
    public class JobSubscriptionBusiness : IJobSubscriptionBusiness
    {
        private readonly IMapper mapper;
        private readonly IUnitOfWork unitOfWork;
        public JobSubscriptionBusiness(IMapper _mapper, IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;
            unitOfWork = _unitOfWork;
        }

        public ResultModel<bool> CreateJobSubscription(JobSubscriptionModel jobSubscriptionModel, int curentUserId = 0)
        {
            ResultModel<bool> resultModel = new ResultModel<bool>();

            JobSubscription jobSubscription = new JobSubscription(jobSubscriptionModel.EmailId, jobSubscriptionModel.JobBsonId);
            unitOfWork.JobSubscriptionRepository.Insert(jobSubscription);
            if (jobSubscription.Id>0) {

                resultModel.Data = true;
                resultModel.Success = true;
                resultModel.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
            }




            return resultModel;
        }
    }
}
