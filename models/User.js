const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the User Schema

const KpiSchemaUser = new Schema({
    name:{
    type:String
    },
    samoProcena:{
      type:Number
    },
    konacnaProcena:{
      type:Number
    },
    rangiranje:{
      type:Number,
      default:0
    },
    ponder:{
      type:Number
    }
});

const LicniKpiSchema = new Schema({
    name:{
      type:String
    },
    ponder:{
      type:Number
    },
    samoProcena:{
      type:Number
    },
    konacnaProcena:{
      type:Number
    },
    rangiranje:{
      type:Number
    },
    comment:{
      type:String
    }

});

const PerformanceEvaluationSchema = new Schema({
  kompetence:[KpiSchemaUser],
  kompanijski:[KpiSchemaUser],
  licniKpi:[LicniKpiSchema],
  finished:{
    type:Boolean,
    default:false
  },
  komentar:{
    type:String
  },
  komentarSamoProcena:{
    type:String
  },
  date:{
    type:String,
    default:""
  }
});

const UserSchema = new Schema({
  procenaKandidata:{
    godiste:{
      type:String
    },
    prebivaliste:{
      type:String
    },
    pozicija:{
      type:String
    },
    stepenSS:{
      type:String
    },
    stepenEng:{
      type:String
    },
    stepenNem:{
      type:String
    },
    stepenRacunar:{
      type:String
    },
    ans1:{
      type:String
    },
    ans1Desc:{
      type:String
    },
    ans2:{
      type:String
    },
    ans2Desc:{
      type:String
    },
    ans3:{
      type:String
    },
    ans3Desc:{
      type:String
    },
    ans4:{
      type:String
    },
    ans4Desc:{
      type:String
    },
    ans5:{
      type:String
    },
    ans5Desc:{
      type:String
    },
    ans6:{
      type:String
    },
    ans6Desc:{
      type:String
    },
    ans7:{
      type:String
    },
    ans7Desc:{
      type:String
    },
    ans8:{
      type:String
    },
    ans8Desc:{
      type:String
    },
    ans9:{
      type:String
    },
    ans9Desc:{
      type:String
    },
    ans10:{
      type:String
    },
    ans10Desc:{
      type:String
    },
    ans11:{
      type:String
    },
    ans11Desc:{
      type:String
    },
    ans12:{
      type:String
    },
    ans12Desc:{
      type:String
    },
    ans13:{
      type:String
    },
    ans13Desc:{
      type:String
    },
    ans14:{
      type:String
    },
    ans14Desc:{
      type:String
    },
  },
  upitnikFlag:{
    type:Boolean
  },
  name:{
    type: String,
    required: true
  },
  nadredjeni: {
    type: String,
  },
  podredjeni: [String],
  istiNivo: [String],
  sektor: {
    type: String,
    required: true
  },
  radnoMesto:{
    type:String,
    required: true
  },
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  availableTest:{
    procenaEdukacije:{
      type:Boolean,
      default:false
    },
    procenaPregled:{
      type:Boolean,
      default:false
    },
    kpiPregled:{
      type: Boolean,
      default: false
    },
    vqTest:{
      type: Boolean,
      default: false
    },
    testLicnosti:{
      type: Boolean,
      default: false
    },
    stavoviZaposlenih:{
      type: Boolean,
      default: false
    },
    feedbackTest:{
      type: Boolean,
      default: false
    },
    belbinTest:{
      type: Boolean,
      default: false
    },
    preformanceEval:{
      type: Boolean,
      default: true
    },
    feedBackReport:{
      type: Boolean,
      default: false
    }
  },
  vqTest:{
    result:{
      type: Number
    },
    date:{
      type: Date,
      default:  Date.now
    },
    finished:{
      type: Boolean,
      default: false
    }
  },
  testLicnosti:{
    N1:{
      type: Number,
    },
    N2:{
      type: Number,
    },
    N3:{
      type: Number,
    },
    N4:{
      type: Number,
    },
    N5:{
      type: Number,
    },
    N6:{
      type: Number,
    },
    E1:{
      type: Number,
    },
    E2:{
      type: Number,
    },
    E3:{
      type: Number,
    },
    E4:{
      type: Number,
    },
    E5:{
      type: Number,
    },
    E6:{
      type: Number,
    },
    O1:{
      type: Number,
    },
    O2:{
      type: Number,
    },
    O3:{
      type: Number,
    },
    O4:{
      type: Number,
    },
    O5:{
      type: Number,
    },
    O6:{
      type: Number,
    },
    U1:{
      type: Number,
    },
    U2:{
      type: Number,
    },
    U3:{
      type: Number,
    },
    U4:{
      type: Number,
    },
    U5:{
      type: Number,
    },
    U6:{
      type: Number,
    },
    S1:{
      type: Number,
    },
    S2:{
      type: Number,
    },
    S3:{
      type: Number,
    },
    S4:{
      type: Number,
    },
    S5:{
      type: Number,
    },
    S6:{
      type: Number,
    },
    pol:{
      type: String,
    },
    date:{
      type: Date,
    },
    finished:{
      type: Boolean,
      default: false
    }
  },
  date:{
    type: Date,
    default: Date.now
  },
  stavoviZaposlenihFinished:{
    type: Boolean,
    default:false
  },
  feedBackTest:{
    finished:{
      type: Boolean,
      default: false
    },
    ukupnoPodredjeni:{
      type:Number,
      default:0
    },
    ukupnoNadredjeni:{
      type:Number,
      default:0
    },
    ukupnoIstiNivo:{
      type:Number,
      default:0
    },
    prosek:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 istiNivo:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
    ans1:{
 podredjeni:{
   type:Number,
   default:0
 },
 istiNivo:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans2:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans3:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans4:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans5:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans6:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans7:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans8:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans9:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans10:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans11:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans12:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans13:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans14:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans15:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans16:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans17:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans18:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans19:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans20:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans21:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans22:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans23:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans24:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans25:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans26:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans27:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans28:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans29:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans30:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans31:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans32:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans33:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans34:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans35:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans36:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans37:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans38:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans39:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans40:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans41:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans42:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans43:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans44:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans45:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans46:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans47:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans48:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans49:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans50:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans51:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans52:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans53:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans54:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans55:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans56:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans57:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans58:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans59:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans60:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans61:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans62:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans63:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans64:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans65:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans66:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans67:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans68:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans69:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans70:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans71:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans72:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans73:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans74:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans75:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans76:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans77:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans78:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans79:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans80:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans81:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans82:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans83:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans84:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans85:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans86:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans87:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans88:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans89:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans90:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans91:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans92:{
  istiNivo:{
    type:Number,
    default:0
  },
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
  },
  belbinTest:{
    finished:{
      type: Boolean,
      default: false
    },
    SO:{
      type: Number,
      default: 0
    },
    RV:{
      type: Number,
      default: 0
    },
    OA:{
      type: Number,
      default: 0
    },
    OI:{
      type: Number,
      default: 0
    },
    OK:{
      type: Number,
      default: 0
    },
    S:{
      type: Number,
      default: 0
    },
    CT:{
      type: Number,
      default: 0
    },
    P:{
      type: Number,
      default: 0
    },
  },
  type:{
    type: String,
    required:true
  },
  performanceEvaluation:[PerformanceEvaluationSchema],
  performanceEvaluationPodredjeni:[String],
});

module.exports = User = mongoose.model('users',UserSchema);
