import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
function App(){
    const [notes,setNotes]= useState([]);

    const addNote = (note) => {
        setNotes(preVal =>{
            return [...preVal,note];
        });
    }
    const deleteNote = (id) => {
        setNotes(preVal => {
            return preVal.filter((item,index)=>{
                return index !== id;
            });
        });
    }

    return(
        <div>
            <Header />
            <CreateArea onAdd= {addNote} />
            {
                notes.map((item,index)=>{
                    return(
                        <Note 
                            key = {index}
                            id = {index}
                            title = {item.title}
                            content = {item.content}
                            onDelete ={deleteNote}
                        />
                    );

                })
            }
            <Footer />
        </div>
    );
}

export default App ;