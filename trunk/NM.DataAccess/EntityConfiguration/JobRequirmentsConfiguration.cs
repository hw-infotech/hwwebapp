using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class JobRequirmentsConfiguration : IEntityTypeConfiguration<JobRequirments>
    {
        ModelBuilder modelBuilder = null;
        public JobRequirmentsConfiguration(ModelBuilder _modelBuilder)
        {
            modelBuilder = _modelBuilder;
        }
        public void Configure(EntityTypeBuilder<JobRequirments> tableConfiguration)
        {
            modelBuilder.Entity<JobRequirments>().HasKey(c => new { c.JobId, c.RequirmentId });
            tableConfiguration.ToTable("JobRequirments");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();


            tableConfiguration.Property(c => c.JobId);
            tableConfiguration.Property(c => c.RequirmentId);

            // Define relationship between Job and Requirment (many to many)
            modelBuilder.Entity<JobRequirments>().HasOne<Job>(s => s.Job).WithMany(g => g.JobRequirments).HasForeignKey(s => s.JobId);
            modelBuilder.Entity<JobRequirments>().HasOne<Requirment>(s => s.Requirment).WithMany(g => g.JobRequirments).HasForeignKey(s => s.RequirmentId);

        }
    }
}
