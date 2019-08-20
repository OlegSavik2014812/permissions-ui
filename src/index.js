import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/vendor/bootstrap/css/bootstrap.min.css';
import './styles/css/main.css';
import './styles/css/util.css';
import './styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './styles/fonts/iconic/css/material-design-iconic-font.min.css'
import './styles/vendor/animate/animate.css'
import './styles/vendor/css-hamburgers/hamburgers.min.css'
import './styles/vendor/animsition/css/animsition.min.css'
import './styles/vendor/select2/select2.min.css'
import './styles/vendor/daterangepicker/daterangepicker.css'
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