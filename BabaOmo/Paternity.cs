using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabaOmo
{
    public class Paternity
    {
        public Config config { get; set; }
        public Population.AlleleFrequencies alleleFrequencies { get; set; }
        public List<decimal> PaternityIndices { get; set; }
        public decimal CombinedPaternityIndex { get; set; }

        public Paternity(Config cfg)
        {
            if (cfg == null) throw new ArgumentNullException("cfg", "Cannot be Null");
            if (cfg.ChildLoci == null) throw new ArgumentNullException("cfg.ChildLoci", "Cannot be Null");
            if (cfg.FatherLoci == null) throw new ArgumentNullException("cfg.FatherLoci", "Cannot be Null");
            if (cfg.ChildLoci.Count == 0) throw new Exception("Number of ChildLoci should be greater than zero (0)");
            if (cfg.FatherLoci.Count != cfg.ChildLoci.Count) throw new Exception("Number of Loci in Father should be same as Number of Loci in Child");
            this.config = cfg;
            this.alleleFrequencies = new Population.AlleleFrequencies(cfg.PopulationCode);
            this.PaternityIndices = this.GetPaternityIndices();
            this.CombinedPaternityIndex = 1;

            this.PaternityIndices.ForEach((decimal pi) => {
                this.CombinedPaternityIndex = this.CombinedPaternityIndex * pi; //gets the combined paternity index via looping and multiplication
            });
        }

        public string GetVerdict()
        {
            decimal probability = GetProbabilityOfPaternity();
            string ret = "";
            ret += "Combined Paternity Index: " + this.CombinedPaternityIndex + "\n";
            ret += "Probability of Paternity: " + probability + "\n";
            if (probability == 0)
            {
                ret += "The Man can be excluded as the Biological Father of the Child";
            }
            else if (probability >= 90 && probability < 100)
            {
                ret += "The Man can NOT be excluded as the Biological Father of the Child";
            }
            else
            {
                ret += "Hmm, this is strange. This should not happen ... We are not sure what to say about the biological parentage of the child";
            }
            return ret;
        }

        public decimal GetProbabilityOfPaternity()
        {
            return (this.CombinedPaternityIndex * this.config.PriorProbability) / ((this.CombinedPaternityIndex * this.config.PriorProbability) + (1 - this.config.PriorProbability)) * 100;
        }

        public List<decimal> GetPaternityIndices()
        {
            List<decimal> ret = new List<decimal>();
            for (int i = 0; i < config.FatherLoci.Count; i++)
            {
                Locus fatherLocus = config.FatherLoci[i];
                Locus childLocus = config.ChildLoci[i];
                decimal X = 0.5M;
                if (fatherLocus.IsSame())
                {
                    X = 1;
                }
                decimal Y = 0M;
                decimal similarAllele = Locus.GetSimilarAllele(fatherLocus, childLocus);
                if (similarAllele > 0)
                {
                    var alleleFrequency = alleleFrequencies.Where((alleleFreq) => alleleFreq.LocusName.Equals(fatherLocus.Name) && alleleFreq.AlleleNo.Equals(similarAllele)).FirstOrDefault();
                    if (alleleFrequency != null)
                    {
                        Y = alleleFrequency.Frequency;
                    }
                }
                Console.WriteLine("X: " + X + "\t" + "Y: " + Y);
                if (Y == 0) ret.Add(0); //paternity indexfor this locus will be zero
                else ret.Add(X / Y * 100);
            }
            return ret;
        }
    }
}
