using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class TestimonialsConfiguration : IEntityTypeConfiguration<Testimonials>
    {
        public void Configure(EntityTypeBuilder<Testimonials> tableConfiguration)
        {
            tableConfiguration.ToTable("Testimonials");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------

            tableConfiguration.Property(c => c.Name).HasMaxLength(100);
            tableConfiguration.Property(c => c.URL).HasMaxLength(500);
            tableConfiguration.Property(c => c.ProjectName).HasMaxLength(500);
            tableConfiguration.Property(c => c.Designation).HasMaxLength(500);
            tableConfiguration.Property(c => c.CreatedBy).HasMaxLength(100);
            tableConfiguration.Property(c => c.CreatedOn).HasMaxLength(100);
        }
    }
}
