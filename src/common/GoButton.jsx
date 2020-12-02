import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const GoButton = styled(Button)`
    & .MuiButton-label {
        color: white;  
        font-weight: 400;
        text-transform: none;
    }
`;

const OutlinedWrapper = styled.div`
    & .MuiButton-outlined {
        border: 2px solid #098b6c;
    }
`;

export default props => {

    const { text, handler } = props;

    return (
        <OutlinedWrapper>
            <GoButton variant="outlined" onClick={handler}>{text}</GoButton>
        </OutlinedWrapper>
    );
};
