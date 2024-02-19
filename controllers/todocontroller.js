const todomodel=require('../models/todomodel')

//this will give us all the todo from our database
module.exports.gettodo=async(req,res)=>{
    const todo=await todomodel.find()
    res.send(todo);
}

module.exports.savetodo=async(req,res)=>{
    const {text} =req.body
    todomodel.create({text}).then((data)=>{
        console.log("Added Successfully");
        console.log(data)
        res.send(data)
    })
    
}
module.exports.updatetodo=async(req,res)=>{
    const{_id,text}=req.body
    todomodel.findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Updated successfully...."))
    .catch((err)=>console.log(err))
}
module.exports.deletetodo=async(req,res)=>{
    const{_id,text}=req.body
    todomodel.findByIdAndDelete(_id)
    .then(()=>res.send("Deleted successfully...."))
    .catch((err)=>console.log(err))
}