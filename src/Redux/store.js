import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./user/userSlice";
import empReducer from "./employer/EmpSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { alertSlice } from "./alertSlice";

const rootReducer = combineReducers({
  user: userReducer,
  emp:empReducer,
  alerts: alertSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer, 
});

const persistor = persistStore(store);

export { store, persistor };
