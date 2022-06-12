const express = require('express');
const router = express.Router();
const ServiceAplication = require('../../models/ServiceAplication');


//GetAll applications
router.get('/getAll',async (req,res)=>{
  try {
    ServiceAplication.find({}).then(serviceAplications=>{
       return  res.status(200).json(serviceAplications);
    });
  } catch (e) {

  } finally {

  }
});

router.post('/submit',(req,res)=>{

  try {
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
  } catch (e) {

  } finally {

  }
});


//////Delete ServiceAplication
router.delete('/delete/:id', async(req, res) => {

  try {
    // Check for the existing name
    await ServiceAplication.deleteOne({
        _id: req.params.id
    }, function (err) {
      if (err) return handleError(err);
      // deleted at most one tank document
    });

  } catch (e) {

  } finally {

  }
});

module.exports = router;
