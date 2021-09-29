using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace NM.Utility
{
    public class Enums
    {
        public const string ExistMsg = "{0} exists";
        public const string ResetPasswordEmail = "An email has been sent. Please check your email";
        public const string EmailError = "Something went wrong while sending an email. Please try again after some time";
        public enum StatusCode
        {
            [Description("OK")]
            OK = 200,
            [Description("Bad Request")]
            BadRequest = 400,
            [Description("Unauthorized")]
            Unauthorized = 401,
            [Description("Not Found")]
            NotFound = 404,
            [Description("Method Not Allowed")]
            MethodNotAllowed = 405,
            [Description("Internal Server Error")]
            ServerError = 500,
            [Description("Already Exists")]
            Exists = 409
        }
        public enum AppConsts
        {
            NONE = 0,
            ONE = 1,
            TWO = 2,
            THREE = 3,
            FOUR = 4,
            FIVE = 5,
            SIX = 6,
            SEVEN = 7,
            EIGHT = 8,
            NINE = 9,
            TEN = 10
        }
              
        public enum FilterData
        {
            PageSize = 100,
            PageNumber = 1
        }

    }

}
