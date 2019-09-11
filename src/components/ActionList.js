import React from 'react';
import styled from 'styled-components';
import Action from './Action';
import TitleBar from './TitleBar';
import { FlatList } from 'react-native';

const ActionList = (props) => {
    const {data} = props;
    
    if (data == null) {
        return (
            <StyledActionList>
                <TitleBar title="加载中…" />
            </StyledActionList>
        );
    }
    return (
        <StyledActionList>
            <TitleBar title={data.workout.name} />
            <FlatList
                data={data.workout.action}
                renderItem={({item}) => <Action
                    pos={item.pos}
                    name={item.name}
                    set={item.set}
                    rep={item.rep}
                />}
                keyExtractor={item => item.id}
            />
        </StyledActionList>
    );
}

const StyledActionList = styled.View`
    
`

export default ActionList;