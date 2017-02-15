using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace BabaOmo
{
    public class Config
    {
        public decimal priorProbability { get; set; }
        public List<Locus> childLoci { get; set; }
        public List<Locus> fatherLoci { get; set; }
        public List<Locus> motherLoci { get; set; }
        public string populationCode { get; set; }
    }
    
    public class ConfigMulti
    {
        public List<decimal> priorProbabilities { get; set; }
        public List<Locus> childLoci { get; set; }
        public List<Locus> fatherLoci { get; set; }
        public List<Locus> motherLoci { get; set; }
        public string populationCode { get; set; }

        public IEnumerable<Config> getConfigs()
        {
            var configs = new List<Config>();
            foreach (var p in this.priorProbabilities)
            {
                yield return new Config()
                {
                    childLoci = this.childLoci,
                    fatherLoci = this.fatherLoci,
                    motherLoci = this.motherLoci,
                    populationCode = this.populationCode,
                    priorProbability = p
                };
            }
        }
    }
}
