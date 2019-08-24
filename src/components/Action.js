import React, { Component } from 'react';
import styled from 'styled-components';
import { Input, Caption, padding, colors, Ico } from './base';
import { Text } from 'react-native';

class Action extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledAction>
                <ActionCell>
                    <ActionNum>1</ActionNum>
                    <ActionContent>
                        <ActionTitle
                            defaultValue="深蹲"
                            placeholder="动作名称"/>
                        <ActionAmount>4组 * 12</ActionAmount>
                    </ActionContent>
                </ActionCell>
                <ActionRemove name="delete" />
            </StyledAction>
        );
    }
}

const StyledAction = styled.View`
    justify-content: center;
`;

const ActionCell = styled.TouchableOpacity`
    flex-direction: row;
    padding: 0 ${padding.lg}px;
    height: 64px;
    align-items: center;
    background-color: ${colors.background};
`;

const ActionRemove = styled(Ico)`
    z-index: -1;
    position: absolute;
    right: 25px;
    color: ${colors.thirdText};
`;

const ActionNum = styled(Caption)`
    width: 24px;
    height: 24px;
    text-align: center;
    margin-right: 10px;
    color: ${colors.thirdText};
`;

const ActionContent = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    border-bottom-color: ${colors.divider};
    border-bottom-width: 0.5px;
`;

const ActionTitle = styled(Input)`
    flex: 1;
    height: 64px;
`;

const ActionAmount = styled(Caption)`
    margin-left: 10px;
    line-height: 64px;
`;

export default Action;