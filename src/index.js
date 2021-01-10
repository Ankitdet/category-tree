import React from 'react';
import ReactDOM from 'react-dom';
import './extensions';
import './index.css';

ReactDOM.render(<Treeview />, document.getElementById('root'));

import { createMockData } from './utils';

let store = createStore(reducer, createMockData(5));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

window.addEventListener('keydown', function (ev) {
    if (window.navigator.platform.includes('Mac'))
        window.controlPressed = ev.altKey;
    else
        window.controlPressed = ev.ctrlKey;
});

window.addEventListener('keyup', function (ev) {
    if (window.navigator.platform.includes('Mac'))
        window.controlPressed = ev.altKey;
    else
        window.controlPressed = ev.ctrlKey;
});
 
