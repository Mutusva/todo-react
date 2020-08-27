import React, { useState, useEffect } from "react";
import { getTodos, deleteTodo } from "../../api/todoService";
import TodoView from "./TodoView";

function Todos() {

    const[todos, setTodos] = useState([]);

    const getAllTodos = ()=> {
        getTodos().then(results => {
            setTodos(results);
        }).catch(err => {
            console.log("Todo error " + err);
        });
    };

    useEffect(() => {
        getAllTodos();
      },[]);
   
      const onHandleEdit=(event)=>{
        const {value}  = event.target;
        console.log(value);
      };

      const onHandleDelete=(event) => {
        const {value}  = event.target;
        console.log(value);
        const res = [...todos];
        var list = res.filter((item) => {
           return item._id !== value;
        });
        deleteTodo(value).catch(err => {
            console.log(err);
        })
        setTodos(list);
        getAllTodos();
      };

    return (
        <>
        <div className="container">
           
          <TodoView todos={todos} onHandleEdit={onHandleEdit} onHandleDelete={onHandleDelete}/>
        </div>         
        </>
    )
    
}
export default Todos;