using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabaOmo
{
    public class Report
    {
        public decimal combinedPaternityIndex { get; set; }
        public decimal probabilityOfPaternity { get; set; }
        public decimal priorProbability { get; set; }
        public string verdict { get; set; }
    }
}
