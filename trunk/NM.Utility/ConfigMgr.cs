using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text;


namespace NM.Utility
{
    public class ConfigMgr
    {
        //private IConfiguration _config;
        
        //public ConfigMgr(IConfiguration config)
        //{
        //    _config = config;
        //}
        public static string MailHost
        {
            get
            {
                
                return ConfigurationManager.AppSettings["EmailConfiguration:MailUserName"];
            }
        }
        public static string MailUserName
        {

            get
            {
                return ConfigurationManager.AppSettings["EmailConfiguration:MailUserName"];
            }
        }
        public static string MailFromName
        {
            get
            {
                return ConfigurationManager.AppSettings["EmailConfiguration:MailFromName"];
            }
        }
        public static string MailPassword
        {

            get
            {
                return ConfigurationManager.AppSettings["EmailConfiguration:MailPassword"];
            }
        }
        public static bool MailEnableSSL
        {

            get
            {
                return Convert.ToBoolean(ConfigurationManager.AppSettings["EmailConfiguration:MailEnableSSL"]);
            }
        }
        public static int MailPortNumber
        {

            get
            {
                return Convert.ToInt32(ConfigurationManager.AppSettings["EmailConfiguration:MailPortNumber"]);
            }
        }
    }
}
