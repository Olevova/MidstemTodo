import React from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import type {ITodo} from '../Model/Todo'
interface TodoFormProps {
  onsub: (todo: ITodo) => void; 
}

const TodoForm = ({ onsub }: TodoFormProps) => {
  const [todo, setTodo] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      todo: todo,
      completed: false,
    };
    onsub(newTodo); 
    setTodo(""); 
  };

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Enter todo here"
          name="todo"
          onChange={handleOnChange}
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
