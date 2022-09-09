using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NM.API.Model
{
    public class ResultVM<T>
    {
        public int StatusCode { get; set; }
        public bool Success { get; set; } 
        public int TotalRecords { get; set; }
        public string Message { get; set; }
        public T Data { get; set; } 
    }
}
