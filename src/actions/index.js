import AsyncStorage from '@react-native-community/async-storage';

export const FETCH_WORKOUT = "FETCH_WORKOUT";
export const ADD_ACTION = "ADD_ACTION";

const defaultData = {
    current: {
        // 0 is todo, 1 is done
        status: 0,
        action: 1,
        set: 1,
        rep: 1,
    },
    workout: {
        name: "今日训练",
        action: [
            {
                id: "a1",
                name: "深蹲",
                pos: 1,
                set: 5,
                rep: 20,
                repDuration: 4,
                setDuration: null,
                setInterval: 60,
                actionInterval: 120
            },
            {
                id: "a2",
                name: "卧推",
                pos: 2,
                set: 4,
                rep: 12,
                repDuration: 3,
                setDuration: null,
                setInterval: 60,
                actionInterval: 120
            }
        ]
    }
}

export function fetchWorkout() {
    try {
        const workout = AsyncStorage.getItem('data');
        if(workout == null) {
            AsyncStorage.setItem('data', JSON.stringify(defaultData));
        } else {
            return {
                type: FETCH_WORKOUT,
                payload: workout
            }
        }
    } catch(e) {
        console.log(e);
    }
}

export function addAction(workoutData) {
    const request = AsyncStorage.setItem('data', JSON.stringify(workoutData))
    .then(() => AsyncStorage.getItem('data'));

    return {
        type: ADD_ACTION,
        payload: request
    }
}