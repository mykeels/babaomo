function Report() {
    this.combinedPaternityIndex = 0;
    this.probabilityOfPaternity = 0;
    this.priorProbability = 0;
    this.verdict = "";
    return this;
}

function Paternity(cfg) {
    this.config = cfg || new Config();
    this.alleleFrequencies = [];
    this.paternityIndices = [];
    this.combinedPaternityIndex = 1;

    var self = this;

    this.validate = function () {
        if (this.config == null) throw new Error(constants.ERROR_NULL, "config");
        else {
            if (this.config.childLoci == null) throw new Error(constants.ERROR_NULL, "childLoci");
            if (this.config.fatherLoci == null) throw new Error(constants.ERROR_NULL, "fatherLoci");
            if (this.config.childLoci.length == 0) throw new Error(constants.CHILDLOCI_NOT_ZERO);
            if (this.config.fatherLoci.length != this.config.childLoci.length) throw new Error(constants.FATHERLOCI_NO_EQUAL_CHILDLOCI_NO);
        }
        return true;
    }

    this.getCombinedPaternityIndex = function () {
        this.paternityIndices = this.getPaternityIndices();
        this.combinedPaternityIndex = this.paternityIndices.reduce(function (a, b) {
            return a * b;
        }, 1);
        return this.combinedPaternityIndex;
    }

    this.getProbabilityOfPaternity = function () {
        this.getCombinedPaternityIndex();
        return (this.combinedPaternityIndex * this.config.priorProbability) / ((this.combinedPaternityIndex * this.config.priorProbability) + (1 - this.config.priorProbability)) * 100;
    }

    this.getPaternityIndices = function () {
        var paternityIndices = [];
        for (var i = 0; i < self.config.fatherLoci.length; i++) {
            var fatherLocus = self.config.fatherLoci[i] || new Locus();
            var childLocus = self.config.childLoci[i] || new Locus();
            var X = fatherLocus.isSame() ? 1 : 0.5;
            var Y = 0;
            var similarAllele = Locus.getSimilarAllele(fatherLocus, childLocus);
            if (similarAllele > 0) {
                var alleleFrequency = self.alleleFrequencies.filter(function (alleleFreq) {
                    return alleleFreq.locusName == fatherLocus.name && alleleFreq.alleleNo == similarAllele
                })[0];
                if (alleleFrequency != null) {
                    Y = alleleFrequency.frequency;
                }
            }
            console.log("X: " + X + "\t" + "Y: " + Y)
            if (Y == 0) paternityIndices.push(0);
            else paternityIndices.push(X / Y * 100);
        }
        return paternityIndices;
    }

    this.getVerdict = function () {
        self.config.init();
        var report = new Report();
        report.probabilityOfPaternity = this.getProbabilityOfPaternity();
        report.priorProbability = this.config.priorProbability;
        if (report.probabilityOfPaternity == 0) report.verdict = constants.FATHER_EXCLUDED_VERDICT;
        else if (report.probabilityOfPaternity >= 90 && report.probabilityOfPaternity < 100) report.verdict = constants.FATHER_NOT_EXCLUDED_VERDICT;
        else report.verdict = constants.UNSURE_VERDICT;
        return report;
    }
}

Paternity.testPaternity = function () {
    var p = new Paternity();
    p.config = Config.getTestConfig();
    p.alleleFrequencies = AlleleFrequency.getTestAlleleFrequencies();
    return p;
}