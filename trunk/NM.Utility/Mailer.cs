using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace NM.Utility
{
    public class Mailer
    {
        string _toAddress = string.Empty;
        string _fromAddress = string.Empty;
        string _subject = string.Empty;
        string _body = string.Empty;
        string _host = string.Empty;
        string _userName = string.Empty;
        string _password = string.Empty;
        bool _enableSSL = false;
        string _ccAddress = string.Empty;
        List<Attachment> attachements;

        int _port = 0;
        public Mailer()
        {
            _host = AppSettingsModel.MailHost;
            _userName = AppSettingsModel.MailUserName;
            _password = AppSettingsModel.MailPassword;
            _enableSSL = AppSettingsModel.MailEnableSSL;
            _port = AppSettingsModel.MailPortNumber;
            attachements = new List<Attachment>();

        }
        public Mailer To(string address) { _toAddress = address; return this; }
        public Mailer From(string address) { _fromAddress = address; return this; }
        public Mailer CC(string address) { _ccAddress = address; return this; }
        public Mailer Subject(string subject) { _subject = subject; return this; }
        public Mailer Body(string body) { _body = body; return this; }
        public Mailer Attachment(byte[] bytes, string fileName)
        {
            //Attachment att = new Attachment(new MemoryStream(bytes), fileName);
          Attachment att = new System.Net.Mail.Attachment(new MemoryStream(bytes), fileName);
             attachements.Add(att);
            return this;
        }
        //public Mailer Attachment(string bytes, string fileName, string mediaType)
        //{
        //    Attachment att = new System.Net.Mail.Attachment(bytes);
        //    attachements.Add(att);
        //    return this;
        //}

       

        public bool Send()
        {
            MailMessage mailMessage = new MailMessage()
            {
                Subject = _subject,
                Body = _body,
                IsBodyHtml = true
            };
            if (string.IsNullOrEmpty(_fromAddress))
            {
                _fromAddress = AppSettingsModel.MailUserName;
            }
            mailMessage.From = new MailAddress(_fromAddress, AppSettingsModel.MailFromName);

            if (!string.IsNullOrEmpty(_toAddress))
            {
                var toAddresses = _toAddress.Split(',');
                if (toAddresses.Length > 0)
                {
                    foreach (var toAddress in toAddresses)
                    {
                        if (!string.IsNullOrEmpty(toAddress))
                            mailMessage.To.Add(new MailAddress(toAddress));
                    }
                }
            }
            if (!string.IsNullOrEmpty(_ccAddress))
            {
                var ccAddresses = _ccAddress.Split(',');
                if (ccAddresses.Length > 0)
                {
                    foreach (var ccAddress in ccAddresses)
                    {
                        if (!string.IsNullOrEmpty(ccAddress))
                            mailMessage.CC.Add(new MailAddress(ccAddress));
                    }
                }
            }
            if (attachements.Count > 0)
            {
                foreach (var attachment in attachements)
                    mailMessage.Attachments.Add(attachment);
            }
            return Send(mailMessage);
        }
        public bool Send(MailMessage Message)
        {
            bool mailSent = false;
            try
            {
                SmtpClient client = new SmtpClient();
                client.Host = _host;
                client.Port = _port;
                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential(_userName, _password);
                client.EnableSsl = _enableSSL;
                client.Send(Message);
                mailSent = true;
            }
            catch (Exception ex)
            {
            }
            return mailSent;
        }
    }
}
