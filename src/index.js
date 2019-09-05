// react
import React from "react";
import ReactDOM from "react-dom";
import PlayerContextProvider from "./contexts/PlayerContext";

// sw
import * as serviceWorker from "./serviceWorker";

// styles
import "./index.css";

// components
import App from "./components/App.js";

ReactDOM.render(
  <PlayerContextProvider>
    <App />
  </PlayerContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
