using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class UserEnquiryConfiguration : IEntityTypeConfiguration<UserEnquiry>
    {
        public void Configure(EntityTypeBuilder<UserEnquiry> tableConfiguration)
        {
            tableConfiguration.ToTable("UserEnquiry");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------
            tableConfiguration.Property(c => c.Name).HasMaxLength(100);
            tableConfiguration.Property(c => c.CompanyName).HasMaxLength(150);
            tableConfiguration.Property(c => c.Message).HasMaxLength(500);
            tableConfiguration.Property(c => c.PhoneNumber).HasMaxLength(15);
            tableConfiguration.Property(c => c.Email).HasMaxLength(50);
            tableConfiguration.Property(c => c.CreatedBy).HasMaxLength(100);
        }
    }
}
