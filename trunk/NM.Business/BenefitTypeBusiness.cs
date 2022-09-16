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
    public class BenefitTypeBusiness : IBenefitTypeBusiness
    {
        private readonly IMapper mapper;
        private readonly IUnitOfWork unitOfWork;

        public BenefitTypeBusiness(IMapper _mapper, IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;
            unitOfWork = _unitOfWork;
        }

        public ResultModel<BenefitTypeModel> CreateBenefitsType(BenefitTypeModel benefitTypeModel)
        {
            ResultModel<BenefitTypeModel> resultModel = new ResultModel<BenefitTypeModel>();
            BenefitTypes benefitTypes = new BenefitTypes(benefitTypeModel.BenefitType);
            var benefitTypesEntity = unitOfWork.BenefitTypesRepository.Get(s => s.BenefitType.ToLower().Trim() == benefitTypeModel.BenefitType.ToLower().Trim() && !s.IsDeleted).FirstOrDefault();
            if (benefitTypesEntity == null)
                unitOfWork.BenefitTypesRepository.Insert(benefitTypes);
            if (benefitTypes.Id > 0)
            {
                mapper.Map(benefitTypes, benefitTypeModel);
                resultModel.Data = benefitTypeModel;
                resultModel.Success = true;
                resultModel.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
            }
            return resultModel;
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

        public ResultModel<List<BenefitTypeModel>> CreateBenefitsTypeList(List<BenefitTypeModel> benefitTypeModel)
        {
            ResultModel<List<BenefitTypeModel>> resultModel = new ResultModel<List<BenefitTypeModel>>();

            List<BenefitTypes> benefitTypesList = new List<BenefitTypes>();

            var allBenefitTypes = GetAllBenefitType().Data;

            benefitTypeModel = benefitTypeModel.Where(x => allBenefitTypes.FindIndex(y => y.BenefitType.ToLower().Trim() == x.BenefitType.ToLower().Trim()) == -1).ToList();

            benefitTypeModel.ForEach(x =>
            {
                benefitTypesList.Add(new BenefitTypes(x.BenefitType));
            });

            if (benefitTypesList.Count > 0)
            {
                unitOfWork.BenefitTypesRepository.InsertAll(benefitTypesList);
                benefitTypesList = benefitTypesList.Where(x => x.Id > 0).ToList();
            }
            if (benefitTypesList.Count > 0)
            {
                mapper.Map(benefitTypesList, benefitTypeModel);
                resultModel.Data = benefitTypeModel;
                resultModel.Success = true;
                resultModel.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
            }
            return resultModel;
        }

    }
}
