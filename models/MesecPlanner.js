const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    checked:{
      type:Boolean,
      default:false
    },
    name:{
      type:String
    },

});


const DanSchema = new Schema({
    mesec:{
      type:String
    },
    dan:{
      type:Number
    },
    komentar:{
      milenko:[TaskSchema],
      natasa:[TaskSchema],
      zorica:[TaskSchema],
      milica:[TaskSchema],
    },
    sastanci:[String]
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
