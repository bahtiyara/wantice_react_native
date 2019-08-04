import React from 'react';
import styled from 'styled-components';
import { H1, padding } from '../styles/base';

const TitleBar = ({title}) => {
    return (
        <StyledTitleBar>
            <H1>{title}</H1>
        </StyledTitleBar>
    );
}

const StyledTitleBar = styled.View`
    padding: ${padding.lg}px ${padding.lg}px ${padding.sm}px ${padding.lg}px;
`

export default TitleBar;