import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPanel from './views/ControlPanel';

import store from './Store.js';
import Provider from './Provider.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
