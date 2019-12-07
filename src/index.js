import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/Businesscase.css';
import './assets/css/CreateBusinesscase.css';
import './assets/css/BusinesscaseImpactedemp.css';
import './assets/css/BusinesscaseSelectedemp.css';
import './assets/css/BusinesscaseEmployeeinfo.css';
import './assets/css/BusinesscasePlancode.css';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
