using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface IBenefitTypeBusiness
    {
        ResultModel<List<BenefitTypeModel>> GetAllBenefitType();
        ResultModel<BenefitTypeModel> CreateBenefitsType(BenefitTypeModel benefitTypeModel);
        ResultModel<List<BenefitTypeModel>> CreateBenefitsTypeList(List<BenefitTypeModel> benefitTypeModel);
    }
}
