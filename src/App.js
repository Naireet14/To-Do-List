
import './App.css';
import Todo from './component/todo';
import { useEffect, useState } from 'react';
import { addtodo, getAllTodo,updatetodo,deletetodo } from './utils/Handleapi';



function App() {
  const [todo,settodo]=useState([])
  const[text,settext]=useState("")
  const [isupdating,setisupdating]=useState(false)
  const[todoid,settodoid]=useState("")

  useEffect(()=>{
    getAllTodo(settodo)
  },[])

  const updateMode=(_id,text)=>{
    setisupdating(true)
    settext(text)
    settodoid(_id)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="inp">
          <input type="text" placeholder="Add text Here" value={text} onChange={(e)=>settext(e.target.value) }/>
          <button type="button" className="add-btn"  onClick={isupdating? ()=>updatetodo(todoid,text,settodo,settext,setisupdating):()=>addtodo(text,settext,settodo)}>{isupdating? "Update":"Add"}</button>
        </div>
        <div className="list">
          {todo.map((item)=><Todo key={item._id} text={item.text} updateMode={()=>updateMode(item._id,item.text)}
          deleteToDo={()=>deletetodo(item._id,settodo)}/>)}
          
        </div>
      </div>
    </div>
  );
}

export default App;
