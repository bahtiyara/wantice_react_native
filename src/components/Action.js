import React from 'react';
import styled from 'styled-components';
import { Input, Caption, padding, colors } from './base';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Action = () => {
    return (
        <Swipeable
            renderRightActions={RightOption}
            onSwipeableRightOpen={onSwipeFromRight}
            rightThreshold={100}
        >
            <StyledAction>
                <ActionNum>1</ActionNum>
                <ActionContent>
                    <ActionTitle
                        defaultValue="深蹲"
                        placeholder="动作名称"
                    />
                    <TouchableOpacity>
                        <ActionAmount>4组 * 12</ActionAmount>
                    </TouchableOpacity>
                </ActionContent>
            </StyledAction>
        </Swipeable>
    );
}

function onSwipeFromRight() {
    alert('You deleted');
}

const RightOption = (progress, dragX) => {
    const trans = dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [true, false],
        extrapolate: 'clamp',
    });

    dragX.addListener(({value}) => this._value = value);
    console.log(dragX._value);

    return (
        <ActionRemove>
            <AnimatedIcon
                style={removeIconStyle()}
                name="delete"
            />
        </ActionRemove>
    );
}



const removeIconStyle = function (canRemove) {
    return {
        fontSize: 24,
        marginRight: padding.lg - 5,
        color: canRemove ? 'rgba(247,43,53,1)' : 'rgba(255,255,255,0.3)',
    }
}

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

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