using NM.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Business.Interfaces
{
    public interface IProjectBusiness
    {
        ResultModel<bool> CreateProject(ProjectModel projectModel);
        ResultModel<bool> UpdateProject(ProjectModel projectModel);
        ResultModel<bool> DeleteProject(string bsonId);
        ResultModel<ProjectModel> GetProjectByBsonId(string bsonId);
        ResultModel<List<ProjectModel>> GetAllProjects();
        ResultModel<List<ProjectModel>> GetTopProjects();

    }
}
