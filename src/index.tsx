import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './Page';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import './style/lib/animate.css';
import './style/antd/index.less';
import 'src/App.css';
// import { Provider, connect } from 'react-redux';

ReactDOM.render(<Page />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
