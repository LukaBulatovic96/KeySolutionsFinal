const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DanSchema = new Schema({
    mesec:{
      type:String
    },
    dan:{
      type:Number
    },
    komentar:{
      type:String
    },
});

const MesecPlannerSchema = new Schema({

  mesec:{
    type:String
  },
  godina:{
    type:Number
  },
  dani:[DanSchema]

});


module.exports = MesecPlanner = mongoose.model('mesecPlanner',MesecPlannerSchema);
