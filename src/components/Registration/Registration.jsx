import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledTextField = styled(TextField)`
    && {
    color: white;
    }
    && .MuiOutlinedInput-notchedOutline {
        border-color: white;
    }
    && .MuiOutlinedInput-input {
        border-radius: 10px;
        color: white;
    }
    && .MuiInputLabel-outlined.MuiInputLabel-shrink {
        color: white;
    }
    && .MuiInputLabel-outlined {
        color: white;
    }
   `;

const Paper = styled.div`
    margin: 40px 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
   `;

const Form = styled.form`
    width: 100%;
    margin-top: 8px;
    color: white;
   `;

const StyledButton = styled(Button)`
    && {
        margin: 24px 0 16px;    
    }
   `;

const Registration = props => {
    const history = useHistory();

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

    let handleRegistrationRequest = event => {
        props.authMe(event.currentTarget[0].value, event.currentTarget[2].value);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper>
                    <Typography component="h2" variant="h5" color="primary">
                        Registration
                    </Typography>
                    <Form onSubmit={handleRegistrationRequest} noValidate>
                        <StyledTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Имя"
                            name="name"
                            autoComplete="Имя"
                            autoFocus
                        />
                        <StyledTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Surname"
                            label="Фамилия"
                            id="Surname"
                            autoComplete="surname"
                        />
                        <StyledTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            id="email"
                            autoComplete="email"
                        />
                        <StyledTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            id="password"
                            autoComplete="password"
                        />
                        <StyledTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="repeatPassword"
                            label="Повторите пароль"
                            id="repeatPassword"
                            autoComplete="repeatPassword"
                        />
                        <StyledButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                        >
                            Registration
                        </StyledButton>
                        <Grid container>
                            <Grid item xs>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <Link href="#" variant="body2">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Form>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};
export default Registration;
