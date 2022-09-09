using AutoMapper;
using Microsoft.Extensions.Configuration;
using NM.API.Application.Model;
using NM.API.Application.Models;
using NM.API.Model;
using NM.DataAccess.AggregatesModel;
using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks; 

namespace NM.API.Mapper
{
    public class MappingProfile<T> : Profile
    {
        #region Private variables
        private IConfiguration configuration;
        #endregion
        public MappingProfile(IConfiguration _configuration)
        {
            configuration = _configuration;

            #region Result Model
            CreateMap<ResultModel<T>, ResultVM<T>>().ReverseMap();
            CreateMap<ResultModel<AppUserModel>, ResultVM<AppUserVM>>().ReverseMap();
            CreateMap<ResultModel<BlogModel>, ResultVM<BlogVM>>().ReverseMap();
            CreateMap<ResultModel<List<BlogModel>>, ResultVM<List<BlogVM>>>().ReverseMap();
            CreateMap<ResultModel<bool>, ResultVM<bool>>().ReverseMap();
            CreateMap<ResultModel<ProjectModel>, ResultVM<ProjectVM>>().ReverseMap();
            CreateMap<ResultModel<List<ProjectModel>>, ResultVM<List<ProjectVM>>>().ReverseMap();
            CreateMap<ResultModel<List<TechnologyModel>>, ResultVM<List<TechnologyVM>>>().ReverseMap();
            CreateMap<ResultModel<TechnologyModel>, ResultVM<TechnologyVM>>().ReverseMap();
            CreateMap<ResultModel<ClientModel>, ResultVM<ClientVM>>().ReverseMap();
            CreateMap<ResultModel<List<ClientModel>>, ResultVM<List<ClientVM>>>().ReverseMap();
            CreateMap<ResultModel<NewsLetterModel>, ResultVM<NewsLetterVM>>().ReverseMap();
            CreateMap<ResultModel<List<NewsLetterModel>>, ResultVM<List<NewsLetterVM>>>().ReverseMap();
            CreateMap<ResultModel<TestimonialsModel>, ResultVM<TestimonialsVM>>().ReverseMap();
            CreateMap<ResultModel<List<TestimonialsModel>>, ResultVM<List<TestimonialsVM>>>().ReverseMap();
            CreateMap<ResultModel<List<UserEnquiryModel>>, ResultVM<List<UserEnquiryVM>>>().ReverseMap();
            #endregion

            #region View to Model ReverseMap
            CreateMap<AppUserModel, AppUserVM>().ReverseMap();
            CreateMap<BlogModel, BlogVM>().ReverseMap();
            CreateMap<ProjectModel, ProjectVM>().ReverseMap();
            CreateMap<TechnologyModel, TechnologyVM>().ReverseMap();
            CreateMap<ClientModel, ClientVM>().ReverseMap();
            CreateMap<NewsLetterModel, NewsLetterVM>().ReverseMap();
            CreateMap<TestimonialsModel, TestimonialsVM>().ReverseMap();
            CreateMap<ContactModel, ContactVM>().ReverseMap();
            CreateMap<ResumeModel, ResumeVM>().ReverseMap();
            CreateMap<UserEnquiryModel, UserEnquiryVM>().ReverseMap();
            CreateMap<NewsLetterTemplateModel, NewsLetterTemplateVM>().ReverseMap();
            #endregion

            #region Model to Entity ReverseMap
            CreateMap<AppUser, AppUserModel>().ReverseMap();
            CreateMap<Blog, BlogModel>().ReverseMap().ForMember(x => x.Id, opt => opt.Ignore()); 
            CreateMap<Project, ProjectModel>().ReverseMap().ForMember(x => x.Id, opt => opt.Ignore()); 
            CreateMap<Technology, TechnologyModel>().ReverseMap().ForMember(x => x.Id, opt => opt.Ignore());
            CreateMap<Client, ClientModel>().ReverseMap().ForMember(x => x.Id, opt => opt.Ignore());
            CreateMap<NewsLetter, NewsLetterModel>().ReverseMap().ForMember(x => x.Id, opt => opt.Ignore());
            CreateMap<Testimonials, TestimonialsModel>().ReverseMap().ForMember(x => x.Id, opt => opt.Ignore());
            CreateMap<Contact, ContactModel>().ReverseMap().ForMember(x => x.Id, opt => opt.Ignore());
            CreateMap<Resume, ResumeModel>().ReverseMap().ForMember(x => x.Id, opt => opt.Ignore());
            CreateMap<UserEnquiry, UserEnquiryModel>().ReverseMap().ForMember(x => x.Id, opt => opt.Ignore());
            #endregion

            #region Result Model
            CreateMap<ResultModel<T>, ResultVM<T>>().ReverseMap(); 
            CreateMap<ResultModel<AppUserModel>, ResultVM<AppUserVM>>().ReverseMap();
            CreateMap<ResultModel<BlogModel>, ResultVM<BlogVM>>().ReverseMap();
            CreateMap<ResultModel<ContactModel>, ResultVM<ContactVM>>().ReverseMap();
            CreateMap<ResultModel<ResumeModel>, ResultVM<ResumeVM>>().ReverseMap();
            CreateMap<ResultModel<UserEnquiryModel>, ResultVM<UserEnquiryVM>>().ReverseMap();
            #endregion
        }
    }
}
