"use client"; // Ensures this runs only on the client

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return (
    <Provider store={store}>
      {persistor ? (
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      ) : (children)}
    </Provider>
  );
};

export default ReduxProvider;
