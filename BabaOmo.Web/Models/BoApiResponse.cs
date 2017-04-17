using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BabaOmo.Web.Models
{
    public class BoApiResponse<T>
    {
        public BoApiResponse() { }
        public BoApiResponse(T result) {
            this.Result = result;
            }
        public T Result { get; set; }
        private int statusCode = 1;
        private string errorMessage = "Success";
        public string Version { get { return "1.0.0"; } }
        public string dateTime { get { return DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss"); } }
        public int StatusCode
        {
            get { return statusCode; }
            set { statusCode = value; }
        }
        public string ErrorMessage
        {
            get { return errorMessage; }
            set { errorMessage = value; }
        }

        public static BoApiResponse<T> Create(T data)
        {
            return new BoApiResponse<T>(data);
        }
    }
}