import React, { useState, useCallback, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import db from './config';
import firebase from "firebase";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
useEffect(()=>{
db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>
    setTasks(snapshot.docs.map(doc => (
       { id: doc.id, title : doc.data().title , status : doc.data().status })))
    )} ,[]);
console.log("tasks", tasks)
    const addTask = (event) => {
        event.preventDefault();
        db.collection('todos').add({
            title: input,
            status: false,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
    }
    return (
        <div>
            <FormControl>
                <InputLabel htmlFor="my-input">Add Task</InputLabel>
                <Input value={input} onChange={(event) => setInput(event.target.value)} />
                <Button disabled={!input} type="submit" variant="contained" color="primary" type="submit" onClick={addTask} >
                    Add Task
        </Button>
            </FormControl>

            <ul>
                {tasks.map(task => (
                    <Todo task={task} />
                ))}
            </ul>
        </div>
    );
};



export default App;