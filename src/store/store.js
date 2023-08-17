import { createStore } from 'redux';

/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }] */
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;

const counter = (state, action) => {
    switch (action.type) {
    case 'INCREMENT': {
        return state + 1;
    }
    case 'DECREMENT': {
        return state - 1;
    }
    default:
        return state;
    }
};

const list = (state, action) => {
    switch (action.type) {
    case 'ADD': {
        return [...state, action.payload];
    }
    default:
        return state;
    }
};

const input = (state, action) => {
    switch (action.type) {
    case 'CHANGE_INPUT': {
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
