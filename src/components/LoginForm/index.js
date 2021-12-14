// External
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Context } from "../../services/Context";

// Local
import { Api } from "../../helpers/utils";
import { Login, Message } from "./styles";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { activateAuth } = useContext(Context);
  const [messageError, setmessageError] = useState();
  const [showPassword, setShowPassword] = useState("password");

  const handleSumitClickLogin = async (e) => {
    e.preventDefault();
    var url = Api("auth/login");
    console.log(url);
    var data = { email, password };
    const options = {
      method: "POST",
      data,
    };
    console.log(options);
    try {
      let res = await axios(url, options);
      console.log(res);
      if (res.status === 201) {
        await activateAuth(res.data.body);
      } else {
        setmessageError("El usuario y/o contraseña son erroneos");
      }
    } catch (error) {
      setmessageError("El usuario y/o contraseña son erroneos");
      console.error(error, "No se ha podido realizar la peticion");
    }
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  return (
    <Login>
      <form className="mg_bottom_2 ">
        <label className="flex-justify">
          <FontAwesomeIcon icon={["far", "envelope"]} />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.toLowerCase());
            }}
          />
        </label>
        <label className="flex-justify">
          <FontAwesomeIcon icon={["fas", "unlock-alt"]} />
          <input
            type={showPassword}
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {showPassword === "password" ? (
            <p onClick={(e) => handleShowPassword(e)} className="white">
              <FontAwesomeIcon icon={["far", "eye-slash"]} />
            </p>
          ) : (
            <p onClick={(e) => handleShowPassword(e)} className="white">
              <FontAwesomeIcon icon={["far", "eye"]} />
            </p>
          )}
        </label>
        <button
          onClick={handleSumitClickLogin}
          className="bgwhite pd_2 w100 radius_5 font_16 login"
        >
          Iniciar sesión
        </button>
      </form>
      <hr></hr>
      <Link
        to="/register"
        className="bgblack white pd_2 w100 radius_5 font_16 text-center"
      >
        Crear cuenta
      </Link>
      {messageError && <Message className="msgs">{messageError}</Message>}
    </Login>
  );
};

export default LoginForm;
