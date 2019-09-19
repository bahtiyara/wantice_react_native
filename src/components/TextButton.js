import React from 'react';
import styled from 'styled-components';
import { P, padding, Ico, colors } from './base';

const TextButton = ({iconName, children, style, onPress}) => {
    return (
        <StyledTextButton onPress={onPress} style={style}>
            <ButtonIcon name={iconName}/>
            <ButtonText>{children}</ButtonText>
        </StyledTextButton>
    );
}

const StyledTextButton = styled.TouchableOpacity`
    /* padding: ${padding.md}px ${padding.lg}px; */
    flex-direction: row;
`;

const ButtonIcon = styled(Ico)`
    margin-right: ${props => props.name ? 10 : 0}px;
`;

const ButtonText = styled(P)`
    color: ${colors.primary};
`;

export default TextButton;