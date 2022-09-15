using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class JobBenefitsConfiguration : IEntityTypeConfiguration<JobBenefits>
    {
        ModelBuilder modelBuilder = null;
        public JobBenefitsConfiguration(ModelBuilder _modelBuilder)
        {
            modelBuilder = _modelBuilder;
        }
        public void Configure(EntityTypeBuilder<JobBenefits> tableConfiguration)
        {
            modelBuilder.Entity<JobBenefits>().HasKey(c => new { c.JobId, c.BenefitTypesId });

            tableConfiguration.ToTable("JobBenefits");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------
            tableConfiguration.Property(c => c.JobId);
            tableConfiguration.Property(c => c.BenefitTypesId);

            // Define relationship between Job and BenefitTypes (many to many)
            modelBuilder.Entity<JobBenefits>().HasOne<Job>(s => s.Job).WithMany(g => g.JobBenefits).HasForeignKey(s => s.JobId);
            modelBuilder.Entity<JobBenefits>().HasOne<BenefitTypes>(s => s.BenefitTypes).WithMany(g => g.JobBenefits).HasForeignKey(s => s.BenefitTypesId);
        }
    }
}
