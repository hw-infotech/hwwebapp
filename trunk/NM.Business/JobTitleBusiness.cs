using AutoMapper;
using NM.Business.Interfaces;
using NM.DataAccess.Interface;
using NM.Domain.Models;
using NM.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NM.Business
{
    public class JobTitleBusiness : IJobTitleBusiness
    {
        private readonly IMapper mapper;
        private readonly IUnitOfWork unitOfWork;

        public JobTitleBusiness(IMapper _mapper, IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;
            unitOfWork = _unitOfWork;
        }
        public JobTitleBusiness() { }
        public ResultModel<List<JobTitleModel>> GetAll()
        {
            ResultModel<List<JobTitleModel>> resultModel = new ResultModel<List<JobTitleModel>>();
            var result = unitOfWork.JobTitleRepository.GetAll(x => !x.IsDeleted).ToList();
            if (result != null && result.Count > 0)
            {
                resultModel.Data = mapper.Map<List<JobTitleModel>>(result);
                resultModel.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                resultModel.TotalRecords = result.Count();
                resultModel.Success = true;
            }
            return resultModel;
        }
    }
}
