import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const OutLinedButton = styled(Button)`
    & .MuiButton-label {
        color: white;  
        font-weight: 400; 
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
            <OutLinedButton variant="outlined" onClick={handler}>{text}</OutLinedButton>
        </OutlinedWrapper>
    );
};
