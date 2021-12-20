const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceAplicationSchema = new Schema({


  formular:[String]

});


module.exports = ServiceAplication = mongoose.model('serviceAplication',ServiceAplicationSchema);
