const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PsiholoskaProcenaSchema = new Schema({
  opstaOcena:{
    type: String,
  },
  pozitivno:[String],
  negativno:[String],
  misljenjePsihologa:{
    type:String,
  },
  idUser:{
    type:String
  }

});


module.exports = PsiholoskaProcena = mongoose.model('PsiholoskaProcena',PsiholoskaProcenaSchema);
