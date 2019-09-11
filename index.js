import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import reducer from './src/reducers/index';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const Wantice = () => {
    return(
        <Provider store={createStoreWithMiddleware(reducer)}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Wantice);