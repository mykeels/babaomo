function Locus() {
    this.name = "";
    this.allele1 = 0;
    this.allele2 = 0;

    this.isSame = function () {
        return this.allele1 == this.allele2;
    }
    return this;
}

Locus.getSimilarAllele = function (a, b) {
    a = a || new Locus();
    b = b || new Locus();
    if (a.allele1 == b.allele1 || a.allele1 == b.allele2) return a.allele1;
    if (a.allele2 == b.allele1 || a.allele2 == b.allele2) return a.allele2;
    if (a.allele1 == b.allele1 || a.allele2 == b.allele1) return b.allele1;
    if (a.allele1 == b.allele2 || a.allele2 == b.allele2) return b.allele2;
    return 0;
}