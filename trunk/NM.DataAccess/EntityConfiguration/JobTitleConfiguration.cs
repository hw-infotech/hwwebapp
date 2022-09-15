using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class JobTitleConfiguration : IEntityTypeConfiguration<JobTitle>
    {
        ModelBuilder modelBuilder = null;
        public JobTitleConfiguration(ModelBuilder _modelBuilder)
        {
            modelBuilder = _modelBuilder;
        }
        public void Configure(EntityTypeBuilder<JobTitle> tableConfiguration)
        {

            tableConfiguration.ToTable("JobTitles");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------

            tableConfiguration.Property(c => c.Title).HasMaxLength(150);
        }
    }
}
