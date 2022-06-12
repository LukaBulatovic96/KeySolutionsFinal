const express = require('express');
const router = express.Router();
const PsiholoskaProcena = require('../../models/PsiholoskaProcena');


//GetAll procene
router.get('/getAll',async (req,res)=>{
  try {
    PsiholoskaProcena.find({}).then(psiholoskaProcena=>{
       return  res.status(200).json(psiholoskaProcena);
    });
  } catch (e) {

  } finally {

  }
});

router.post('/submit',(req,res)=>{
  try {
    let {
       opstaOcena,
       pozitivno,
       negativno,
       misljenjePsihologa,
       idUser,
       vqHeader,
       vqBody,
       savedVq,
     } = req.body;



   PsiholoskaProcena.findOne({
       idUser: idUser
     }).then(procena=>{

       if(procena!=null){

         procena.opstaOcena= opstaOcena;
         procena.pozitivno= pozitivno;
         procena.negativno= negativno;
         procena.misljenjePsihologa= misljenjePsihologa;
         procena.vqHeader= vqHeader;
         procena.vqBody= vqBody;
         procena.savedVq= savedVq;



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
           vqHeader,
           vqBody,
           savedVq,
         });

         newPsiholoskaProcena.save().then(newPsiholoskaProcena=>{
               return res.status(201).json({
                 success:true,
                 msg:"procena is saved"
               });

     });
       }
     });




  } catch (e) {

  } finally {

  }
});

module.exports = router;
