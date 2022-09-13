using NM.DataAccess.AggregatesModel;
using NM.DataAccess.Interface;
using NM.DataAccess.SqlContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NM.DataAccess.Interface
{
    public interface IUnitOfWork
    {

        NMContext GetContext();
        void GetNewContext();
        IRepository<AppUser> UserRepository { get; }
        IRepository<Blog> BlogRepository { get; }
        IRepository<Project> ProjectRepository { get; }
        IRepository<Technology> TechnologyRepository { get; }
        IRepository<Client> ClientRepository { get; }
        IRepository<NewsLetter> NewsLetterRepository { get; }
        IRepository<Testimonials> TestimonialsRepository { get; }
        IRepository<Contact> ContactRepository { get; }
        IRepository<Resume> ResumeRepository { get; }
        IRepository<UserEnquiry> UserEnquiryRepository { get; }
        IRepository<EnquiryType> EnquiryTypeRepository { get; }
        IRepository<UserEnquiryType> UserEnquiryTypeRepository { get; }
        IRepository<Job> JobRepository { get; }
        IRepository<JobRequirments> JobRequirmentsRepository { get; }
        IRepository<Requirment> RequirmentRepository { get; }

        void Save();
        void Dispose();

    }
}
