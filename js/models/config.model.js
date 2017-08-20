function Config() {
    this.priorProbability = 0;
    this.childLoci = [];
    this.fatherLoci = [];
    this.motherLoci = [];
    this.populationCode = "";
    this.init = function () {
        this.fatherLoci = this.fatherLoci.map(function (locus) {
            var l = new Locus();
            for (var key in locus) {
                l[key] = locus[key];
            }
            return l;
        });
        this.childLoci = this.childLoci.map(function (locus) {
            var l = new Locus();
            for (var key in locus) {
                l[key] = locus[key];
            }
            return l;
        });
        return this;
    }
    return this;
}

function ConfigMulti() {
    this.priorProbabilities = [];
    this.childLoci = [];
    this.fatherLoci = [];
    this.motherLoci = [];
    this.populationCode = "";

    this.getConfigs = function () {
        var self = this;
        return this.priorProbabilities.map(function (p) {
            var config = new Config();
            config.priorProbability = p;
            config.childLoci = self.childLoci;
            config.fatherLoci = self.fatherLoci;
            config.motherLoci = self.motherLoci;
            config.populationCode = self.populationCode;
            return config;
        });
    }
    return this;
}

var testConfig = {
    "fatherLoci": [
      {
          "name": "D3S1358",
          "allele1": 15,
          "allele2": 16
      },
      {
          "name": "D7S820",
          "allele1": 11,
          "allele2": 11
      },
      {
          "name": "VWA",
          "allele1": 13,
          "allele2": 16
      },
      {
          "name": "FGA",
          "allele1": 22,
          "allele2": 28
      },
      {
          "name": "D8S1179",
          "allele1": 13,
          "allele2": 14
      },
      {
          "name": "D21S11",
          "allele1": 28,
          "allele2": 32.2
      },
      {
          "name": "D18S51",
          "allele1": 17,
          "allele2": 18
      },
      {
          "name": "D5S818",
          "allele1": 8,
          "allele2": 12
      }
    ],
    "motherLoci": [
      {
          "name": "D3S1358",
          "allele1": 17,
          "allele2": 18
      },
      {
          "name": "D7S820",
          "allele1": 8,
          "allele2": 9
      },
      {
          "name": "VWA",
          "allele1": 14,
          "allele2": 15
      },
      {
          "name": "FGA",
          "allele1": 21,
          "allele2": 21
      },
      {
          "name": "D8S1179",
          "allele1": 13,
          "allele2": 15
      },
      {
          "name": "D21S11",
          "allele1": 28,
          "allele2": 29
      },
      {
          "name": "D18S51",
          "allele1": 16,
          "allele2": 17
      },
      {
          "name": "D5S818",
          "allele1": 11,
          "allele2": 14
      }
    ],
    "childLoci": [
      {
          "name": "D3S1358",
          "allele1": 16,
          "allele2": 17
      },
      {
          "name": "D7S820",
          "allele1": 8,
          "allele2": 11
      },
      {
          "name": "VWA",
          "allele1": 14,
          "allele2": 16
      },
      {
          "name": "FGA",
          "allele1": 21,
          "allele2": 28
      },
      {
          "name": "D8S1179",
          "allele1": 14,
          "allele2": 15
      },
      {
          "name": "D21S11",
          "allele1": 28,
          "allele2": 32.2
      },
      {
          "name": "D18S51",
          "allele1": 17,
          "allele2": 18
      },
      {
          "name": "D5S818",
          "allele1": 8,
          "allele2": 14
      }
    ],
    "populationCode": "NIG",
    "priorProbability": 0.5
}

Config.getTestConfig = function () {
    var config = new Config();
    for (var key in testConfig) {
        config[key] = testConfig[key];
    }
    config.init();
    return config;
}