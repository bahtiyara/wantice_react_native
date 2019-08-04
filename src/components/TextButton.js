import React from 'react';
import styled from 'styled-components';
import { P, padding } from './base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TextButton = () => {
    return (
        <StyledTextButton>
            <Icon name="add" size={24} color="white"/>
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