import React from 'react';

function Todoitem(props) {

    function handleDelete() {
        // Call the onDelete function passed from Todolist with the current item index
        props.onDelete(props.index);
    }

    return (
        <div className="Todoitem">
            <p>{props.para}</p>
            <button onClick={handleDelete}>delete</button>
        </div>
    );
}

export default Todoitem;
