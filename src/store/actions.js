const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });
const add = (elem) => ({ type: 'ADD', payload: elem });
const changeInput = (value) => ({ type: 'CHANGE_INPUT', payload: value });

export {
    increment, decrement, add, changeInput,
};
