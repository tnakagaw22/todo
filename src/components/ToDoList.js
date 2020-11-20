import React from "react";
import { List, Paper, Grid } from '@material-ui/core';

import ToDoItem from './ToDoItem';

const ToDoList = (props) => {

    return (
        <>
            {props.todos && props.todos.length > 0 && (
                <Paper style={{ margin: 16 }}>
                    <List style={{ overflow: 'scroll' }}>
                        {props.todos.map((todo, index) => (
                            <ToDoItem
                                key={index}
                                todo={todo}
                                divider={index !== props.todos.length - 1}
                                onDelete={() => props.removeTodo(index)}
                                onComplete={() => props.completeTodo(index)}
                            />
                        ))}
                    </List>
                </Paper>
                )
            }
        </>
    )
}

export default ToDoList;