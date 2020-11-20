import React from "react";
import { List, ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';


const ToDoItem = (props) => {
    return (
        <>
            <ListItem divider={props.divider}>
                <Checkbox
                    onClick={props.onComplete}
                    checked={props.todo.isCompleted}
                    disableRipple
                />
                <ListItemText
                    primary={props.todo.todoName}
                    style={{textDecoration : props.todo.isCompleted ? 'line-through' : 'none'}}
                    />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo" onClick={props.onDelete}>
                        <Delete />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
    )
}

export default ToDoItem;