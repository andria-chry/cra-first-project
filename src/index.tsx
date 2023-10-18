import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import tabReducer from './components/store/tabSlice';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {googleOAuthConfig} from "./oauthConfig";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = configureStore({
    reducer: {
        tabs: tabReducer,
    },
});

root.render(
    <GoogleOAuthProvider clientId={googleOAuthConfig.clientId}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </GoogleOAuthProvider>

);

reportWebVitals();
