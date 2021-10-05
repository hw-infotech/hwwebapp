using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class ClientConfiguration : IEntityTypeConfiguration<Client>
    {
        public void Configure(EntityTypeBuilder<Client> tableConfiguration)
        {
            tableConfiguration.ToTable("Client");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------

            tableConfiguration.Property(c => c.Name).HasMaxLength(200);
            tableConfiguration.Property(c => c.Designation).HasMaxLength(500);
            tableConfiguration.Property(c => c.Feedback).HasMaxLength(2000);
            tableConfiguration.Property(c => c.ImageURL).HasMaxLength(500);
            tableConfiguration.Property(c => c.VideoURL).HasMaxLength(500);
            tableConfiguration.Property(c => c.CreatedBy).HasMaxLength(100);
            tableConfiguration.Property(c => c.CreatedOn).HasMaxLength(100);
        }
    }
}
