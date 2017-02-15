using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BabaOmo.Common;

namespace BabaOmo
{
    public class Paternity
    {
        public Config config { get; set; }
        public Population.AlleleFrequencies alleleFrequencies { get; set; }
        public List<decimal> paternityIndices { get; set; }
        public decimal combinedPaternityIndex { get; set; }

        public Paternity(Config cfg)
        {
            if (cfg == null) throw new ArgumentNullException("cfg", Constants.ERROR_NULL);
            if (cfg.childLoci == null) throw new ArgumentNullException("cfg.ChildLoci", Constants.ERROR_NULL);
            if (cfg.fatherLoci == null) throw new ArgumentNullException("cfg.FatherLoci", Constants.ERROR_NULL);
            if (cfg.childLoci.Count == 0) throw new Exception(Constants.CHILDLOCI_NOT_ZERO);
            if (cfg.fatherLoci.Count != cfg.childLoci.Count) throw new Exception(Constants.FATHERLOCI_NO_EQUAL_CHILDLOCI_NO);
            this.config = cfg;
            this.alleleFrequencies = new Population.AlleleFrequencies(cfg.populationCode);
            this.paternityIndices = this.getPaternityIndices();
            this.combinedPaternityIndex = 1;

            this.paternityIndices.ForEach((decimal pi) => {
                this.combinedPaternityIndex = this.combinedPaternityIndex * pi; //gets the combined paternity index via looping and multiplication
            });
        }

        public Report getVerdict()
        {
            Report report = new Report();
            decimal probability = getProbabilityOfPaternity();
            report.combinedPaternityIndex = this.combinedPaternityIndex;
            report.probabilityOfPaternity = probability;
            report.priorProbability = config.priorProbability;
            if (probability == 0) report.verdict = Constants.FATHER_EXCLUDED_VERDICT;
            else if (probability >= 90 && probability < 100) report.verdict = Constants.FATHER_NOT_EXCLUDED_VERDICT;
            else report.verdict = Constants.UNSURE_VERDICT;
            return report;
        }

        public decimal getProbabilityOfPaternity()
        {
            return (this.combinedPaternityIndex * this.config.priorProbability) / ((this.combinedPaternityIndex * this.config.priorProbability) + (1 - this.config.priorProbability)) * 100;
        }

        public List<decimal> getPaternityIndices()
        {
            List<decimal> ret = new List<decimal>();
            for (int i = 0; i < config.fatherLoci.Count; i++)
            {
                Locus fatherLocus = config.fatherLoci[i];
                Locus childLocus = config.childLoci[i];
                decimal X = 0.5M;
                if (fatherLocus.isSame())
                {
                    X = 1;
                }
                decimal Y = 0M;
                decimal similarAllele = Locus.getSimilarAllele(fatherLocus, childLocus);
                if (similarAllele > 0)
                {
                    var alleleFrequency = alleleFrequencies.Where((alleleFreq) => alleleFreq.locusName.Equals(fatherLocus.name) && alleleFreq.alleleNo.Equals(similarAllele)).FirstOrDefault();
                    if (alleleFrequency != null)
                    {
                        Y = alleleFrequency.frequency;
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
