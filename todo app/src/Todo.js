import React from 'react';


const Todo = ({todos,deleteTodo}) => 
{   
   const todolist = todos.map((todo) => {
       return(
        <div className="collection-item" key = {todo.id}>
        <span onClick={() => deleteTodo(todo.id)} className="todo">{todo.content}</span>
        </div>
       )
   })



    return(
    <div className="todos collection">
        {todolist}
    </div>       
    );
} 

export default Todo;