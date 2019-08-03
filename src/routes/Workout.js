import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/base';
import { StatusBar } from 'react-native';
import Footer from '../components/Footer';
import ActionList from '../components/ActionList';

const Workout = () => {
    return (
        <StyledWorkout>
            <StatusBar barStyle="light-content"/>
            <ActionList />
            <Footer />
        </StyledWorkout>
    );
}

const StyledWorkout = styled.View`
    background-color: ${colors.background};
    width: 100%;
    height: 100%;
`

export default Workout;