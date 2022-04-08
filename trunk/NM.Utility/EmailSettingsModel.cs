using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Utility
{
    public class EmailSettingsModel
    {
        /// <summary>
        /// this modal is used for email send
        /// </summary>
        public static string SmtpEmail { get; set; }
        public static string SmtpPassword { get; set; }
        public static string SmtpHost { get; set; }
        public static int SmtpPort { get; set; }
    }
}
