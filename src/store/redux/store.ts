import { configureStore, Store } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { api } from "../api";
import rootReducer, { RootStatePersist } from "./rootReducer";

interface PersistConfig {
  key: string;
  storage: typeof storage;
  whitelist?: string[];
  blacklist?: string[];
}

const persistConfig: PersistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(api.middleware),
  });

export const store: Store<RootStatePersist> = makeStore();

export const persistor =
  typeof window !== "undefined" ? persistStore(store) : null;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
