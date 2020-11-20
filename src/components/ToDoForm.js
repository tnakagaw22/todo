import React from "react";
import { TextField, Paper, Button, Grid } from '@material-ui/core';

const ToDoForm = (props) => {
    const [todo, setTodo] = React.useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        props.addTodo(todo);
        setTodo('');
    }

    return (
        <>
            <Paper style={{ margin: 16, padding: 16 }}>
                <form onSubmit={handleAddTodo}>
                    <Grid container>
                        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                            <TextField
                                placeholder="今日やること"
                                value={todo}
                                onChange={e => setTodo(e.target.value)}
                                fullWidth
                                autoFocus
                            />
                        </Grid>
                        <Grid xs={2} md={1} item>
                            <Button
                                fullWidth
                                color="secondary"
                                variant="outlined"
                                onClick={handleAddTodo}
                            >
                                追加
                        </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </>
    )
}

export default ToDoForm;