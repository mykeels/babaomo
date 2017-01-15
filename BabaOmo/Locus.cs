using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabaOmo
{
    public class Locus
    {
        public string Name { get; set; }
        public decimal AlleleA { get; set; }
        public decimal AlleleB { get; set; }

        public Locus()
        {
            this.AlleleA = 0;
            this.AlleleB = 0;
        }

        public Locus(decimal a, decimal b)
        {
            this.AlleleA = a;
            this.AlleleB = b;
        }

        public Locus(decimal ab)
        {
            this.AlleleA = ab;
            this.AlleleB = ab;
        }

        public bool IsSame()
        {
            return this.AlleleA == this.AlleleB;
        }

        public static decimal GetSimilarAllele(Locus a, Locus b)
        {
            //a could be father and b could be child ... even vice-versa
            if (a.AlleleA == b.AlleleA || a.AlleleA == b.AlleleB) return a.AlleleA;
            if (a.AlleleB == b.AlleleA || a.AlleleB == b.AlleleB) return a.AlleleB;
            if (a.AlleleA == b.AlleleA || a.AlleleB == b.AlleleA) return b.AlleleA;
            if (a.AlleleA == b.AlleleB || a.AlleleB == b.AlleleB) return b.AlleleB;
            return 0;
        }
    }

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
