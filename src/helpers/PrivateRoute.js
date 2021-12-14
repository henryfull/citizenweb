import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
// import { isLogin } from './utils';
import { Context } from "../services/Context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useContext(Context);
  return (
    <React.Fragment>
      <Route
        {...rest}
        render={(props) =>
          isAuth ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    </React.Fragment>
  );
};

export default PrivateRoute;
