import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";

//using redux persist to store info of current user in local storage..application/localstorage/http://localhost:5173
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage, 
  version: 1, 
}


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,  // pass the persisted reducer directly
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // disable serializable check for redux-persist
    }),
});

export const persistor = persistStore(store);
