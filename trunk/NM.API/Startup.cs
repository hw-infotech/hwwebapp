
using NM.API.Middleware;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using NM.DataAccess.SqlContext;
using NM.Business.Interfaces;
using NM.Business;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using NM.DataAccess.Interface;
using NM.DataAccess.Repositories;
using NM.Utility;
using Microsoft.OpenApi.Models;
using System.Configuration;

namespace NM.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            #region --Configure App setting
            AppSettingConfiguration.ConfigurationAppSetting(Configuration);
            #endregion
            services.AddControllers().AddNewtonsoftJson();
            services.AddDbContext<NMContext>(opts => opts.UseSqlServer(Configuration["ConnectionString:NestormindDB"]));
            var config = new MapperConfiguration(mc => { mc.AddProfile(new Mapper.MappingProfile<object>(Configuration)); });
            IMapper mapper = config.CreateMapper();
            //services.Configure<ConfigMgr>(Configuration.GetSection("EmailConfiguration"));
            // services.Configure<ConfigMgr>(options => Configuration.GetSection("EmailConfiguration").Bind(options));
            // var myFirstClass = services.GetSection("MyFirstClass").Get<MyFirstClass>();
            services.Configure<ConfigMgr>(Configuration.GetSection("EmailConfiguration"));
            services.AddSingleton(mapper);
            services.AddTransient<IAccountBusiness, AccountBusiness>();
            services.AddTransient<IBlogBusiness, BlogBusiness>();
            services.AddTransient<IProjectBusiness, ProjectBusiness>();
            services.AddTransient<ITechnologyBusiness, TechnologyBusiness>();
            services.AddTransient<IClientBusiness, ClientBusiness>();
            services.AddTransient<INewsLetterBusiness, NewsLetterBusiness>();
            services.AddTransient<ITestimonialsBusiness, TestimonialsBusiness>();
            services.AddTransient<IContactBusiness, ContactBusiness>();
            services.AddTransient<IResumeBusiness, ResumeBusiness>();
            services.AddTransient<IUserEnquiryBusiness, UserEnquiryBusiness>();
            services.AddTransient<IJobBusiness, JobBusiness>();
            services.AddTransient<IRequirmentBusiness, RequirmentBusiness>();
            services.AddTransient<IJobTitleBusiness, JobTitleBusiness>();
            services.AddTransient<IResponsibilityTypeBusiness, ResponsibilityTypeBusiness>();
            services.AddTransient<IBenefitTypeBusiness, BenefitTypeBusiness>();


            //add changes
            services.Configure<AppSettingsModel>(options => Configuration.GetSection("Jwt").Bind(options));
            services.AddTokenAuthentication(Configuration);
            services.AddOptions();
            //services.AddMvcCore().AddAuthorization();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "NM.API", Version = "v1" });
                c.AddSecurityDefinition("bearer", new OpenApiSecurityScheme
                {
                    Type = SecuritySchemeType.Http,
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Scheme = "bearer"
                });

            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseCors(builder =>
            builder.AllowAnyOrigin()
           .AllowAnyHeader()
           .AllowAnyMethod());
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "NM.API");
            });
        }
    }

}
