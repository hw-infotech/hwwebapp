using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Utility
{
    public class AppSettingsModel
    {
        public string MailHost { get; set; }
        public int MailPortNumber { get; set; }
        public bool MailEnableSSL { get; set; }
        public string MailPassword { get; set; }
        public string MailUserName { get; set; }
        public string MailFromName { get; set; }
        public string EncryptionKey { get; set; }
        public string DefaultConnection { get; set; }
        #region JWT Properties
        public string Key { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }

        #endregion
    }
}
