const express = require('express');
const router = express.Router();
const MesecPlanner = require('../../models/MesecPlanner');


//GetAll meseci
router.get('/getAll',async (req,res)=>{
  MesecPlanner.find({}).then(serviceAplications=>{
     return  res.status(200).json(serviceAplications);
  });
});

router.post('/submit',(req,res)=>{

  let {
     mesec,
     godina,
     dani
   } = req.body;

    let newMesecPlanner = new MesecPlanner({
      mesec,
      godina,
      dani
    });

    newMesecPlanner.save().then(newMesecPlanner=>{
          return res.status(201).json({
            success:true,
            msg:"MesecPlanner is saved"
          });

});
});

router.post('/lockMesec/:id', async(req, res) => {

  let {
    lock
   } = req.body;


    // Check for the existing name
    await MesecPlanner.findOne({
        _id: req.params.id
    }).then(async planner => {
        if (planner) {


          planner.locked=lock;


          planner.save().then(planner=>{
            return res.status(201).json({
                success: true,
                msg: "planner saved."
            });
          })

        }else{

          return res.status(400).json({
              msg: "planner doesn't exist."
          });
        }
    });
    // The data is valid and new we can register the user
});

router.put('/putMesec/:id', async(req, res) => {

  let {
    dani
   } = req.body;

    // Check for the existing name
    await MesecPlanner.findOne({
        _id: req.params.id
    }).then(async planner => {
        if (planner) {


          planner.dani=dani;


          planner.save().then(planner=>{
            return res.status(201).json({
                success: true,
                msg: "planner saved."
            });
          })

        }else{

          return res.status(400).json({
              msg: "planner doesn't exist."
          });
        }
    });
    // The data is valid and new we can register the user
});

module.exports = router;
