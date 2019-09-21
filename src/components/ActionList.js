import React, { Component } from 'react';
import styled from 'styled-components';
import Action from './Action';
import TitleBar from './TitleBar';
import { FlatList } from 'react-native';

class ActionList extends Component {
    constructor(props) {
        super(props);
        this._actionFlatList = React.createRef();
        this._action = {};
    }

    render() {
        const {data} = this.props;
        
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
                    ref={el => this._actionFlatList = el}
                    data={data.workout.action}
                    renderItem={({item}) => <Action
                        ref={action => this._action[item.pos] = action}
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
}

const StyledActionList = styled.View`
    
`

export default ActionList;