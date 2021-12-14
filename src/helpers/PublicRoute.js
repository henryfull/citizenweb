import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../services/Context";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    const isAuth = useContext(Context);
    return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth && restricted ? (
          <Redirect to="/index" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
