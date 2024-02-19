const {Router}=require('express')
const router=Router();
const {gettodo, savetodo, updatetodo, deletetodo}=require('../controllers/todocontroller')

router.get('/',gettodo)
router.post('/save',savetodo)
router.post('/update',updatetodo)
router.post('/delete',deletetodo)
// router.get('/',(req,res)=>{
//     res.json({message: "Hi there....."})
// })
module.exports=router;