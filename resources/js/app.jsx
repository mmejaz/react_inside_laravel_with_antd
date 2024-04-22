import "./bootstrap";
import "../css/app.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import { configureStore } from "@reduxjs/toolkit";
import {Provider} from 'react-redux'

const initialState={
    name:"Muhammad Ejaz",
    age:"36",
    status:"single"
}
const store = configureStore({
    reducer:(state)=>{
        return state
    },
    preloadedState:initialState
});
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Provider store={store}>
            <Home></Home>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);

