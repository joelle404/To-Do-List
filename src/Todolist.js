import React from 'react';
import Todoitem from "./Todoitem"; // Import Todoitem without curly braces
import './App.css';
function Todolist(props) {
  // Check if props.list is an array
  if (!Array.isArray(props.list)) {
    return <div>List is not an array</div>;
  }

  function handleDelete(index) {
    const newList = props.list.filter((_, i) => i !== index);
    props.setlistofnotes(newList);
  }

  return (
    <div className="Todolist">
      {props.list.map((item, index) => (
        <Todoitem key={index} para={item} onDelete={() => handleDelete(index)} />
      ))}
    </div>
  );
}

export default Todolist;
