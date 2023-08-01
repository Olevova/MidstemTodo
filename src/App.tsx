import './App.css';
import {Container, Panel} from './components/styles/main.styled'
import TodoForm from './components/Form/TodoForm';
import TodoComponent from './components/TodoComponent/TodoComponent';
import useSWR from "swr";

import {getTodos, addTodo, upDate , deleteTodo, endPoint as cacheKey} from "./components/helper/apiTodo";
import type {ITodo} from './components/Model/Todo'

function App() {
  const { error, data, mutate} = useSWR<ITodo[]>(cacheKey,getTodos);
  console.log(data);

const onsub = async (todo: ITodo) => {
    console.log(todo, 'todo');
    try {
     await addTodo(todo)
     mutate()
    } catch (error) {
      console.log("Failed to add todo:", error);
    }
  };


  const onRefresh = async (todo: ITodo) => {
    try {
      await upDate(todo);
      mutate()
    } catch (error) {
      console.log("Failed to refresh todo:", error);
    }
  };

  const onDelete = async (id:number) => {
    try {
      console.log(id, 'delete');
      await deleteTodo(id);
      mutate()
      console.log('end');
      
    } catch (error) {
      console.log("Failed to delete todo:", error);
    }
  };

  const onDid = async (todo: ITodo) => {
    try {
      await upDate(todo);
      mutate()
    } catch (error) {
      console.log("Failed to refresh todo:", error);
    }
  }


  return <div className="App">
      <Container>
        <Panel>
      <p>Completed: <span>{data?.reduce((count,todo)=>count + (todo.completed ? 1 : 0), 0)}</span></p>
      <p>Not Completed: <span>{data?.reduce((count,todo)=>count + (todo.completed ? 0 : 1), 0)}</span></p>
      </Panel>
      <TodoForm onsub={onsub} />
      {data ? (
        data.map((todo) => <TodoComponent key={todo.id} toDo={todo} onRefresh={onRefresh} onDelete={onDelete} onDid={onDid}/>)
      ) : (
        <p>Loading...</p>
      )}
      </Container>
    </div>
    

}

export default App;


// data.map((todo) => (
//   <TodoComponent key={todo.id} toDo={todo} onRefresh={onRefresh} onDelete={onDelete} />
// ))
// )