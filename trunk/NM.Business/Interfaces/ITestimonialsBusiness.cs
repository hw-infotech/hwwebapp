using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface ITestimonialsBusiness
    {
        ResultModel<bool> CreateTestimonials(TestimonialsModel testimonialsModel);
        ResultModel<bool> UpdateTestimonials(TestimonialsModel technologyModel);
       // ResultModel<bool> DeleteTechnology(string bsonId);
        //ResultModel<TechnologyModel> GetTechnologyByBsonId(string bsonId);
        //ResultModel<List<TechnologyModel>> GetAllTechnology();
    }
}
