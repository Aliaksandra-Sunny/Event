import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

export default props => {

    const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const { severity, text } = props;
    return (
        <Wrapper>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert severity={severity}>
                    {text}
                </Alert>
            </Snackbar>
        </Wrapper>

    );

};
