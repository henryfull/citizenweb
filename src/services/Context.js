import React, { createContext, useState, useEffect, useReducer } from "react";
import Cookies from "js-cookie";
import { setCookies } from "../helpers/utils";
import { CheckRoles } from "./checkRoles";
import { GetProfile } from "./getProfile";
import { msg } from "../data/messages";

import { users } from "../data/users";
import preConfig from "./preConfig";
import { reducerConfig } from "./reducers";
const TOKEN_KEY = "token";
const jwt = require("jsonwebtoken");
export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => Cookies.get("jwt"));
  const [showMessage, setshowMessage] = useState(false);
  const [config, setConfig] = useReducer(reducerConfig, preConfig);

  const [message, setMessage] = useState({
    status: "",
    text: "",
    color: "",
  });
  const option = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${isAuth}`,
    },
  };

  const [auto, setAuto] = useState(
    () => JSON.parse(localStorage.getItem("auto")) || {}
  );
  const [profile, setProfile] = useState(
    () => JSON.parse(sessionStorage.getItem("profile")) || {}
  );
  const [metadata, setMetadata] = useState(
    () => JSON.parse(localStorage.getItem("metadata")) || {}
  );

  useEffect(() => {
    // initSession();
    // eslint-disable-next-line
  }, []);

  // const initSession = async () => {
  //   if (isAuth) {
  //     if (profile.account) {
  //       if (profile.account.name !== "nologin") {
  //         await setProfileRechargePage();
  //       } else {
  //         await setValuesProfiles(isAuth);
  //       }
  //     } else {
  //       await setValuesProfiles(isAuth);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   sessionStorage.setItem("profile", JSON.stringify(profile));
  //   if (isAuth) {
  //     console.log("logueado");
  //   } else {
  //     if (!sessionStorage.getItem("profile")) {
  //       sessionStorage.setItem(
  //         "profile",
  //         JSON.stringify({ theme: "lightmode" })
  //       );
  //     } else {
  //       sessionStorage.setItem("profile", JSON.stringify(profile));
  //     }
  //   }
  //   // eslint-disable-next-line
  // }, [profile]);

  // useEffect(() => {
  //   localStorage.setItem("auto", JSON.stringify(auto));
  // }, [auto]);
  // useEffect(() => {
  //   sessionStorage.setItem("metadata", JSON.stringify(metadata));
  // }, [metadata]);

  const updateMessage = async (code) => {
    await setMessage(msg[code]);
    setshowMessage(true);
  };
  /**
   * Actualiza un campo de del estado de un objeto
   * @param {String} keyValue | Nombre del campo a actualiza
   * @param {String} value | Valor a actualizar
   * @param {String} field | Nombre del objeto que se quiere actualizar
   */
  const updateOnlyField = async (keyValue, value, field) => {
    await setSingleField(keyValue, value, field);
  };

  /**
   * Actualiza multimples campos del esado de un objeto
   * @param {Array} array | Array de campos que se van a actualizar
   * @param {Striong} field | Nombre del objeto que se quiere actualizar
   */
  const updateAnyFields = async (array, field) => {
    await setAnyField(array, field);
  };

  const setSingleField = (keyValue, value, field) => {
    if (field === "auto")
      setField(auto, keyValue, value).then((data) => setAuto(data));
    if (field === "profile")
      setField(profile, keyValue, value).then((data) => setProfile(data));
    if (field === "metadata")
      setField(metadata, keyValue, value).then((data) => setMetadata(data));
  };

  const setAnyField = (array, field) => {
    if (field === "auto")
      setArrayFields(auto, array).then((data) => setAuto(data));
    if (field === "profile")
      setArrayFields(profile, array).then((data) => setProfile(data));
    if (field === "metadata")
      setArrayFields(metadata, array).then((data) => setMetadata(data));
  };

  /**
   * Permite actualizar solo un campo del objeto
   * @param {Object} object | Objeto a actualizar
   * @param {String} keyValue | Nombre clave del que se quiere actualizar
   * @param {String} value | Valor del campo que se va a actualizar
   */
  const setField = async (object, keyValue, value) => {
    return { ...object, [keyValue]: value };
  };

  /**
   * Permite actualizar varios campos de un objeto
   * @param {Object} object | Objeto a actualizar
   * @param {Array} array | Se pasa una array con todos campos que se quieren cambiar
   */
  const setArrayFields = async (object, array) => {
    let newObject = object;
    for (const item of array) {
      newObject[Object.keys(item)] = Object.values(item)[0];
    }
    return { ...object, ...newObject };
  };

  const handleSetAutoDefault = async (data) => {
    return await setAuto(data);
  };

  // Actualizamos un documento con los reducer
  const saveDocument = (field, value) => {
    setConfig({ [field]: value, type: field });
  };

  // Actualizamos un subdocumento con los reducer
  const saveSubDocument = (name, data) => {
    let fields = name.split(".");
    let document = fields[0];
    let subdocument = fields[1];
    config[document][subdocument] = data;
    // console.log(auto[document][subdocument]);
    setConfig({ [document]: config[document], type: document });
  };

  /**
   * devuelve el token decodificado
   * @param {String} token | Objecto tipo token
   */
  async function decoded(token) {
    try {
      var decoded = await jwt.decode(token);
      return decoded;
    } catch (err) {
      // err
      return err;
    }
  }

  /**
   * Se decodifica el token y estblece los valores que se iran utilizando
   * @param {String} token | Token del usuario
   */
  async function activateAuth(token) {
    console.log(token);
    await setValuesProfiles(token);
    await setIsAuth(token);
  }

  // const setProfileRechargePage = async () => {
  //   let profileTemp = JSON.parse(sessionStorage.getItem("profile"));
  //   if (profileTemp.account.name === "nologin") {
  //     await setValuesProfiles(isAuth);
  //   } else {
  //     await updateAnyFields(
  //       JSON.parse(sessionStorage.getItem("profile"), "profile")
  //     );
  //   }
  // };

  const setValuesProfiles = async (token) => {
    const { _id, email, roles } = await decoded(token);
    let rols = await CheckRoles({ token }, roles);
    const { item, notifications } = await GetProfile({ token }, _id);
    setCookies("jwt", token);
    setCookies("PID", item.pid);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    window.sessionStorage.setItem("roles", roles);
    await updateAnyFields(
      [
        { idUser: _id },
        { rols: rols },
        { urlAvatar: item.urlAvatar?.path || "" },
        { avatar: item.avatar },
        { email: email },
        { roles: roles },
        { name: item.username },
        {
          account: {
            id: _id,
            email: email,
            rol: rols,
            name: item.username,
            avatar: item.avatar || "",
            notifications: notifications,
          },
        },
      ],
      "profile"
    );
  };

  // const initialState = {
  //   PID: Cookies.get("PID"),
  //   account: {
  //     id: "",
  //     email: "",
  //     name: "nologin",
  //     avatar: "nologin",
  //     notifications: [],
  //   },
  //   theme: "lightmode",
  // };
  /**
   * Elimina el toen del usuario y limia la cache de la sesión
   */
  async function removeAuth() {
    window.sessionStorage.removeItem("profile");
    Cookies.remove("jwt");
    setIsAuth(false);
    setProfile(users[0]);
    // updateAnyFields(initialState, "profile");
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem("roles");
  }

  const value = {
    isAuth,
    auto,
    profile,
    metadata,
    option,
    message,
    showMessage,
    config,
    activateAuth,
    removeAuth,
    decoded,
    updateOnlyField,
    updateAnyFields,
    handleSetAutoDefault,
    updateMessage,
    setshowMessage,
    saveDocument,
    saveSubDocument,
    setProfile
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
// eslint-disable-next-line
export default {
  Provider,
  Consumer: Context.Consumer,
};
