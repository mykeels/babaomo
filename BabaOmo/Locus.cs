using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace BabaOmo
{
    public class Locus
    {
        public string name { get; set; }
        public decimal allele1 { get; set; }
        public decimal allele2 { get; set; }

        public Locus()
        {
            this.allele1 = 0;
            this.allele2 = 0;
        }

        public Locus(decimal a, decimal b)
        {
            this.allele1 = a;
            this.allele2 = b;
        }

        public Locus(decimal ab)
        {
            this.allele1 = ab;
            this.allele2 = ab;
        }

        public bool isSame()
        {
            return this.allele1 == this.allele2;
        }

        public static decimal getSimilarAllele(Locus a, Locus b)
        {
            //a could be father and b could be child ... even vice-versa
            if (a.allele1 == b.allele1 || a.allele1 == b.allele2) return a.allele1;
            if (a.allele2 == b.allele1 || a.allele2 == b.allele2) return a.allele2;
            if (a.allele1 == b.allele1 || a.allele2 == b.allele1) return b.allele1;
            if (a.allele1 == b.allele2 || a.allele2 == b.allele2) return b.allele2;
            return 0;
        }
    }
    
    [JsonArray]
    public class Loci: List<Locus>
    {
        public Loci()
        {
            
        }

        public Loci(int length)
        {
            for (int i = 0; i < length; i++)
            {
                this.Add(new Locus());
            }
        }
    }
}
