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
        
       public static ResultModel<T> GetResponseModal(T data,int statusCode, bool success, string message = "", int totalRecords=0)
        {
            return new ResultModel<T>()
            {
                StatusCode= statusCode,
                Success = success,
                TotalRecords= totalRecords,
                Message= message,
                Data= data
            };
        }
    }

    


}
