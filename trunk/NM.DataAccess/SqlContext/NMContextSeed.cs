using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using NM.DataAccess.AggregatesModel;
using NM.Utility;
using Polly;
using Polly.Retry;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NM.DataAccess.SqlContext
{
    public class NMContextSeed
    {
        public async Task SeedAsync(NMContext context, IHostingEnvironment env, ILogger<NMContextSeed> logger)
        {
            var _env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

            var policy = CreatePolicy(logger, nameof(NMContextSeed));
            await policy.ExecuteAsync(async () =>
            {
                try
                {
                    if (!context.NewsLetters.Any())
                    {
                        await context.NewsLetters.AddRangeAsync(GetNewsLetters());

                        await context.SaveChangesAsync();
                    }

                    if (!context.BlogCategories.Any())
                    {
                        await context.BlogCategories.AddRangeAsync(GetBlogCategories());

                        await context.SaveChangesAsync();
                    }

                    if (!context.Blogs.Any())
                    {
                        await context.Blogs.AddRangeAsync(GetBlog());

                        await context.SaveChangesAsync();
                    }
                    if (!context.Role.Any())
                    {
                        await context.Role.AddRangeAsync(GetRole());

                        await context.SaveChangesAsync();
                    }

                    if (!context.Departments.Any())
                    {
                        await context.Departments.AddRangeAsync(GetDepartment());

                        await context.SaveChangesAsync();
                    }

                    if (!context.AppUsers.Any())
                    {
                        await context.AppUsers.AddRangeAsync(GetAppUser());

                        await context.SaveChangesAsync();
                    }

                    if (!context.Technology.Any())
                    {
                        await context.Technology.AddRangeAsync(GetTechnology());

                        await context.SaveChangesAsync();
                    }

                    if (!context.Projects.Any())
                    {
                        await context.Projects.AddRangeAsync(GetProjects());

                        await context.SaveChangesAsync();
                    }

                    if (!context.Services.Any())
                    {
                        await context.Services.AddRangeAsync(GetServices());

                        await context.SaveChangesAsync();
                    }

                    if (!context.Clients.Any())
                    {
                        await context.Clients.AddRangeAsync(GetClient());

                        await context.SaveChangesAsync();
                    }


                    if (!context.CurrentOpenings.Any())
                    {
                        await context.CurrentOpenings.AddRangeAsync(GetCurrentOpenings());

                        await context.SaveChangesAsync();
                    }

                    if (!context.ApplyJobs.Any())
                    {
                        await context.ApplyJobs.AddRangeAsync(GetApplyJob());

                        await context.SaveChangesAsync();
                    }

                    if (!context.Contacts.Any())
                    {
                        await context.Contacts.AddRangeAsync(GetContact());

                        await context.SaveChangesAsync();
                    }
                    if (!context.Testimonials.Any())
                    {
                        await context.Testimonials.AddRangeAsync(GetTestimonials());

                        await context.SaveChangesAsync();
                    }
                    if (!context.Resume.Any())
                    {
                        await context.Resume.AddRangeAsync(GetResume());

                        await context.SaveChangesAsync();
                    }
                    if (!context.EnquiryTypes.Any())
                    {
                        await context.EnquiryTypes.AddRangeAsync(GetEnquiryType());

                        await context.SaveChangesAsync();
                    }

                }
                catch (Exception ex)
                {
                    throw;
                }

            });
        }
        private AsyncRetryPolicy CreatePolicy(ILogger<NMContextSeed> logger, string prefix, int retries = 3)
        {
            return Policy.Handle<Exception>().
                WaitAndRetryAsync(
                    retryCount: retries,
                    sleepDurationProvider: retry => TimeSpan.FromSeconds(5),
                    onRetry: (exception, timeSpan, retry, ctx) =>
                    {
                        logger.LogTrace($"[{prefix}] Exception {exception.GetType().Name} with message ${exception.Message} detected on attempt {retry} of {retries}");
                    }
                );
        }
        private IEnumerable<NewsLetter> GetNewsLetters()
        {
            return new List<NewsLetter>()
            {
                new NewsLetter("potter@mailinator.com"),
                new NewsLetter("lara@mailinator.com"),
            };
        }
        private IEnumerable<BlogCategories> GetBlogCategories()
        {
            return new List<BlogCategories>()
            {
                new BlogCategories("Technology Blog","The blog publishes content on businesses related to tech, analysis of emerging trends in tech, technology news, and listings of new tech products in the market"),
                new BlogCategories("Development Blog"," Focuses on design resources but also provides useful insights on the latest web technologies"),
            };
        }
        private IEnumerable<Blog> GetBlog()
        {
            return new List<Blog>()
            {
                new Blog("How To Use Shopify SEO To Desire?","Shopify makes this extremely easy. Simply select or product to optimize and scroll to of the page where you'll see “Search engine listing preview.” Click “Edit website SEO.” ",1),
                new Blog("Android Intelligence","Not your average Android news — a diverse mix of advice, insight, and analysis with veteran Android journalist JR Raphael.",1),
            };
        }
        private IEnumerable<Role> GetRole()
        {
            return new List<Role>()
            {
                new Role("BackOffice",true,true)
            };
        }

        private IEnumerable<Department> GetDepartment()
        {
            return new List<Department>()
            {
                new Department("Development Department","In the simplest terms, business development can be summarized as the ideas, initiatives, and activities that help make a business better"),
                new Department("Testing Department","Analyzing the testing results and submitting the report to the development team. Creating test designs, processes, cases and test-product documentation. Conducting testing as per the set standards and procedures"),
            };
        }
        private IEnumerable<AppUser> GetAppUser()
        {
            var appUserPassword1 = Common.Hash("Admin@123");
            var AppUser1 = new AppUser("Jason", "Poter", "jason@mailinator.com", "999-888-7777", appUserPassword1, string.Empty, 1, true, new DateTime(1979, 04, 25), 1, "Admin", 1);

            var appUserPassword2 = Common.Hash("Admin@123");
            var AppUser2 = new AppUser("Jack", "Poter", "jack@mailinator.com", "999-888-78777", appUserPassword2, string.Empty, 1, true, new DateTime(1989, 04, 25), 1, "Admin", 2);

            return new List<AppUser>()
            {
                AppUser1, AppUser2
            };
        }
        private IEnumerable<Technology> GetTechnology()
        {
            return new List<Technology>()
            {
                new Technology("Dot Net Core", string.Empty, 1),
                new Technology("data analytics",string.Empty,2),
            };
        }
        private IEnumerable<Project> GetProjects()
        {
            return new List<Project>()
            {
                new Project("PMS", "Project managment system",string.Empty,1, 1),
                new Project("Managment system","Mangment system manage the organization",string.Empty,2,1),
            };
        }
        private IEnumerable<Services> GetServices()
        {
            return new List<Services>()
            {
                new Services("Website"," "),
                new Services("Mobile"," "),
                 new Services("Front-end"," "),
                 new Services("Illustrations"," "),
                 new Services("Content"," "),
                 new Services("Animation"," "),
            };
        }
        private IEnumerable<Client> GetClient()
        {
            var Client1 = new Client("Brad pitt", "Technology Officer", "THE SENIORS ARE VERY COOPERATIVE AND SUPPORTIVE. GOOD WORKSPACE TO IMPROVE YOUR SKILLS AND KNOWLEDGE", string.Empty, string.Empty);

            var Client2 = new Client("Tom Hanks", "Executive Officer", "EVERY COMPANY HAS ITS PROS AND CONS. ITS HOW YOU ACCEPT IT OR NOT. IT SHOULD NOT MAKE TO DISLIKE THE COMPANY YOU WORK IN", string.Empty, string.Empty);

            return new List<Client>()
            {
                Client1, Client2
            };
        }
        private IEnumerable<CurrentOpening> GetCurrentOpenings()
        {
            return new List<CurrentOpening>()
            {
                new CurrentOpening("Developer","Hiring .net framwork core developer, required 5years experience"),
                new CurrentOpening("DBA","Hiring database administrator,Required 10 year experience of SQL and mongoDB"),
            };
        }
        private IEnumerable<ApplyJob> GetApplyJob()
        {
            return new List<ApplyJob>()
            {
                new ApplyJob("Developer","Apply for .net core developer, 2year experience",1),
            };
        }
        private IEnumerable<Contact> GetContact()
        {
            return new List<Contact>()
            {
                new Contact("Web,Mobile","Will Smith","smith@mailinator.com","Nestormind","save the content of will smith"),
                new Contact("Web,Mobile","Robert Downey","Robert@mailinator.com","Hindwaves","save the content of will smith")
            };
        }
        private IEnumerable<Testimonials> GetTestimonials()
        {
            return new List<Testimonials>()
            {
                new Testimonials("Johan","It is good company","PMS","www.image.com","Manager")
            };
        }

        private IEnumerable<Resume> GetResume()
        {
            return new List<Resume>()
          {
                new Resume("Document",".pdf",200)
          };
        }
        private IEnumerable<EnquiryType> GetEnquiryType()
        {
            return new List<EnquiryType>()
          {
                new EnquiryType("App Development"),
                new EnquiryType("Web Development"),
                new EnquiryType("UI UX Design"),
                new EnquiryType("SEO"),
                new EnquiryType("Graphics Design"),
                new EnquiryType("Website"),
                new EnquiryType("Mobile"),
                new EnquiryType("Illustrations"),
                new EnquiryType("Front-end"),
                new EnquiryType("Content"),
                new EnquiryType("Animation"),
          };
        }
    }
}
