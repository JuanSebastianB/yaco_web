import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/store";

import { routesConst } from "./commons/constants/routes.const";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {routesConst.map((route, index) => {
            const ComponentToRender = route.component;
            return (
              <Route
                key={index}
                exact
                path={route.path}
                element={<ComponentToRender />}
              />
            );
          })}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
