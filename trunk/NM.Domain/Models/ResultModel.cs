using System;
using System.Collections.Generic;
using System.Text;

namespace NM.Domain.Models
{
    public class ResultModel<T>
    {
        public int StatusCode { get; set; }
        public bool Success { get; set; }
        public int TotalRecords { get; set; }
        public string Message { get; set; }
        public T Data { get; set; }
    }
}
