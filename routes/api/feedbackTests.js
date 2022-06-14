const express = require('express');
const router = express.Router();
const FeedBackTest = require('../../models/FeedBackTest');

//GetAll 360tests
router.get('/getAll',async (req,res)=>{
  req.setTimeout(5*1000);
  try {
    FeedBackTest.find({}).then(feedbackTests=>{
       return  res.status(200).json(feedbackTests);
    });
  } catch (e) {

  } finally {

  }
});

router.post('/submit',(req,res)=>{
  req.setTimeout(5*1000);
  try {
    let {
       ans1,
       ans2,
       ans3,
       ans4,
       ans5,
       ans6,
       ans7,
       ans8,
       ans9,
       ans10,
       name,
       boss
     } = req.body;



      let newFeedBackTest = new FeedBackTest({
        ans1,
        ans2,
        ans3,
        ans4,
        ans5,
        ans6,
        ans7,
        ans8,
        ans9,
        ans10,
        name,
        boss
      });

      newFeedBackTest.save().then(newFeedBackTest=>{
            return res.status(201).json({
              success:true,
              msg:"360 test is saved"
            });

  });
  } catch (e) {

  } finally {

  }
});


module.exports = router;
