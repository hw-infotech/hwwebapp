using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class EnquiryTypeConfiguration : IEntityTypeConfiguration<EnquiryType>
    {
        public void Configure(EntityTypeBuilder<EnquiryType> tableConfiguration)
        {
            tableConfiguration.ToTable("EnquiryType");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------
            tableConfiguration.Property(c => c.Name).HasMaxLength(150);
        }
    }
}
