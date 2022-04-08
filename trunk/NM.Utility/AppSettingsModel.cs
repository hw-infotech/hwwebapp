using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Utility
{
    public class AppSettingsModel
    {
        public static  string MailHost { get; set; }
        public static int MailPortNumber { get; set; }
        public static bool MailEnableSSL { get; set; }
        public static string MailPassword { get; set; }
        public static string MailUserName { get; set; }
        public static string MailFromName { get; set; }
        public static string ResumeRequest { get; set; }

        //For Email Template
        public static string ResumeTemplate { get; set; }
        public string EncryptionKey { get; set; }
        public string DefaultConnection { get; set; }
        #region JWT Properties
        public string Key { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }

        #endregion
    }
}

