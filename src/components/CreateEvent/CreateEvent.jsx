import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
        border: 2px solid #098b6c;
        margin: 24px 0 16px;    
    }
   `;

const Title = styled(Typography)`
    && {
        margin-bottom: 25px;
    }
   `;

const validationSchema = yup.object({
    title: yup
        .string('Введите название мероприятия')
        .required('Event name is required'),
    category: yup
        .string('Введите категорию мероприятия')
        .required('Category is required'),
    description: yup
        .string('Введите описание мероприятия')
        .min(20, 'Description should be of minimum 20 characters length')
        .required('Description is required'),
});

const CreateEvent = props => {

    const formik = useFormik({
        initialValues: {
            title: '',
            category: '',
            description: '',
        },
        validationSchema,
        onSubmit: data => {
            const { createEvent } = props;
            createEvent(data);
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
                    <Title component="h2" variant="h5" color="primary">
                        Новое мероприятие
                    </Title>
                    <Typography component="h6" variant="body2" color="primary">
                        {/* eslint-disable-next-line max-len */}
                        Заполните необходимые поля ниже наиболее подробно, это даст полную информацию о предстоящем событии.
                    </Typography>
                    <StyledForm
                        onSubmit={event => {
                            event.preventDefault();
                            formik.handleSubmit(event);
                        }}
                    >
                        <StyledTextField
                            helperText={formik.touched.title && formik.errors.title}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Event Name"
                            name="title"
                            autoFocus
                        />
                        <StyledTextField
                            helperText={formik.touched.category && formik.errors.category}
                            error={formik.touched.category && Boolean(formik.errors.category)}
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="category"
                            label="Category"
                            name="category"
                            autoFocus
                        />
                        <StyledTextField
                            helperText={formik.touched.description && formik.errors.description}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="description"
                            label="Description"
                            id="description"
                        />
                        <StyledButton
                            type="submit"
                            fullWidth
                            variant="outlined"
                            color="secondary"
                        >
                            Create
                        </StyledButton>
                    </StyledForm>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};
export default CreateEvent;
