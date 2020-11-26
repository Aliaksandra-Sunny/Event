import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as yup from 'yup';

const StyledTextField = styled(TextField)`
    && {
    color: white;
    }
    && .MuiOutlinedInput-notchedOutline {
        border-color: white;
    }
    && .MuiOutlinedInput-input {
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
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
   `;

const StyledForm = styled.form`
    width: 100%;
    margin-top: 8px;
    color: white;
   `;

const StyledButton = styled(Button)`
    && {
        margin: 24px 0 16px;    
    }
   `;

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const SignIn = props => {

    const formik = useFormik({
        initialValues: {
            email: 'vasyher@gmail.com',
            password: 'qwerty12345',
        },
        validationSchema,
        onSubmit: values => {
            const { authMe } = props;
            authMe(values);
        },
    });

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

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Paper>
                    <Typography component="h2" variant="h5" color="primary">
                        Sign in
                    </Typography>
                    <StyledForm
                        onSubmit={event => {
                            event.preventDefault();
                            formik.handleSubmit(event);
                        }}
                    >
                        <StyledTextField
                            helperText={formik.touched.email && formik.errors.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            value={formik.values.email}
                            onChange={formik.handleChange}
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
                        <StyledTextField
                            helperText={formik.touched.password && formik.errors.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            value={formik.values.password}
                            onChange={formik.handleChange}
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
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <StyledButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                        >
                            Sign In
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
                    </StyledForm>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};
export default SignIn;
