using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
   public class AppUserConfiguration : IEntityTypeConfiguration<AppUser>
    {
        public void Configure(EntityTypeBuilder<AppUser> tableConfiguration)
        {
            tableConfiguration.ToTable("AppUser");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------
            tableConfiguration.Property(c => c.FirstName).HasMaxLength(150);
            tableConfiguration.Property(c => c.LastName).HasMaxLength(150);
            tableConfiguration.Property(c => c.EmailId).HasMaxLength(320);
            tableConfiguration.Property(c => c.PhoneNumber).HasMaxLength(15);
            tableConfiguration.Property(c => c.Password).HasMaxLength(500);
            tableConfiguration.Property(c => c.CreatedBy).HasMaxLength(100);
            tableConfiguration.Property(c => c.CreatedOn).HasMaxLength(100);
        }
    }
}
