import {FETCH_WORKOUT, ADD_ACTION} from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_WORKOUT:
            return JSON.parse(action.payload);
        case ADD_ACTION:
            return JSON.parse(action.payload);
        default:
            return state;
    }
}