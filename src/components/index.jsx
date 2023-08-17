import React from 'react';
import PropTypes from 'prop-types';

export const App = (props) => (
    <div className="container">
        {props.children}
    </div>

);

App.propTypes = {
    children: PropTypes.array,
};
