import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./state/reducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk), composeWithDevTools())
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
