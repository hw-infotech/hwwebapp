using Serilog;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace NM.Utility
{
    public static class Common
    {
        public static readonly Random random = new Random();
        public static readonly Object obj;
        public static T GetClaimsValue<T>(this System.Security.Claims.ClaimsIdentity claimsIdentity, string claimType)
        {
            Type underlyingType = typeof(T);
            var value = claimsIdentity.Claims.Where(c => c.Type == claimType)
                 .Select(c => Convert.ChangeType(c.Value, underlyingType)).SingleOrDefault();
            var objType = value.GetType();

            return (T)value;
        }
        public static string Encode(this Int32 encodeMe)
        {
            byte[] encoded = System.Text.Encoding.UTF8.GetBytes(encodeMe.ToString());
            return Convert.ToBase64String(encoded);
        }
        public static byte[] ReadFully(this Stream input)
        {
            byte[] buffer = new byte[16 * 1024];
            using (MemoryStream ms = new MemoryStream())
            {
                int read;
                while ((read = input.Read(buffer, 0, buffer.Length)) > 0)
                {
                    ms.Write(buffer, 0, read);
                }
                return ms.ToArray();
            }
        }
        public static string Decode(this string decodeMe)
        {
            byte[] encoded = Convert.FromBase64String(decodeMe);
            return System.Text.Encoding.UTF8.GetString(encoded);
        }
        public static string Hash(string password)
        {
            var bytes = new UTF8Encoding().GetBytes(password);
            byte[] hashBytes;
            using (var algorithm = new System.Security.Cryptography.SHA512Managed())
            {
                hashBytes = algorithm.ComputeHash(bytes);
            }
            return Convert.ToBase64String(hashBytes);
        }
        //public static string ResolveServerUrl(string serverUrl, bool forceHttps)
        //{
        //    if (serverUrl.IndexOf("://") > -1)
        //        return serverUrl;

        //    string newUrl = serverUrl;
        //    Uri originalUri = System.Web.HttpContext.Current.Request.Url;
        //    newUrl = (forceHttps ? "https" : originalUri.Scheme) +
        //        "://" + originalUri.Authority + newUrl;
        //    return newUrl;
        //}
        public static string ReadTextFile(string file)
        {
            string text = string.Empty;
            var fileStream = new FileStream(file, FileMode.Open, FileAccess.Read);
            using (var streamReader = new StreamReader(fileStream, Encoding.UTF8))
            {
                text = streamReader.ReadToEnd();
            }
            return text;
        }
        public static string Render(object values, string html)
        {
            string output = html;
            foreach (var p in values.GetType().GetProperties())
                output = output.Replace("{{" + p.Name + "}}", (p.GetValue(values, null) as string) ?? string.Empty);
            return output;
        }

        public static string GenerateRandomOTP()
        {
            string otp = string.Empty;
            string alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            string small_alphabets = "abcdefghijklmnopqrstuvwxyz";
            string numbers = "1234567890";
            int length = 5;
            string characters = alphabets + small_alphabets + numbers;
            for (int i = 0; i < length; i++)
            {
                string character = string.Empty;
                do
                {
                    int index = random.Next(0, characters.Length);
                    character = characters.ToCharArray()[index].ToString();
                } while (otp.IndexOf(character) != -1);
                otp += character;
            }
            return otp;
        }

        public static string GenerateRandomPassword()
        {
            string otp = string.Empty;
            string alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            string small_alphabets = "abcdefghijklmnopqrstuvwxyz";
            string numbers = "1234567890";
            int length = 8;
            string characters = alphabets + small_alphabets + numbers;
            for (int i = 0; i < length; i++)
            {
                string character = string.Empty;
                do
                {
                    int index = random.Next(0, characters.Length);
                    character = characters.ToCharArray()[index].ToString();
                } while (otp.IndexOf(character) != -1);
                otp += character;
            }
            return otp;
        }
        #region LogMessage
        public static void LogMessage(string message,
        [System.Runtime.CompilerServices.CallerMemberName] string memberName = "",
        [System.Runtime.CompilerServices.CallerFilePath] string sourceFilePath = "")
        {
            Log.Error("Method : {memberName} , FilePath : {sourceFilePath} , Message :{message}", memberName, sourceFilePath, message);
        }
        #endregion
    }
}
