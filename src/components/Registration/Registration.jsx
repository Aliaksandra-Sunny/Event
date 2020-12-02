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
import { useFormik } from 'formik';
import * as yup from 'yup';

const white = '#ffffff';

const StyledTextField = styled(TextField)`
    && {
    color: ${white};
    }
    && .MuiOutlinedInput-notchedOutline {
        border-color: ${white};
    }
    &&:hover .MuiOutlinedInput-notchedOutline {
        border-color: ${white};
    }
    && .MuiOutlinedInput-input {
        color: ${white};
    }
    && .MuiInputLabel-outlined.MuiInputLabel-shrink {
        color: ${white};
    }
    && .MuiInputLabel-outlined {
        color: ${white};
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

const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Name is required'),
    surname: yup
        .string('Enter your surname')
        .required('Surname is required'),
    email: yup
        .string('Enter your surname')
        .required('Password is required')
        .email('Enter a valid email'),
    password: yup
        .string('Enter your password')
        .required('Password is required')
        .min(8, 'Min length are 8'),
    repeatPassword: yup
        .string('Enter your password')
        .required('Password is required')
        .min(8, 'Min length are 8'),
});

const Registration = props => {

    const formik = useFormik({
        initialValues: {
            name: 'Tolya',
            surname: 'Kravtsov',
            email: 'tolyanchik2012@gmail.com',
            password: 'qwerty12345',
            repeatPassword: 'qwerty12345',
        },
        validationSchema,
        onSubmit: values => {
            const { RegistrationMe } = props;
            RegistrationMe(values);
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
                        Registration
                    </Typography>
                    <Form
                        onSubmit={event => {
                            event.preventDefault();
                            formik.handleSubmit(event);
                        }}
                    >
                        <StyledTextField
                            helperText={formik.touched.name && formik.errors.name}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Имя"
                            name="name"
                            autoComplete="Имя"
                        />
                        <StyledTextField
                            helperText={formik.touched.surname && formik.errors.surname}
                            error={formik.touched.surname && Boolean(formik.errors.surname)}
                            value={formik.values.surname}
                            onChange={formik.handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="surname"
                            label="Фамилия"
                            name="surname"
                        />
                        <StyledTextField
                            helperText={formik.touched.email && formik.errors.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            id="email"
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
                            label="Пароль"
                            id="password"
                            autoComplete="current-password"
                            type="password"
                        />
                        <StyledTextField
                            helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
                            error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                            value={formik.values.repeatPassword}
                            onChange={formik.handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="repeatPassword"
                            label="Повторите пароль"
                            id="repeatPassword"
                            autoComplete="current-password"
                            type="password"
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
