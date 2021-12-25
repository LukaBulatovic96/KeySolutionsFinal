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


//////Delete ServiceAplication
router.delete('/delete/:id', async(req, res) => {

    // Check for the existing name
    await ServiceAplication.deleteOne({
        _id: req.params.id
    }, function (err) {
      if (err) return handleError(err);
      // deleted at most one tank document
    });

});

module.exports = router;
