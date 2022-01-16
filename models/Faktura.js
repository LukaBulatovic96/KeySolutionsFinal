const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FakturaSchema = new Schema({

  type:{
    type:Number
  },

  platilac:{
    type:String
  },
  pib:{
    type:String
  },
  mib:{
    type:String
  },
  imeKompanije:{
    type:String
  },
  adresa:{
    type:String
  },
  drzava:{
    type:String
  },

  datumIzdavanja:{
    type:String
  },
  datumPrometa:{
    type:String
  },
  valuta:{
    type:String
  },
  nazivUsluge:{
    type:String
  },
  cenaUsluge:{
    type:String
  },

  iznos:{
    type:String
  },
  slovima:{
    type:String
  },
  racunBroj:{
    type:String
  },
  racunGodina:{
    type:String
  },

});


module.exports = Faktura = mongoose.model('faktura',FakturaSchema);
