import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const ReturnButton = styled(Button)`
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

export default () => {

    let history = useHistory();

    return (
        <OutlinedWrapper>
            <ReturnButton
                variant="outlined"
                onClick={() => {
                    history.goBack();
                }}
            >
                Назад
            </ReturnButton>
        </OutlinedWrapper>
    );
};
