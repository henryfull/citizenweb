// External
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Local
import { Context } from "../../services/Context";
import Sidebar from "../Sidebar/index";

import { Sidebarprofile } from "./styles";

const SidebarProfile = (props) => {
  const openSideProfile = props.openSideProfile;
  const { removeAuth } = useContext(Context);
  const email = sessionStorage.getItem("email");

  const changeStatus = () => {
    props.setopenSideProfile(!openSideProfile);
  };
  const logout = () => {
    removeAuth();
    props.setopenSideProfile(!openSideProfile);
  };

  return (
    <Sidebar showSidebar={changeStatus}>
      <Sidebarprofile className="">
        <ul className="list list-badge">
          <li className="bglightgrey rel">
            <h5 className="defaultc">
              <b>{email}</b>
            </h5>
          </li>
          <li>
            <Link to="/" className="__icon_default" onClick={changeStatus}>
              <FontAwesomeIcon icon={["fas", "home"]} />
              <span className="pd_left_2 textSidebar">Inicio</span>
              <span className="numbadge"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="__icon_default"
              onClick={changeStatus}
            >
              <FontAwesomeIcon icon={["fas", "user"]} />
              <span className="pd_left_2 textSidebar">Perfil</span>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="__icon_default"
              onClick={changeStatus}
            >
              <FontAwesomeIcon icon={["fas", "cogs"]} />
              <i className="fas fa-cogs"></i>
              <span className="pd_left_2 textSidebar"> Configuración</span>
            </Link>
          </li>
          <li>
            <Link to="/panel/created" className="__icon_default" onClick={changeStatus}>
              <FontAwesomeIcon icon={["fas", "edit"]} />
              <i className="fas fa-cogs"></i>
              <span className="pd_left_2 textSidebar"> Create Token</span>
            </Link>
          </li>
          <li>
            <Link to="/panel/cards" className="__icon_default" onClick={changeStatus}>
              <FontAwesomeIcon icon={["fas", "clone"]} />
              <i className="fas fa-cogs"></i>
              <span className="pd_left_2 textSidebar"> Cards</span>
            </Link>
          </li>
          <li>
            <Link to="/panel/users" className="__icon_default" onClick={changeStatus}>
              <FontAwesomeIcon icon={["fas", "user-friends"]} />
              <i className="fas fa-cogs"></i>
              <span className="pd_left_2 textSidebar"> Users</span>
            </Link>
          </li>
          <li>
            <Link to="/help" onClick={changeStatus}>
              <FontAwesomeIcon icon={["fas", "question-circle"]} />
              <span className="pd_left_2 textSidebar"> Ayuda</span>
            </Link>
          </li>
          <li>
            <button to="" className="__icon_default" onClick={logout}>
              <FontAwesomeIcon
                icon={["fas", "sign-out-alt"]}
                className="mg_left_2 red"
              />
              <span className="pd_left_2 textSidebar red"> Logout</span>
            </button>
          </li>
        </ul>
      </Sidebarprofile>
    </Sidebar>
  );
};

export default SidebarProfile;
