import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { add, changeInput } from '../store/actions';

const handleListAdd = (dispatch) => (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('item-name');

    dispatch(add(name));
    dispatch(changeInput(''));

    event.target.reset();
};

const handleInputChange = (dispatch) => (event) => {
    const { value } = event.target;
    dispatch(changeInput(value));
};

const List = ({ dispatch, inputValue, list }) => (
    <div className="list">
        <form id="list-form" onSubmit={handleListAdd(dispatch)}>
            <input
                name="item-name"
                id="list-input"
                type="text"
                placeholder="Новый элемент списка"
                value={inputValue}
                onChange={handleInputChange(dispatch)}
            />
            <input id="list-submit" type="submit" value="Добавить"/>
        </form>
        <p>Список</p>
        <ul id="list">
            {list.map((el) => <li key={el}>{el}</li>)}
        </ul>
    </div>
);

List.propTypes = {
    list: PropTypes.array,
    inputValue: PropTypes.string,
    dispatch: PropTypes.func,
};

const mapStateToPropsList = (state) => {
    const props = {
        list: state.list,
        inputValue: state.ui.input,
    };
    return props;
};

export const ConnectedList = connect(mapStateToPropsList)(List);
