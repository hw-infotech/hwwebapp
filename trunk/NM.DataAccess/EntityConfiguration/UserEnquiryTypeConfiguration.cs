using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class UserEnquiryTypeConfiguration : IEntityTypeConfiguration<UserEnquiryType>
    {
        ModelBuilder modelBuilder = null;
        public UserEnquiryTypeConfiguration(ModelBuilder _modelBuilder)
        {
            modelBuilder = _modelBuilder;
        }
        public void Configure(EntityTypeBuilder<UserEnquiryType> tableConfiguration)
        {
            modelBuilder.Entity<UserEnquiryType>().HasKey(c => new { c.UserEnquiryId, c.EnquiryTypeId });
            tableConfiguration.ToTable("UserEnquiryType");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            tableConfiguration.Property(c => c.CreatedBy).HasMaxLength(100);
            // define relation many to many between UserEnquiry and EnquiryType: -----------------------------------------------------
            modelBuilder.Entity<UserEnquiryType>().HasOne<UserEnquiry>(c => c.UserEnquiry).WithMany(u => u.UserEnquiryTypes).HasForeignKey(u => u.UserEnquiryId);
            modelBuilder.Entity<UserEnquiryType>().HasOne<EnquiryType>(c => c.EnquiryType).WithMany(u => u.UserEnquiryTypes).HasForeignKey(u => u.EnquiryTypeId);
        }
    }
}
