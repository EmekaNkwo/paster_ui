import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slices/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { uploadApi } from "./apis/uploadApi";


const rootReducer = combineReducers({
    authData: authSlice,
    [uploadApi.reducerPath]: uploadApi.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["authData"], // Whitelist the reducers you want to persist
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([

            uploadApi.middleware

        ]),
});
const persistor = persistStore(store);
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { persistor, store };
