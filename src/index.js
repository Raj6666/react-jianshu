import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { GlobalIconFont } from './statics/iconfont/iconfont';
import App from './App';

ReactDOM.render(
    <React.Fragment>
        <GlobalStyle/>
        <GlobalIconFont/>
        <App />
    </React.Fragment>
    , document.getElementById('root'));
