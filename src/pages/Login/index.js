/** Dependencias */
import React, { useContext} from "react";
import { Redirect } from "react-router-dom";

// Local import

import { Context } from "../../services/Context";
import properties from "../../data/properties.json";

import LoginForm from "../../components/LoginForm";
import { Div } from "./styles";
export const p = properties[0];

const Login = ({ props }) => {
  const { isAuth } = useContext(Context);

  return (
    <div className="Login">
      <div className="col-t-12 center-content">
        <h3 className="text-center m4">{p.msg_login}</h3>

        {isAuth ? (
          <Redirect to="/" />
        ) : (
          <Div>
            <LoginForm />
          </Div>
        )}
      </div>
    </div>
  );
};

export default Login;
