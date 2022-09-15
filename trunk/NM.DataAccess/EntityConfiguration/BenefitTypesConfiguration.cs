using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class BenefitTypesConfiguration : IEntityTypeConfiguration<BenefitTypes>
    {
        public void Configure(EntityTypeBuilder<BenefitTypes> tableConfiguration)
        {
            tableConfiguration.ToTable("BenefitTypes");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------

            tableConfiguration.Property(c => c.BenefitType).HasMaxLength(500);
        }
    }
}
