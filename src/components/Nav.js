import { AppBar, Toolbar, Typography, Grid, Link } from '@material-ui/core';
import TaskIcon from '@material-ui/icons/PlaylistAddCheck';

import useLocalStorage from "../hooks/useLocalStorage"
import SignOut from './SignOut';

const Nav = (props) => {
    const [userAccessToken, setUserAccessToken] = useLocalStorage('userAccessToken', null);

    return (

        <AppBar color="primary" position="static" style={{ height: 64 }}>
            <Toolbar style={{ height: 64 }}>
                <Grid
                    justify="space-between"
                    container
                    spacing={10}
                >
                    <Grid item>
                        <Typography variant="h4" color="inherit">
                            <Link href="/" color="inherit">TO-DOリスト</Link>
                        </Typography>

                    </Grid>

                    <Grid item>
                        <div>
                            {userAccessToken
                                ?
                                <>
                                    <div>ようこそ 
                                        {userAccessToken.username && userAccessToken.username + 'さん'}!</div>
                                    <SignOut />
                                </>
                                : <>
                                    <Link href="/sign-in" color="inherit">ログイン</Link>
                                    /
                                    <Link href="/sign-up" color="inherit">登録</Link>
                                </>
                            }
                        </div>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

    )
}

export default Nav