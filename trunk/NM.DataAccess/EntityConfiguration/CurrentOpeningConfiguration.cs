using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel; 

namespace NM.DataAccess.EntityConfiguration
{
    public class CurrentOpeningConfiguration: IEntityTypeConfiguration<CurrentOpening>
    {
        public void Configure(EntityTypeBuilder<CurrentOpening> tableConfiguration)
        {
            tableConfiguration.ToTable("CurrentOpening");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------

            tableConfiguration.Property(c => c.Title).HasMaxLength(500);
            tableConfiguration.Property(c => c.Description).HasMaxLength(1000);
            tableConfiguration.Property(c => c.CreatedBy).HasMaxLength(100);
            tableConfiguration.Property(c => c.CreatedOn).HasMaxLength(100);
        }
    }

}
