import React from 'react';
import styled from 'styled-components';
import Action from './Action';
import TitleBar from './TitleBar';
import { FlatList } from 'react-native';

const ActionList = () => {
    return (
        <StyledActionList>
            <TitleBar title="今日训练" />
            <FlatList
                data={[{}, {}, {}, {}, {}]}
                renderItem={() => <Action />}
            />
        </StyledActionList>
    );
}

const StyledActionList = styled.View`
    
`

export default ActionList;