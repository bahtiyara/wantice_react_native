import React, { Component } from 'react';
import styled from 'styled-components';
import { Input, Caption, padding, colors } from './base';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native';

class Action extends Component {
    constructor(props) {
        super(props);
        this.onSwipe = this.onSwipe.bind(this);
    }

    render() {
        return (
            <Swipeable
                ref={component => this._swipeable = component}
                renderRightActions={this.renderOption}
                renderLeftActions={this.renderOption}
                onSwipeableRightOpen={this.onSwipe}
                onSwipeableLeftOpen={this.onSwipe}
                rightThreshold={100}
                leftThreshold={100}
            >
                <StyledAction>
                    <ActionNum>1</ActionNum>
                    <ActionContent>
                        <ActionTitle
                            defaultValue="深蹲"
                            placeholder="动作名称"
                            placeholderTextColor={colors.thirdText}
                        />
                        <TouchableOpacity>
                            <ActionAmount>4组 * 12</ActionAmount>
                        </TouchableOpacity>
                    </ActionContent>
                </StyledAction>
            </Swipeable>
        );
    }

    onSwipe() {
        alert('Removed!');
    }

    renderOption = () => <ActionRemove />;
}

const StyledAction = styled.View`
    background-color: ${colors.background};
    flex-direction: row;
    padding: 0 ${padding.lg}px;
    height: 64px;
    align-items: center;
`;

const ActionRemove = styled.View`
    justify-content: center;
    flex: 1;
    align-items: flex-end;
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