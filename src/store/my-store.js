import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import defaultReducer from "../reducers/defaultReducer";
import roleReducer from "../reducers/roleReducer";
import formLogin from "../reducers/formLogin";
import authReducer from "../reducers/authReducer";
import errorLoginReducer from "../reducers/errorLoginReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from 'redux-persist'
import { configureStore } from "@reduxjs/toolkit";

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}


const appReducer = combineReducers({
    defaultReducer,
    roleReducer,
    formLogin,
    authReducer,
    errorLoginReducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: []
}

const persistedReducer = persistReducer(persistConfig, appReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: middlewares
})

export const persistor = persistStore(store)