using AutoMapper;
using Microsoft.Extensions.Configuration;
using NM.Business.Interfaces;
using NM.DataAccess.Interface;
using NM.Domain.Models;
using NM.Utility;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NM.Business
{

    public class NewsLetterBusiness: INewsLetterBusiness
    {
        #region Private Properties
        private readonly IMapper mapper;
        private readonly IConfiguration configuration;
        private readonly IUnitOfWork unitOfWork;

        #endregion

        #region Constructor
        public NewsLetterBusiness(IMapper _mapper, IConfiguration _configuration, IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;
            configuration = _configuration;
            unitOfWork = _unitOfWork;
        }

        #endregion
        public ResultModel<List<NewsLetterModel>> GetAllNewsLetter()
        {
            ResultModel<List<NewsLetterModel>> result = new ResultModel<List<NewsLetterModel>>();
            var NewsLetters = unitOfWork.NewsLetterRepository.GetAllAsQueryable(x => !x.IsDeleted).ToList();
            if (NewsLetters != null)
            {
                result.Data = new List<NewsLetterModel>();
                mapper.Map(NewsLetters, result.Data);
                result.Success = true;
                result.TotalRecords = NewsLetters.Count();
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }

    }
}
