import React from 'react';
import styled from 'styled-components';
import { P } from '../styles/base';

const TitleBar = ({title}) => {
    return (
        <StyledTitleBar>
            <P>{title}</P>
        </StyledTitleBar>
    );
}

const StyledTitleBar = styled.View`
    
`

export default TitleBar;