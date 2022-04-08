using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace NM.Utility
{
  public  class EmailHelper
    {
        public static string GetResumeEmailBody(string name, string path)
        {
            string body = string.Empty;

            try
            {
                using (StreamReader reader = new StreamReader(Path.Combine(path, AppSettingsModel.ResumeTemplate)))
                {
                    body = reader.ReadToEnd();
                }
                body = body.Replace("{DocumentName}", name );
               

            }

            catch (Exception ex)
            {

                body = "";
            }
            return body;
        }
    }
}
