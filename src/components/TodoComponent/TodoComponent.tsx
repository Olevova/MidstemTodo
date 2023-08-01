import React, { ChangeEvent,FormEvent, useState} from "react";
import { VscTrash, VscEdit } from "react-icons/vsc";
import { ITodo } from "../Model/Todo";
import {Todo} from './TodoComponent.styled.jsx'

interface TodoComponentProps {
  toDo: {
    id: number;
    todo: string;
    completed: boolean;
    
  };
  onDelete:(id: number) => void;
  onRefresh: (todo: ITodo) => void;
  onDid: (todo: ITodo) => void;
}

const TodoComponent: React.FC<TodoComponentProps> = ({
  toDo,
  onDelete,
  onRefresh,
  onDid
}) => {
  const[refresh, setRefresh] = useState(false);
  const [editedTodo, setEditedTodo] = useState(toDo.todo);
  const[didTodo, setDidTodo] = useState(toDo.completed);


  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    const completed = e.target.checked;
    setDidTodo(completed);

    const updatedTodo = {
      id: toDo.id,
      todo: editedTodo,
      completed: completed,
    };
    onDid(updatedTodo);
    
  };

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newTodo = {
      id: toDo.id,
      todo: editedTodo,
      completed: false,
    };
    onRefresh(newTodo);
    setRefresh(!refresh);
    
     
  };

  const handleDeleteClick = () => {
    console.log(toDo.id);
    onDelete(toDo.id); 
  };

  return (
    <Todo>
      <input type="checkbox" checked={didTodo} onChange={handleCheckboxChange} />
      
      { !refresh? (<>
      <p>{toDo.todo}</p>
      <button onClick={()=>{setRefresh(true)}}>
        <VscEdit />
      </button>
      </>):(
      <><input
      type="text"
      value={editedTodo}
      onChange={(e) => setEditedTodo(e.target.value)}
    />
      <button  onClick={handleEditClick}>
              <VscEdit />
      </button>
      </>)
}
      <button  onClick={handleDeleteClick}>
        <VscTrash />
      </button>
    </Todo>
  );
};

export default TodoComponent;
