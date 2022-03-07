const express = require('express');
const router = express.Router();
const PsiholoskaProcena = require('../../models/PsiholoskaProcena');


//GetAll procene
router.get('/getAll',async (req,res)=>{
  PsiholoskaProcena.find({}).then(psiholoskaProcena=>{
     return  res.status(200).json(psiholoskaProcena);
  });
});

router.post('/submit',(req,res)=>{
  let {
     opstaOcena,
     pozitivno,
     negativno,
     misljenjePsihologa,
     idUser,
   } = req.body;



 PsiholoskaProcena.findOne({
     idUser: idUser
   }).then(procena=>{

     if(procena!=null){

       procena.opstaOcena= opstaOcena;
       procena.pozitivno= pozitivno;
       procena.negativno= negativno;
       procena.misljenjePsihologa= misljenjePsihologa;

       procena.save().then(procena=>{
             return res.status(201).json({
               success:true,
               msg:"procena is saved"
             });

   });
     }else{
       
       let newPsiholoskaProcena = new PsiholoskaProcena({
         opstaOcena,
         pozitivno,
         negativno,
         misljenjePsihologa,
         idUser,
       });

       newPsiholoskaProcena.save().then(newPsiholoskaProcena=>{
             return res.status(201).json({
               success:true,
               msg:"procena is saved"
             });

   });
     }
   });




});

module.exports = router;
