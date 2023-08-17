import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedList as List } from './components/List';
import { ConnectedCounter as Counter } from './components/Counter';
import { App } from './components/index';
import { store } from './store/store';

const root = document.querySelector('.root');

ReactDOM.render(
    <Provider store={store}>
        <App>
            <Counter />
            <List />
        </App>
    </Provider>,
    root,
);
