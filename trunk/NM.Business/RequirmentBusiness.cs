using AutoMapper;
using Microsoft.AspNetCore.Http;
using NM.Business.Interfaces;
using NM.DataAccess.AggregatesModel;
using NM.DataAccess.Interface;
using NM.Domain.Models;
using NM.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NM.Business
{
    public class RequirmentBusiness : IRequirmentBusiness
    {
        private readonly IMapper mapper;
        private readonly IUnitOfWork unitOfWork;
        public RequirmentBusiness(IMapper _mapper, IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;
            unitOfWork = _unitOfWork;
        }
        public ResultModel<RequirmentModel> Create(RequirmentModel requirmentModel)
        {
            var result = new ResultModel<RequirmentModel>();

            Requirment requirment = new Requirment(requirmentModel.JobRequirment);
            unitOfWork.RequirmentRepository.Insert(requirment);
            if (requirment.Id > 0)
            {
                result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                result.Data = mapper.Map<RequirmentModel>(requirment);
                result.Success = true;
            }


            return result;
        }

        public ResultModel<List<RequirmentModel>> GetAll()
        {
            ResultModel<List<RequirmentModel>> resultModel = new ResultModel<List<RequirmentModel>>();
            var result = unitOfWork.RequirmentRepository.GetAll(x => !x.IsDeleted).ToList();
            if (result != null)
            {
                resultModel.Data = mapper.Map<List<RequirmentModel>>(result);
                resultModel.Success = true;
                resultModel.TotalRecords = result.Count();
                resultModel.StatusCode = (int)Enums.StatusCode.OK;
            }
            return resultModel;
        }
    }
}
