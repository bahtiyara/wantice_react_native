import React from 'react';
import styled from 'styled-components';
import { P, padding } from '../styles/base';
import Icon from './Icon';

const TextButton = () => {
    return (
        <StyledTextButton>
            <Icon></Icon>
            <ButtonText>TextButton</ButtonText>
        </StyledTextButton>
    );
}

const StyledTextButton = styled.View`
    padding: ${padding.md}px ${padding.lg}px;
`;

const ButtonText = styled(P)`
    
`;

export default TextButton;