import {combineReducers} from 'redux';

import WorkoutReducer from './reducer_workout';

export default combineReducers({
    workout: WorkoutReducer
});