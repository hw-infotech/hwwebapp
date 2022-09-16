using NM.DataAccess.AggregatesModel;
using NM.DataAccess.Interface;
using NM.DataAccess.SqlContext;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private NMContext _context;
        private bool _isDisposed;

        public UnitOfWork(NMContext context)
        {
            this._context = context;
        }

        public NMContext GetContext()
        {
            return this._context;
        }
        public void GetNewContext()
        {
            this._context = new NMContext();
        }
        public void Dispose()
        {
            if (_context != null && !_isDisposed)
            {
                _context.Dispose();
                _isDisposed = true;
            }
        }
        public void Save()
        {
            _context.SaveChanges();
        }
        public IRepository<AppUser> UserRepository
        {
            get { return new BaseRepository<AppUser>(GetContext()); }
        }
        public IRepository<Blog> BlogRepository
        {
            get { return new BaseRepository<Blog>(GetContext()); }
        }
        public IRepository<Project> ProjectRepository
        {
            get { return new BaseRepository<Project>(GetContext()); }
        }
        public IRepository<Technology> TechnologyRepository
        {
            get { return new BaseRepository<Technology>(GetContext()); }
        }
        public IRepository<Client> ClientRepository
        {
            get { return new BaseRepository<Client>(GetContext()); }
        }
        public IRepository<NewsLetter> NewsLetterRepository
        {
            get { return new BaseRepository<NewsLetter>(GetContext()); }
        }
        public IRepository<Testimonials> TestimonialsRepository
        {
            get { return new BaseRepository<Testimonials>(GetContext()); }
        }
        public IRepository<Contact> ContactRepository
        {
            get { return new BaseRepository<Contact>(GetContext()); }
        }
        public IRepository<Resume> ResumeRepository
        {
            get { return new BaseRepository<Resume>(GetContext()); }
        }

        public IRepository<UserEnquiry> UserEnquiryRepository
        {
            get { return new BaseRepository<UserEnquiry>(GetContext()); }
        }

        public IRepository<EnquiryType> EnquiryTypeRepository
        {
            get { return new BaseRepository<EnquiryType>(GetContext()); }
        }

        public IRepository<UserEnquiryType> UserEnquiryTypeRepository
        {
            get { return new BaseRepository<UserEnquiryType>(GetContext()); }
        }
        public IRepository<Job> JobRepository
        {
            get { return new BaseRepository<Job>(GetContext()); }
        }
       
        public IRepository<Requirment> RequirmentRepository
        {
            get { return new BaseRepository<Requirment>(GetContext()); }
        }
        public IRepository<ResponsibilityType> ResponsibilityTypeRepository
        {
            get { return new BaseRepository<ResponsibilityType>(GetContext()); }
        }

        public IRepository<BenefitTypes> BenefitTypesRepository
        {
            get { return new BaseRepository<BenefitTypes>(GetContext()); }
        }
        public IRepository<JobTitle> JobTitleRepository
        {
            get
            {
                return new BaseRepository<JobTitle>(GetContext());
            }
        }
    }
}
