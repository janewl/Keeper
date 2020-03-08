import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import CreateArea from './createArea.jsx';

function App(){
    const [notes, setNotes] = useState([]); 

    function addNote(newNote){ //getting newNote from the onAdd-prop in the CreateArea-component
        setNotes(prevValue => {
            return [...prevValue, newNote]; //...prevValue: '...' is a spread operator which means it adds all the values of the previous objects
        })
    }
    
    function deleteNote(id) {
        setNotes(prevValue => { //updates our list of notes
            return prevValue.filter((note, index) => {//the filter-method expects a function 
                return index !== id; //returns an array with notes which index is not the same as the id passed in 
            });
        });
    }
    

    return(
        <div>
      <Header />
      <CreateArea onAdd={addNote}/>
        {notes.map((noteItem, index) => ( 
            <Note 
                key={index}
                id={index}
                title={noteItem.title} 
                content={noteItem.content}
                onDelete={deleteNote} //Adds a onChecked prop to the Note to detect when the delete-button is clicked in a particular note
            />))}
      
      <Footer />
    </div>
    );
}

export default App; 