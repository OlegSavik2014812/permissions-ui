import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './newpa/vendor/bootstrap/css/bootstrap.min.css';
import './newpa/css/main.css';
import './newpa/css/util.css';
import './newpa/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './newpa/fonts/iconic/css/material-design-iconic-font.min.css'
import './newpa/vendor/animate/animate.css'
import './newpa/vendor/css-hamburgers/hamburgers.min.css'
import './newpa/vendor/animsition/css/animsition.min.css'
import './newpa/vendor/select2/select2.min.css'
import './newpa/vendor/daterangepicker/daterangepicker.css'
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();