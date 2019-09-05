// react
import React from "react";
import ReactDOM from "react-dom";
import PlayerContextProvider from "./contexts/PlayerContext";

// redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "./redux/rootReducer";

// libs
import localForage from "localforage";

// sw
import * as serviceWorker from "./serviceWorker";

// styles
import "./index.css";

// components
import App from "./components/App.js";

const persistConfig = {
  key: "root",
  storage: localForage,
  blacklist: ["playing"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
