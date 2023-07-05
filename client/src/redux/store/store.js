// import {createStore, combineReducers, applyMiddleware} from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";

export default configureStore({
    reducer: {
        user: userReducer,
    }
});