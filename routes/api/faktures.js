const express = require('express');
const router = express.Router();
const Faktura = require('../../models/Faktura');

//GetAll fakture
router.get('/getAll',async (req,res)=>{
  req.setTimeout(5*1000);
  try {
    Faktura.find({}).then(fakture=>{
       return  res.status(200).json(fakture);
    });
  } catch (e) {

  } finally {

  }
});


router.post('/submit',(req,res)=>{
  req.setTimeout(5*1000);
  try {
    let {
      type,
      platilac,
      pib,
      mib,
      imeKompanije,
      adresa,
      drzava,
      datumIzdavanja,
      datumPrometa,
      valuta,
      nazivUsluge,
      cenaUsluge,
      iznos,
      slovima,
      racunBroj,
      racunGodina,
     } = req.body;

      let newFaktura = new Faktura({
        type,
        platilac,
        pib,
        mib,
        imeKompanije,
        adresa,
        drzava,
        datumIzdavanja,
        datumPrometa,
        valuta,
        nazivUsluge,
        cenaUsluge,
        iznos,
        slovima,
        racunBroj,
        racunGodina,
      });

      newFaktura.save().then(newFaktura=>{
            return res.status(201).json({
              success:true,
              msg:"MesecPlanner is saved"
            });

  });
  } catch (e) {

  } finally {

  }

});

module.exports = router;
