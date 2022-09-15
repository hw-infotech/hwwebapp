using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class JobResponsibilityTypesConfiguration : IEntityTypeConfiguration<JobResponsibilityTypes>
    {
        ModelBuilder modelBuilder = null;
        public JobResponsibilityTypesConfiguration(ModelBuilder _modelBuilder)
        {
            modelBuilder = _modelBuilder;
        }
        public void Configure(EntityTypeBuilder<JobResponsibilityTypes> tableConfiguration)
        {
            modelBuilder.Entity<JobResponsibilityTypes>().HasKey(c => new { c.JobId, c.ResponsibilityTypeId });

            tableConfiguration.ToTable("JobResponsibilityTypes");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------
            tableConfiguration.Property(c => c.JobId);
            tableConfiguration.Property(c => c.ResponsibilityTypeId);

            // Define relationship between Job and JobResponsibilityTypes (many to many)
            modelBuilder.Entity<JobResponsibilityTypes>().HasOne<Job>(s => s.Job).WithMany(g => g.JobResponsibilityTypes).HasForeignKey(s => s.JobId);
            modelBuilder.Entity<JobResponsibilityTypes>().HasOne<ResponsibilityType>(s => s.ResponsibilityType).WithMany(g => g.JobResponsibilityTypes).HasForeignKey(s => s.ResponsibilityTypeId);
        }
    }
}
