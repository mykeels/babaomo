using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using System.IO;
using BabaOmo;
using BabaOmo.Web.Models;

namespace BabaOmo.Web.Controllers
{
    public class PaternityController : ApiController
    {
        public BoApiResponse<List<string>> getAlleles()
        {
            return BoApiResponse<List<string>>.Create(JsonConvert.DeserializeObject<List<string>>(File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("~/JS/alleles.json"))));
        }

        public BoApiResponse<List<Country>> getCountries()
        {
            return BoApiResponse<List<Country>>.Create(JsonConvert.DeserializeObject<List<Country>>(File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("~/JS/countries.json"))));
        }

        [HttpPost]
        public BoApiResponse<Report> getVerdict([FromBody()] Config values)
        {
            return BoApiResponse<Report>.Create(new Paternity(values).getVerdict());
        }

        [HttpPost]
        public BoApiResponse<List<Report>> getVerdicts([FromBody()] ConfigMulti values)
        {
            var response = BoApiResponse<List<Report>>.Create(new List<Report>());
            foreach (var config in values.getConfigs())
            {
                response.Result.Add(new Paternity(config).getVerdict());
            }
            return response;
        }

        [HttpPost]
        public BoApiResponse<List<decimal>> getPaternityIndices([FromBody()] Config values)
        {
            return BoApiResponse<List<decimal>>.Create(new Paternity(values).getPaternityIndices());
        }
    }
}
