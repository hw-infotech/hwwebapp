using AutoMapper;
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
    public class ResponsibilityTypeBusiness : IResponsibilityTypeBusiness
    {
        private readonly IMapper mapper;
        private readonly IUnitOfWork unitOfWork;
        public ResponsibilityTypeBusiness(IMapper _mapper, IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;
            unitOfWork = _unitOfWork;
        }
        public ResultModel<ResponsibilityTypeModel> Create(ResponsibilityTypeModel responsibilityTypeModel)
        {
            ResultModel<ResponsibilityTypeModel> resultModel = new ResultModel<ResponsibilityTypeModel>();

            ResponsibilityType responsibilityType = new ResponsibilityType(responsibilityTypeModel.Responsibility);

            unitOfWork.ResponsibilityTypeRepository.Insert(responsibilityType);
            if (responsibilityType.Id > 0)
            {
                resultModel.Data = mapper.Map(responsibilityType, responsibilityTypeModel);
                resultModel.Success = true;
                resultModel.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
            }
            return resultModel;
        }

        public ResultModel<List<ResponsibilityTypeModel>> GetAll()
        {
            ResultModel<List<ResponsibilityTypeModel>> resultModel = new ResultModel<List<ResponsibilityTypeModel>>();

            var responsibilityType = unitOfWork.ResponsibilityTypeRepository.GetAll(x => !x.IsDeleted).ToList();
            if (responsibilityType != null)
            {
                resultModel.Data = mapper.Map(responsibilityType, resultModel.Data);
                resultModel.Success = true;
                resultModel.TotalRecords = responsibilityType.Count();
                resultModel.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
            }
            return resultModel;
        }
    }
}
