using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class JobConfiguration : IEntityTypeConfiguration<Job>
    {
      
        public void Configure(EntityTypeBuilder<Job> tableConfiguration)
        {
            tableConfiguration.ToTable("Jobs");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------

            tableConfiguration.Property(c => c.Title).HasMaxLength(500);
            tableConfiguration.Property(c => c.Description).HasMaxLength(1000);
            tableConfiguration.Property(c => c.CreatedBy).HasMaxLength(100);
            tableConfiguration.Property(c => c.CreatedOn);
            tableConfiguration.Property(c => c.Functions).HasMaxLength(100);
            tableConfiguration.Property(c => c.Industries).HasMaxLength(100);
            tableConfiguration.Property(c => c.IsDeleted).HasDefaultValue(false);
            tableConfiguration.Property(c => c.JobType).HasMaxLength(100);
            tableConfiguration.Property(c => c.Level).HasMaxLength(100);
        }
    }
}
