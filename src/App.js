import './App.css';
import React, { useState } from 'react';
import Todolist from './Todolist';

function App() {


  const [listofnotes,setlistofnotes]=useState([]);


  function handleADD() {
    const newitem= document.getElementById('input').value;

    setlistofnotes([...listofnotes, newitem]);
  }
  return (
    <div className="App">
      <h1>To-Do-List</h1>
      <input id='input' placeholder='enter here'></input>
<button onClick={handleADD}>ADD</button>

    {console.log(listofnotes)}

      <Todolist list={listofnotes} listofnotes={listofnotes} setlistofnotes={setlistofnotes}  />
    </div>
  );

}

export default App;
