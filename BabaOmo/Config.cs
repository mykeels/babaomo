using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabaOmo
{
    public class Config
    {
        public decimal PriorProbability { get; set; }
        public Loci ChildLoci { get; set; }
        public Loci FatherLoci { get; set; }
        public Loci MotherLoci { get; set; }
        public string PopulationCode { get; set; }
    }
}
