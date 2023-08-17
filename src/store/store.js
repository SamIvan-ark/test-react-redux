import { createStore } from 'redux';
import { actionNames } from './actions';

/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }] */
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;

const counter = (state, action) => {
    switch (action.type) {
    case actionNames.ACTION_INCREMENT: {
        return state + 1;
    }
    case actionNames.ACTION_DECREMENT: {
        return state - 1;
    }
    default:
        return state;
    }
};

const list = (state, action) => {
    switch (action.type) {
    case actionNames.ACTION_ADD: {
        return [...state, action.payload];
    }
    default:
        return state;
    }
};

const input = (state, action) => {
    switch (action.type) {
    case actionNames.ACTION_UPDATE_UNPUT: {
        return action.payload;
    }
    default:
        return state;
    }
};

const rootReducer = (state, action) => ({
    counter: counter(state.counter, action),
    list: list(state.list, action),
    ui: {
        input: input(state.ui.input, action),
    },
});

export const store = createStore(
    rootReducer,
    {
        counter: 0,
        list: [],
        ui: { input: '' },
    },
    reduxDevtools && reduxDevtools(),
);
