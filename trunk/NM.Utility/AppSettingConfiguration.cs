using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Utility
{
    public class AppSettingConfiguration
    {
        public static void ConfigurationAppSetting(IConfiguration configuration)
        {
            #region Email Setting
            /// <summary>
            /// This region contain the email setting
            /// </summary>
            AppSettingsModel.MailHost = configuration["EmailConfiguration:MailHost"];
            AppSettingsModel.MailPortNumber = Convert.ToInt32(configuration["EmailConfiguration:MailPortNumber"]);
            AppSettingsModel.MailEnableSSL = Convert.ToBoolean(configuration["EmailConfiguration:MailEnableSSL"]);
            AppSettingsModel.MailPassword = configuration["EmailConfiguration:MailPassword"];
            AppSettingsModel.MailUserName = configuration["EmailConfiguration:MailUserName"];
            AppSettingsModel.MailFromName = configuration["EmailConfiguration:MailFromName"];
            AppSettingsModel.ResumeRequest = configuration["EmailConfiguration:ResumeRequest"];
            AppSettingsModel.ResumeTemplate = configuration["EmailTemplate:ResumeTemplate"];
            AppSettingsModel.NewsLetterTemplate = configuration["EmailTemplate:NewsLetterTemplate"];
            #endregion
        }

        
    }
}
