import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './Create.jsx';
import { BsFillCheckCircleFill, BsCircleFill, BsFillTrashFill } from 'react-icons/bs';

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = import.meta.env.VITE_API_URL;

function Home() {
  const [todos, setTodos] = useState([]);

  const handleRefresh = ()=>{
    axios.get(`${API_URL}/get`)
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    handleRefresh();
  }, []);

  const handleEdit = (id) => {
    axios.put(`${API_URL}/update/${id}`)
      .then(() => handleRefresh())
      .catch(err => console.log(err));
  }

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/delete/${id}`)
      .then(() => handleRefresh())
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Todo List</h2>
      <Create handleRefresh={handleRefresh} />
      <br />
      {todos.length === 0
        ? <div><h2>No Record</h2></div>
        : todos.map(todo => (
          <div className='task' key={todo._id}>
            <div className='checkbox' onClick={() => handleEdit(todo._id)}>
              {todo.done 
                ? <BsFillCheckCircleFill className='icon' />
                : <BsCircleFill className='icon' />
              }
              <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
            </div>
            <span>
              <BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} />
            </span>
          </div>
        ))
      }
    </div>
  )
}

export default Home;
