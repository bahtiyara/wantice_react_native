import React from 'react';
import styled from 'styled-components';
import { colors, padding } from '../components/base';
import { StatusBar, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import ActionList from '../components/ActionList';
import TextButton from '../components/TextButton';
import FloatButton from '../components/FloatButton';

const Workout = () => {
    return (
        <StyledWorkout>
            <StatusBar barStyle="light-content"/>
            <StyledScrollView>
                <ActionList />
                <StyledTextButton iconName='add'>添加动作</StyledTextButton>
            </StyledScrollView>
            <Footer desc="预计 19:10 结束">
                <FloatButton iconName="play-arrow"/>
            </Footer>
        </StyledWorkout>
    );
}

const StyledWorkout = styled.View`
    background-color: ${colors.background};
    width: 100%;
    height: 100%;
    justify-content: space-between;
`;

const StyledScrollView = styled.ScrollView`
    
`;

const StyledTextButton = styled(TextButton)`
    padding: ${padding.md}px ${padding.lg}px;
`;

export default Workout;