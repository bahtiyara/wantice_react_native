import React from 'react';
import styled from 'styled-components';
import { colors } from '../components/base';
import { StatusBar } from 'react-native';
import Footer from '../components/Footer';
import ActionList from '../components/ActionList';
import TextButton from '../components/TextButton';

const Workout = () => {
    return (
        <StyledWorkout>
            <StatusBar barStyle="light-content"/>
            <ActionList />
            <TextButton style={styles.buttonStyle} iconName='add'>添加动作</TextButton>
            <Footer />
        </StyledWorkout>
    );
}

const styles = {
    buttonStyle: {
        margin: 10
    }
}

const StyledWorkout = styled.ScrollView`
    background-color: ${colors.background};
    width: 100%;
    height: 100%;
`

const AddActionButton = styled(TextButton)`
    color: white;
`

export default Workout;