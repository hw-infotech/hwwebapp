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
    public class BenefitTypeBusiness : IBenefitTypeBusiness
    {
        private readonly IMapper mapper;
        private readonly IUnitOfWork unitOfWork;

        public BenefitTypeBusiness(IMapper _mapper, IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;
            unitOfWork = _unitOfWork;
        }
        public ResultModel<List<BenefitTypeModel>> GetAllBenefitType()
        {
            ResultModel<List<BenefitTypeModel>> resultModel = new ResultModel<List<BenefitTypeModel>>();
            var result = unitOfWork.BenefitTypesRepository.GetAll(x => !x.IsDeleted).ToList();
            if (result != null)
            {
                resultModel.Data = mapper.Map<List<BenefitTypeModel>>(result);
                resultModel.TotalRecords = result.Count;
                resultModel.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                resultModel.Success = true;
            }
            return resultModel;
        }
    }
}
