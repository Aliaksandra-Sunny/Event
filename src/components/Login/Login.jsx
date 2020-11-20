import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ThemeProvider} from "@material-ui/styles";
import styled from 'styled-components';
import {authMe} from "../../redux/authReducer";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignIn(props) {

    const theme = createMuiTheme({
        palette: {
            primary: {
                light: '#fff',
                main: '#ffffff',
                dark: '#1d53ff',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#098B6C',
                dark: '#50ba50',
                contrastText: '#000',
            },
        },
    });

    const StyledTextField = styled(TextField)`
    && .MuiOutlinedInput-notchedOutline{
    border-color: white;
    }
    && .MuiOutlinedInput-input{
    color: white;
    }
    && .MuiInputLabel-outlined.MuiInputLabel-shrink{
    color: white;
    }
    && .MuiInputLabel-outlined{
    color: white;
    }
    `;

    const Styles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
            color: 'white',
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        text: {
            color: 'white',
        }
    }));

    const classes = Styles();
    let handleSubmit = (event) => {
        props.authMe(event.currentTarget[0].value,event.currentTarget[2].value);
        console.log(event.currentTarget[0].value);
        console.log(event.currentTarget[2].value);
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h2" variant="h5" color={"primary"}>
                        Sign in
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit} noValidate>
                        <StyledTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <StyledTextField className={classes.text}
                                         variant="outlined"
                                         margin="normal"
                                         required
                                         fullWidth
                                         name="password"
                                         label="Password"
                                         type="password"
                                         id="password"
                                         autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                {/*<Box mt={8}>*/}
                {/*    <Copyright />*/}
                {/*</Box>*/}
            </Container>
        </ThemeProvider>
    );
}
