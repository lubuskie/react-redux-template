import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";

export default ({ store, baseUrl }) => (
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </Provider>
);
