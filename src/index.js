// Dependencias
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import ReactGA from 'react-ga';
import Context from "./services/Context";
// Assets
import "./assets/css/reset.css";
import "./assets/css/style.css";
import "./assets/fonts/fontawesome";

// Routes
import AppRoutes from "./routes";
// ReactGA.initialize('UA-176586157-1'); // add your tracking id here.
// ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Context.Provider >
    <Router>
      <AppRoutes />
    </Router>
  </Context.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
