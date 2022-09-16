using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NM.DataAccess.AggregatesModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.DataAccess.EntityConfiguration
{
    public class JobSubscriptionConfiguration : IEntityTypeConfiguration<JobSubscription>
    {
        public void Configure(EntityTypeBuilder<JobSubscription> tableConfiguration)
        {
            tableConfiguration.ToTable("JobSubscription");
            tableConfiguration.HasKey(c => c.Id);
            tableConfiguration.Property(c => c.Id).ValueGeneratedOnAdd();
            // Other columns: -----------------------------------------------------

            tableConfiguration.Property(c => c.EmailId).HasMaxLength(150);
            tableConfiguration.Property(c => c.JobBsonId).HasMaxLength(150);
        }
    }
}
