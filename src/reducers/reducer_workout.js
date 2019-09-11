import {FETCH_WORKOUT} from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_WORKOUT:
            return JSON.parse(action.payload);
        default:
            return state;
    }
}