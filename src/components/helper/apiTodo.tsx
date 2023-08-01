import axios from "axios";
import type {ITodo} from '../Model/Todo';
const todosApi = axios.create({baseURL: "http://localhost:3500",transformResponse: (data) => JSON.parse(data),})

export const endPoint = '/todos'

interface Todo {
  id: number;
  todo: string;
}


const delay = () => new Promise(res => setTimeout(() => res, 200));

export async function getTodos(): Promise<ITodo[]> {
  delay();
  const response = await todosApi.get(endPoint)
  console.log(response);
  
  return response.data;
}

export async function addTodo(todo: Todo): Promise<Todo[]> {
  const response = await todosApi.post(endPoint, todo)
  return response.data;
}

export async function upDate(todo: Todo): Promise<Todo[]> {
  // await delay()
  console.log(todo, 'new');
  
  const response = await todosApi.patch(`${endPoint}/${todo.id}`, todo)
  return response.data
}

export async function deleteTodo (id:number) : Promise<void> {
  try {
  
  const response = await todosApi.delete(`${endPoint}/${id}`)
  
  
  } catch (error) {
    console.log(error, 'Error');
    
  }
}
