import React, { useState } from 'react'; 
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [isClicked, setIsClicked] = useState(false); //state for expanding noteArea on click
    const [newNote, setNewNote] = useState({ //state to hold the input of the new note
        title: "", 
        content: "", 
    });

    function handleChange(event){
        const {value, name} = event.target; //destructuring the event.target.name/event.target.value into separate objects
        setNewNote(prevValue => { //prevValue stores the old state 
            if (name === "title"){
                return {
                    title: value,
                    content: prevValue.content,
                }; 
            }else {
                return {
                    title: prevValue.title,
                    content: value,
                };
            }
        })
    }

    function handleIsClicked(){
        setIsClicked(true); 
    }

    function submitNote(event){
        props.onAdd(newNote); //passing the newNote-object to the App.jsx-component via props 
        setNewNote({ //clears the input-fields when submitting 
            title: "", 
            content: "",
        })
        setIsClicked(false); 
        event.preventDefault(); //prevents the reloading of the page when the button is clicked 
    }
    return (
      <div>
        <form className="create-note">
          {isClicked?<input name="title" placeholder="Title" value={newNote.title} onChange={handleChange}/>: null} 
          <textarea name="content" placeholder="Take a note..." rows={isClicked?3:1} value={newNote.content} onChange={handleChange} onClick={handleIsClicked}/>
          {isClicked?<Zoom in={true}><Fab onClick={submitNote}> <AddIcon /> </Fab></Zoom>:null}
        </form>
      </div>
    );
  }
  
  export default CreateArea;