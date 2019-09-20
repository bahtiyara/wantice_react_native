import React, { Component } from 'react';
import styled from 'styled-components';
import { colors, padding } from '../components/base';
import { StatusBar } from 'react-native';
import Footer from '../components/Footer';
import ActionList from '../components/ActionList';
import TextButton from '../components/TextButton';
import FloatButton from '../components/FloatButton';
import { fetchWorkout } from '../actions/index';
import { connect } from 'react-redux';
var uuid = require('react-native-uuid');

class Workout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finishTime: new Date(),
        }
        this.onCreateActionPress = this.onCreateActionPress.bind(this);
    }

    componentDidMount() {
        this.props.fetchWorkout();
        setInterval(() => this.setFinishTime(), 1000);
    }

    render() {
        const {workout} = this.props;
        return (
            <StyledWorkout>
                <StatusBar barStyle="light-content"/>
                <StyledScrollView>
                    <ActionList data={workout} />
                    <StyledTextButton
                        iconName='add'
                        onPress={this.onCreateActionPress}
                    >添加动作</StyledTextButton>
                </StyledScrollView>
                <Footer desc={this.getDescription()}>
                    <FloatButton iconName="play-arrow"/>
                </Footer>
            </StyledWorkout>
        );
    }

    getDescription() {
        const {workout} = this.props;
        if (workout !== null) {
            if (workout.current.status == 0) {
                // When workout is not finish()
                return `预计${("0" + this.state.finishTime.getHours()).slice(-2)}:${("0" + this.state.finishTime.getMinutes()).slice(-2)}结束`;
            } else {
                // When workout is finish
                return this.getWorkoutDuration();
            }
        }
    }

    setFinishTime() {
        const {current} = this.props.workout;
        const {workout} = this.props.workout;
        const thisAction = workout.action[current.action - 1];
        let nextActionsLeft = 0;

        // thisActionLeft
        const thisSetLeft = (thisAction.rep - current.rep) * thisAction.repDuration + thisAction.setInterval;
        const nextSetsLeft = (thisAction.set - current.set) * this.getSetDuration(thisAction) - thisAction.setInterval;
        const thisActionLeft = thisSetLeft + nextSetsLeft;

        // nextActionsLeft
        if (current.action !== workout.action.length) {
            for (let i = current.action; i < workout.action.length; i++) {
                const action = workout.action[i];
                nextActionsLeft = nextActionsLeft + this.getActionDuration(action);
            }
        }
        
        const duration = thisActionLeft + nextActionsLeft;
        const currentTime = new Date();
        const finishTime = new Date(currentTime.setSeconds(currentTime.getSeconds() + duration));

        this.setState({finishTime});
    }

    getSetDuration(action) {
        return action.rep * action.repDuration + action.setInterval;
    }

    getActionDuration(action) {
        return this.getSetDuration(action) * action.set - action.setInterval + action.actionInterval;
    }

    getWorkoutDuration() {
        return "花时50分钟";
    }

    onCreateActionPress() {
        const {workout} = this.props;
        const newAction = {
            id: uuid.v1(),
            name: "",
            pos: workout.workout.action.length + 1,
            set: 3,
            rep: 12,
            repDuration: 3,
            setDuration: null,
            setInterval: 60,
            actionInterval: 120
        };
        console.log(newAction);
    }
}

function mapStateToProps({workout}) {
    return {workout};
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

export default connect(mapStateToProps, {fetchWorkout})(Workout);