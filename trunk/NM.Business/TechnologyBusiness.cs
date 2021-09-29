using AutoMapper;
using Microsoft.Extensions.Configuration;
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
    public class TechnologyBusiness : ITechnologyBusiness
    {
        #region Private Properties
        private readonly IMapper mapper;
        private readonly IConfiguration configuration;
        private readonly IUnitOfWork unitOfWork;

        #endregion

        #region Constructor
        public TechnologyBusiness(IMapper _mapper, IConfiguration _configuration, IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;
            configuration = _configuration;
            unitOfWork = _unitOfWork;
        }

        #endregion
        public ResultModel<bool> CreateTechnology(TechnologyModel technologyModel)
        {
                ResultModel<bool> result = new ResultModel<bool>();
                Technology technology = new Technology(technologyModel.Name, technologyModel.ImageURL, technologyModel.ClientId);
                technology.CreatedBy = 1;
                unitOfWork.TechnologyRepository.Insert(technology);
                result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                result.Data = true;
                result.Success = true;
                return result;
        }
        public ResultModel<bool> UpdateTechnology(TechnologyModel technologyModel)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            var technology = unitOfWork.TechnologyRepository.Get(x => x.BsonId == technologyModel.BsonId && !x.IsDeleted).FirstOrDefault();
            if (technology != null)
            {
                technologyModel.UpdatedBy = 1;
                technologyModel.UpdatedOn = DateTime.UtcNow;
                technologyModel.CreatedBy = technology.CreatedBy;
                technologyModel.CreatedOn = technology.CreatedOn;
                mapper.Map(technologyModel, technology);
                unitOfWork.TechnologyRepository.Update(technology);
                result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                result.Data = true;
                result.Success = true;
            }
            return result;
        }

        public ResultModel<bool> DeleteTechnology(string bsonId)
        {
                ResultModel<bool> result = new ResultModel<bool>();
                var technology = unitOfWork.TechnologyRepository.SingleOrDefault(x => x.BsonId == bsonId);
                if(technology != null)
                {
                    technology.IsDeleted = true;
                    technology.UpdatedOn = DateTime.UtcNow;
                    unitOfWork.TechnologyRepository.Update(technology);
                    result.Data = true;
                    result.Success = true;
                    result.StatusCode = (int)Enums.StatusCode.OK;

                }
             
                return result;
        }
        public ResultModel<TechnologyModel> GetTechnologyByBsonId(string bsonId)
        {
                ResultModel<TechnologyModel> result = new ResultModel<TechnologyModel>();
                var technology = unitOfWork.TechnologyRepository.SingleOrDefault(x => x.BsonId == bsonId && !x.IsDeleted);
                if(technology != null)
                {
                    result.Data = new TechnologyModel();
                    mapper.Map(technology, result.Data);
                    result.Success = true;
                    result.StatusCode = (int)Enums.StatusCode.OK;
                }     
                return result;
        }
        public ResultModel<List<TechnologyModel>> GetAllTechnology()
        {
                ResultModel<List<TechnologyModel>> result = new ResultModel<List<TechnologyModel>>();
                var technologies = unitOfWork.TechnologyRepository.GetAllAsQueryable(x => !x.IsDeleted).ToList();
                if(technologies != null)
                {
                    result.Data = new List<TechnologyModel>();
                    mapper.Map(technologies, result.Data);
                    result.Success = true;
                    result.TotalRecords = technologies.Count();
                    result.StatusCode = (int)Enums.StatusCode.OK;
                }
                return result;
        }
    }
}
