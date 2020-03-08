import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props){
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => { //the function is not going to be called until the button detects a click when the Note is rendered
                props.onDelete(props.id); //sends the id of the Note to the App.jsx when clicked 
            }}> <DeleteIcon/ > </button>
        </div>
    );
}

export default Note; 