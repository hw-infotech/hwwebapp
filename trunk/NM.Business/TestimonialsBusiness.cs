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
    public class TestimonialsBusiness: ITestimonialsBusiness
    {
        #region Private Properties
        private readonly IMapper mapper;
        private readonly IConfiguration configuration;
        private readonly IUnitOfWork unitOfWork;

        #endregion

        #region Constructor
        public TestimonialsBusiness(IMapper _mapper, IConfiguration _configuration, IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;
            configuration = _configuration;
            unitOfWork = _unitOfWork;
        }

        #endregion
        public ResultModel<bool> CreateTestimonials(TestimonialsModel testimonialsModel)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            Testimonials testimonials = new Testimonials(testimonialsModel.Name, testimonialsModel.Description, testimonialsModel.ProjectName, testimonialsModel.URL, testimonialsModel.Designation);
            testimonials.CreatedBy = 1;
            unitOfWork.TestimonialsRepository.Insert(testimonials);
            result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
            result.Data = true;
            result.Success = true;
            return result;
        }
        public ResultModel<bool> UpdateTestimonials(TestimonialsModel testimonialsModel)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            var testimonials = unitOfWork.TestimonialsRepository.Get(x => x.BsonId == testimonialsModel.BsonId && !x.IsDeleted).FirstOrDefault();
            if (testimonials != null)
            {
                testimonialsModel.UpdatedBy = 1;
                testimonialsModel.UpdatedOn = DateTime.UtcNow;
                testimonialsModel.CreatedBy = testimonials.CreatedBy;
                testimonialsModel.CreatedOn = testimonials.CreatedOn;
                mapper.Map(testimonialsModel, testimonials);
                unitOfWork.TestimonialsRepository.Update(testimonials);
                result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                result.Data = true;
                result.Success = true;
            }
            return result;
        }

    }
}
