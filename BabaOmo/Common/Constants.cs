using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BabaOmo.Common
{
    public class Constants
    {
        public const string ERROR_NULL = "Cannot be null";
        public const string CHILDLOCI_NOT_ZERO = "Number of ChildLoci should be greater than zero (0)";
        public const string FATHERLOCI_NO_EQUAL_CHILDLOCI_NO = "Number of Loci in Father should be same as Number of Loci in Child";

        public const string FATHER_EXCLUDED_VERDICT = "The Father can be excluded as the Biological Father of the Child";
        public const string FATHER_NOT_EXCLUDED_VERDICT = "The Father can NOT be excluded as the Biological Father of the Child";
        public const string UNSURE_VERDICT = "Hmm, this is strange. This should not happen ... We are not sure what to say about the biological parentage of the child";
    }
}
