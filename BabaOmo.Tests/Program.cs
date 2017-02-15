using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Extensions;
using Newtonsoft;
using Newtonsoft.Json;
using BabaOmo;

namespace BabaOmo.Tests
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = JsonConvert.DeserializeObject<Config>(System.IO.File.ReadAllText("Data/Wizkid.json"));
            Console.WriteLine(config.ToJson(true));

            var test = new Paternity(config);

            string result = test.getVerdict().ToJson(true);

            Console.WriteLine(result);
            Console.WriteLine();

            Console.WriteLine("Paternity Indices: ");
            Console.WriteLine(test.paternityIndices.ToJson(true));

            Console.Read();
        }
    }
}