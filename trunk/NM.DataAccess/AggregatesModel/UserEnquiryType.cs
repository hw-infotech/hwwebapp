
using NM.DataAccess.SeedWork;

namespace NM.DataAccess.AggregatesModel
{
    public class UserEnquiryType : Entity
    {
        /* UserEnquiryType class define many to many relation between UserEnquiry class and EnquiryType class - Aman 09/08/2022 */
        public int UserEnquiryId { get; set; }
        public UserEnquiry UserEnquiry { get; set; }
        public int EnquiryTypeId { get; set; }
        public EnquiryType EnquiryType { get; set; }
    }
}
