import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from '../store/actions';

const handleIncrement = (dispatch) => () => dispatch(increment());
const handleDecrement = (dispatch) => () => dispatch(decrement());

const Counter = ({ dispatch, counter }) => (
    <div className="counter">
        <button id="increment" onClick={handleIncrement(dispatch)}>+1</button>
        <button id="decrement" onClick={handleDecrement(dispatch)}>-1</button>
        <p id="counter">{counter}</p>
    </div>
);

Counter.propTypes = {
    counter: PropTypes.number,
    dispatch: PropTypes.func,
};

const mapStateToPropsCounter = (state) => {
    const props = { counter: state.counter };
    return props;
};

export const ConnectedCounter = connect(mapStateToPropsCounter)(Counter);
