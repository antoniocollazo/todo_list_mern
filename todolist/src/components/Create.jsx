import React, { useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

function Create({handleRefresh}) {
  const [task, setTask] = useState('');
  
  const handleAdd = async () => {
    try{
      await axios.post(`${API_URL}/add`, { task });
      setTask('');
      handleRefresh();
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='create_form'>
      <input type="text" value={task} placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
      <button type="button" onClick={handleAdd}>Create</button>
    </div>
  )
}

export default Create;
