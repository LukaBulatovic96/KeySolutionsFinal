const express = require('express');
const router = express.Router();
const StavoviZaposlenih = require('../../models/StavoviZaposlenih');

//GetAll 360tests
router.get('/getAll',async (req,res)=>{
  req.setTimeout(5*1000);
  try {
    StavoviZaposlenih.find({}).then(stavoviZaposlenih=>{
       return  res.status(200).json(stavoviZaposlenih);
    });
  } catch (e) {

  } finally {

  }
});

router.post('/submit',(req,res)=>{
  req.setTimeout(5*1000);
  try {
    let {
       name,
       staz,
       pol,
       ans1,
       ans2,
       ans3,
       ans4
     } = req.body;

    console.log("BACKEND");

      let newStavoviZaposlenih = new StavoviZaposlenih({
        name,
        staz,
        pol,
        ans1,
        ans2,
        ans3,
        ans4
      });

      newStavoviZaposlenih.save().then(newStavoviZaposlenih=>{
            return res.status(201).json({
              success:true,
              msg:"Stavovi zaposlenih is saved"
            });

  });
  } catch (e) {

  } finally {

  }
});


module.exports = router;
