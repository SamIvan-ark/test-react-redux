const ACTION_INCREMENT = 'INCREMENT';
const ACTION_DECREMENT = 'DECREMENT';
const ACTION_ADD = 'ADD';
const ACTION_UPDATE_UNPUT = 'UPDATE_INPUT';

const increment = () => ({ type: ACTION_INCREMENT });
const decrement = () => ({ type: ACTION_DECREMENT });
const add = (elem) => ({ type: ACTION_ADD, payload: elem });
const changeInput = (value) => ({ type: ACTION_UPDATE_UNPUT, payload: value });

export const actions = {
    increment,
    decrement,
    add,
    changeInput,
};

export const actionNames = {
    ACTION_INCREMENT,
    ACTION_DECREMENT,
    ACTION_ADD,
    ACTION_UPDATE_UNPUT,
};
