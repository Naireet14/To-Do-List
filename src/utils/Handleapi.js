import axios from 'axios'

const baseUrl="http://localhost:5000"

const getAllTodo=(settodo)=>{
    axios.get(baseUrl).then(({data})=>{
        console.log('data --->',data);
        settodo(data)
    })
    .catch((err)=>console.log(err))
}

const addtodo=(text,settext,settodo)=>{
    axios.post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log(data);
        settext("")
        getAllTodo(settodo)
    })
    .catch((err)=>console.log(err))
}

const updatetodo=(todoid,text,settodo,settext,setisupdating)=>{
    axios.post(`${baseUrl}/update`,{_id:todoid,text})
    .then((data)=>{
        settext("")
        setisupdating(false)
        getAllTodo(settodo)
    })
    .catch((err)=>console.log(err))
}

const deletetodo=(_id,settodo)=>{
    axios.post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        console.log(data)
        getAllTodo(settodo)
    })
    .catch((err)=>console.log(err))
}

export {addtodo,getAllTodo,updatetodo,deletetodo}