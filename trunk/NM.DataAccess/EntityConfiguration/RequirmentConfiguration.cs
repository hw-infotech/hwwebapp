using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class RequirmentConfiguration : IEntityTypeConfiguration<Requirment>
    {
        

        public void Configure(EntityTypeBuilder<Requirment> tableConfiguration)
        {
            tableConfiguration.ToTable("Requirments");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------

            tableConfiguration.Property(c => c.JobRequirment).HasMaxLength(100);           
        }
    }
}
