import React from 'react';
import styled from 'styled-components';
import Action from './Action';
import TitleBar from './TitleBar';

const ActionList = () => {
    return (
        <StyledActionList>
            <TitleBar title="今日训练" />
            <Action />
            <Action />
            <Action />
            <Action />
            <Action />
        </StyledActionList>
    );
}

const StyledActionList = styled.View`
    
`

export default ActionList;