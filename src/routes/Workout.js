import React from 'react';
import styled from 'styled-components';
import { colors, padding } from '../components/base';
import { StatusBar } from 'react-native';
import Footer from '../components/Footer';
import ActionList from '../components/ActionList';
import TextButton from '../components/TextButton';
import FloatButton from '../components/FloatButton';

const Workout = () => {
    return (
        <StyledWorkout>
            <StatusBar barStyle="light-content"/>
            <ActionList />
            <StyledTextButton iconName='add'>添加动作</StyledTextButton>
            <Footer desc="预计花时 45分钟">
                <FloatButton iconName="play-arrow" iconColor="#fff"/>
            </Footer>
        </StyledWorkout>
    );
}

const StyledTextButton = styled(TextButton)`
    padding: ${padding.md}px ${padding.lg}px;
`;

const StyledWorkout = styled.ScrollView`
    background-color: ${colors.background};
    width: 100%;
    height: 100%;
`;

export default Workout;