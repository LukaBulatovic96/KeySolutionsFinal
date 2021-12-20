const express = require('express');
const router = express.Router();
const ServiceAplication = require('../../models/ServiceAplication');


//GetAll applications
router.get('/getAll',async (req,res)=>{
  ServiceAplication.find({}).then(serviceAplications=>{
     return  res.status(200).json(serviceAplications);
  });
});

router.post('/submit',(req,res)=>{

  let {
     formular
   } = req.body;



    let newServiceAplication = new ServiceAplication({
      formular
    });

    newServiceAplication.save().then(newServiceAplication=>{
          return res.status(201).json({
            success:true,
            msg:"ServiceAplication is saved"
          });

});
});


module.exports = router;
