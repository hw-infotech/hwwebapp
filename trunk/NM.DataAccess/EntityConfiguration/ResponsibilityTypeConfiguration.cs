using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class ResponsibilityTypeConfiguration : IEntityTypeConfiguration<ResponsibilityType>
    {
        public void Configure(EntityTypeBuilder<ResponsibilityType> tableConfiguration)
        {
            tableConfiguration.ToTable("ResponsibilityType");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------

            tableConfiguration.Property(c => c.Responsibility).HasMaxLength(500);
        }
    }
}
