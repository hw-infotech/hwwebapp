using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class ProjectConfiguration :IEntityTypeConfiguration<Project>
    {
        public void Configure(EntityTypeBuilder<Project> tableConfiguration)
        {
            tableConfiguration.ToTable("Project");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------

            tableConfiguration.Property(c => c.Name).HasMaxLength(500);
            tableConfiguration.Property(c => c.Description).HasMaxLength(1000);
            tableConfiguration.Property(c => c.ImageURL).HasMaxLength(500);
            tableConfiguration.Property(c => c.CreatedBy).HasMaxLength(100);
            tableConfiguration.Property(c => c.CreatedOn).HasMaxLength(100);
        }
    }
}
