import { Paper, AppBar, Toolbar, Typography} from '@material-ui/core';
import TaskIcon from '@material-ui/icons/PlaylistAddCheck';

function Layout(props) {
    return (
        <Paper
            elevation={0}
            style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}
            >

            <AppBar color="primary" position="static" style={{ height: 64 }}>
                <Toolbar style={{ height: 64 }}>
                    <TaskIcon style={{ margin: 5, padding: 5 }} />
                    <Typography color="inherit">TO-DOリスト</Typography>
                </Toolbar>
            </AppBar>

            {props.children}

        </Paper>
    )
}

export default Layout