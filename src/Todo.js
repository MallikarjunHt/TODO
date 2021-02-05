import React, {useState} from 'react'
import { List,Button, ListItem, InboxIcon, ListItemText,
     Checkbox,TextField, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import db from './config';
import EditIcon from '@material-ui/icons/Edit';
import firebase from "firebase";

function Todo(props) {
      const [edit, setEdit] = useState(false);
      const [task, setTask] = useState(props.task);
      const stateChange = (event) =>{
          db.collection('todos').doc(props.task.id).update({title : task.title});
          setEdit(false);
      }
            // title: event.value,
            // status: false,
            // timestamp: firebase.firestore.FieldValue.serverTimestamp()}));      
    return (
        <div>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <Checkbox checked={props.task.status} onClick={event => {db.collection('todos').doc(props.task.id).update({status : !props.task.status})}}/>
                    {!edit ? (
        <TextField id="standard-basic" value={props.task.title} disabled />
      ) : (<>
        <TextField id="standard-basic" value={task.title} onChange={event => setTask({title: event.target.value, id: props.task.id, status: props.task.status})}/>
        <Button  type="submit" 
        variant="contained" color="primary" 
        type="submit" onClick={event =>stateChange(event)} >
                    Submit
        </Button>
        </>
      )}
                </ListItem>
                        {edit ?'': <Button onClick={(event) => setEdit(!edit)}>
                            Edit
                        </Button>}
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                        <Button onClick={event => {db.collection('todos').doc(props.task.id).delete()}}>
                            <DeleteIcon />
                        </Button>
                    </IconButton>
                </ListItemSecondaryAction>
            </List>
        </div>
    )
}

export default Todo;
