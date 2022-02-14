import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';
import App from './modules/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";

console.log("new tests")

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
