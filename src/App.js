import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import MainRoutes from "./Pages/MainRoutes";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </div>
  );
};

export default App;
