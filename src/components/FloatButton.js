import React from 'react';
import styled from 'styled-components';
import { Ico } from './base';

const FloatButton = ({iconName, iconColor, bgColor}) => {
    return (
        <StyledFloatButton>
            <Ico name={iconName} color="#fff" />
        </StyledFloatButton>
    );
}

const StyledFloatButton = styled.View`

`;

export default FloatButton;