using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Configuration;
using NM.DataAccess.EntityConfiguration;
using NM.DataAccess.AggregatesModel;
namespace NM.DataAccess.SqlContext
{
    public class NMContext : DbContext
    {
        public DbSet<NewsLetter> NewsLetters { get; set; }
        public DbSet<Technology> Technology { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Services> Services { get; set; }//master entity
        public DbSet<BlogCategories> BlogCategories { get; set; }//master entity
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<CurrentOpening> CurrentOpenings { get; set; }
        public DbSet<ApplyJob> ApplyJobs { get; set; }
        public DbSet<Department> Departments { get; set; }//master entity
        public DbSet<Role> Role { get; set; }//master entity
        public DbSet<AppUser> AppUsers { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Testimonials> Testimonials { get; set; }
        public DbSet<Resume> Resume { get; set; }
        public DbSet<EnquiryType> EnquiryTypes { get; set; } //master entity
        public DbSet<UserEnquiry> UserEnquiries { get; set; }
        public DbSet<UserEnquiryType> UserEnquiryTypes { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Requirment> Requirments { get; set; }
        public DbSet<JobRequirments> JobRequirments { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new ApplyJobConfiguration());
            builder.ApplyConfiguration(new AppUserConfiguration());
            builder.ApplyConfiguration(new BlogConfiguration());
            builder.ApplyConfiguration(new ClientConfiguration());
            builder.ApplyConfiguration(new BlogConfiguration());
            builder.ApplyConfiguration(new ContactConfiguration());
            builder.ApplyConfiguration(new CurrentOpeningConfiguration());
            builder.ApplyConfiguration(new DepartmentConfiguration());
            builder.ApplyConfiguration(new NewsLetterConfiguration());
            builder.ApplyConfiguration(new ProjectConfiguration());
            builder.ApplyConfiguration(new ServicesConfiguration());
            builder.ApplyConfiguration(new TechnologyConfiguration());
            builder.ApplyConfiguration(new RoleConfiguration());
            builder.ApplyConfiguration(new TestimonialsConfiguration());
            builder.ApplyConfiguration(new ResumeConfiguration());
            builder.ApplyConfiguration(new UserEnquiryConfiguration());
            builder.ApplyConfiguration(new EnquiryTypeConfiguration());
            builder.ApplyConfiguration(new UserEnquiryTypeConfiguration(builder));// I passed here builder for manage relation between tables: Aman 09/08/2022
            builder.ApplyConfiguration(new JobConfiguration());
            builder.ApplyConfiguration(new RequirmentConfiguration());
            builder.ApplyConfiguration(new JobRequirmentsConfiguration(builder));

        }
        private IDbContextTransaction _currentTransaction;
        public IDbContextTransaction GetCurrentTransaction => _currentTransaction;
        private readonly IMediator _mediator;
        private readonly IConfiguration _configuration;
        public NMContext()
        { }
        public NMContext(DbContextOptions<NMContext> options, IConfiguration configuration) : base(options)
        {
            _configuration = configuration;
        }
        public NMContext(DbContextOptions<NMContext> options, IMediator mediator, IConfiguration configuration) : base(options)
        {
            _mediator = mediator;
            _configuration = configuration;
        }
        //public class BillingContextDesignFactory : IDesignTimeDbContextFactory<NMContext>
        //{
        //    public NMContext CreateDbContext(string[] args)
        //    {
        //        var AssemblyName = System.Reflection.Assembly.GetExecutingAssembly().GetName().Name;
        //        var basePath = Path.Combine(Directory.GetCurrentDirectory(), "../" + AssemblyName);

        //        IConfiguration configuration = new ConfigurationBuilder()
        //           .SetBasePath(basePath)
        //           .AddJsonFile("appsettings.json")
        //           .Build();

        //        var connectionString = configuration["ConnectionString"];

        //        var optionsBuilder = new DbContextOptionsBuilder<NMContext>().UseSqlServer(connectionString);

        //        return new NMContext(optionsBuilder.Options, configuration);
        //    }

        //}

    }
}

