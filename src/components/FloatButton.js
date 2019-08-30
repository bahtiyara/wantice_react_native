import React from 'react';
import styled from 'styled-components';
import { Ico, colors } from './base';

const FloatButton = ({iconName, iconColor, bgColor}) => {
    return (
        <StyledFloatButton>
            <StyledIcon 
                name={iconName}
                iconColor={iconColor}
                bgColor={bgColor}/>
        </StyledFloatButton>
    );
}

const StyledFloatButton = styled.View`
    background: ${props => props.bgColor ? props.iconColor : colors.primary};
    width: 85px;
    height: 85px;
    border-radius: 1000px;
    justify-content: center;
    align-items: center;
`;

const StyledIcon = styled(Ico)`
    color: ${props => props.iconColor ? props.iconColor : "#fff"};
    font-size: 48px;
    position: relative;
    left: -1px;
`;

export default FloatButton;