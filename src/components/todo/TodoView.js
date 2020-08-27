import React from "react";
import { Link } from "react-router-dom";
import TodoTable from "./TodoTable";

function TodoView({ todos, onHandleEdit, onHandleDelete}) {

    
   
    return (
       <>
        <Link to={"/addTodo"} className="btn btn-primary" style={{marginBottom: 5}}>Add todo</Link>
        {/* <button type="button" className="btn btn-primary" onClick={handleAddTodo}>Add Todo</button> */}
        <TodoTable data = {todos} onHandleEdit={onHandleEdit} onHandleDelete={onHandleDelete} />
       </>
    )
}

export default TodoView;