import React from 'react';
import styled from 'styled-components';
import { Ico, colors } from './base';

const BlockButton = ({iconName, iconColor, bgColor, style}) => {
    return (
        <StyledBlockButton style={style}>
            <ButtonIcon 
                name={iconName}
                iconColor={iconColor}
                bgColor={bgColor}/>
        </StyledBlockButton>
    );
}

const StyledBlockButton = styled.View`
    background: ${props => props.bgColor ? props.iconColor : colors.primary};
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const ButtonIcon = styled(Ico)`
    color: ${props => props.iconColor ? props.iconColor : "#fff"};
    padding: 0 28px;
`;

export default BlockButton;