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
    public class ProjectBusiness: IProjectBusiness
    {
        #region Private Properties
        private readonly IMapper mapper;
        private readonly IConfiguration configuration;
        private readonly IUnitOfWork unitOfWork;
        #endregion

        #region Constructor
        public ProjectBusiness(IMapper _mapper, IConfiguration _configuration, IUnitOfWork _unitOfWork)
        {
            mapper = _mapper;
            configuration = _configuration;
            unitOfWork = _unitOfWork;
        }
        #endregion
        public ResultModel<bool>CreateProject(ProjectModel projectModel)
        {
            ResultModel<bool> result = new ResultModel<bool>();
                Project project = new Project(projectModel.Name, projectModel.Description, projectModel.ImageURL, projectModel.ClientId, projectModel.TechnologyId);
                project.CreatedBy = 1;      
                unitOfWork.ProjectRepository.Insert(project);
                result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                result.Data = true;
                result.Success = true;
                return result;
        }
        public ResultModel<bool> UpdateProject(ProjectModel projectModel)
        {
            ResultModel<bool> result = new ResultModel<bool>();
                var project = unitOfWork.ProjectRepository.Get(x => x.BsonId == projectModel.BsonId && !x.IsDeleted).FirstOrDefault();
                if (project != null)
                {
                    projectModel.UpdatedBy = 1;
                    projectModel.UpdatedOn = DateTime.UtcNow;
                    projectModel.CreatedBy = project.CreatedBy;
                    projectModel.CreatedOn = project.CreatedOn;
                    mapper.Map(projectModel, project);
                    unitOfWork.ProjectRepository.Update(project);
                    result.StatusCode = Convert.ToInt32(Enums.StatusCode.OK);
                    result.Data = true;
                    result.Success = true;
                }
            return result;
        }
        public ResultModel<bool> DeleteProject(string bsonId)
        {
            ResultModel<bool> result = new ResultModel<bool>();
            var project = unitOfWork.ProjectRepository.SingleOrDefault(x => x.BsonId == bsonId);
            if (project != null)
            {
                project.IsDeleted = true;
                project.UpdatedOn = DateTime.UtcNow;
                unitOfWork.ProjectRepository.Update(project);
                result.Data = true;
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }
        public ResultModel<ProjectModel> GetProjectByBsonId(string bsonId)
        {
            ResultModel<ProjectModel> result = new ResultModel<ProjectModel>();
         
            var project = unitOfWork.ProjectRepository.SingleOrDefault(x => x.BsonId == bsonId && !x.IsDeleted);
            if (project != null)
            {
                result.Data = new ProjectModel();
                mapper.Map(project, result.Data);
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }
        public ResultModel<List<ProjectModel>> GetAllProjects()
        {
            ResultModel<List<ProjectModel>> result = new ResultModel<List<ProjectModel>>();
           
            var projects = unitOfWork.ProjectRepository.GetAllAsQueryable(x => !x.IsDeleted).ToList();
            if (projects != null)
            {
                result.Data = new List<ProjectModel>();
                mapper.Map(projects, result.Data);
                result.TotalRecords = projects.Count();
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }
        public ResultModel<List<ProjectModel>> GetTopProjects() 
        {
                ResultModel<List<ProjectModel>> result = new ResultModel<List<ProjectModel>>();
                var projects = unitOfWork.ProjectRepository.GetAll(x => !x.IsDeleted).OrderByDescending(x => x.Id).Take(5).ToList();
            if (projects != null)
            {
                result.Data = new List<ProjectModel>();
                mapper.Map(projects, result.Data);
                result.Success = true;
                result.StatusCode = (int)Enums.StatusCode.OK;
            }
            return result;
        }
    }
}
