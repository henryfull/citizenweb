// Dependencias
import React, { Suspense } from "react";
import { Route, Switch } from "react-router";

// Components
import App from "./components/App";

// Frontent
import Page404 from "./pages/page404";
import Login from "./pages/Login";
import Register from "./pages/register";
import Terms from "./pages/Terms/index";
import Policy from "./pages/Policy/index";
import FAQ from "./pages/FAQ/index";

import WelcomePage from "./pages/Home/WelcomePage";
// GAME
// Backend
// import TokenCard from "./pages/TokenCard";
// Routes
// import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";

const AppRoutes = () => (
  <Suspense fallback={<div />}>
    <App>
      <Switch>
        <PublicRoute exact path="/" component={WelcomePage} />
        <PublicRoute exact path="/faq" component={FAQ} />
        <PublicRoute exact path="/terminos-y-condiciones" component={Terms} />
        <PublicRoute exact path="/politica-privacidad" component={Policy} />
        <PublicRoute exact path="/register" component={Register} />
        {/* STORE */}
        <PublicRoute exact path="/login" component={Login} />

        <Route component={Page404} />
      </Switch>
    </App>
  </Suspense>
);

export default AppRoutes;
