const express = require('express');
const router = express.Router();
const Faktura = require('../../models/Faktura');

//GetAll fakture
router.get('/getAll',async (req,res)=>{
  Faktura.find({}).then(fakture=>{
     return  res.status(200).json(fakture);
  });
});


router.post('/submit',(req,res)=>{

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
});

module.exports = router;
