import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../services/Context";
import Icons from "../Atoms/Icons/index";

import { Sidebar } from "./styles";

const SidebarMenu = (props) => {
  const { isAuth } = useContext(Context);
  const path = window.location.pathname;
  const changeStatus = () => {
    props.setopenSideMenu(false);
  };

  return (
    <Sidebar id="" onMouseLeave={changeStatus}>
      <ul>
        <li className={path === "/" ? "active" : ""}>
          <Link to="/">
            <span className="logo">
              <Icons name="logo" color="var(--second)" />
            </span>
            <span className="name">Home</span>
          </Link>
        </li>
        {!isAuth ? (
          <>
        <li className={path.includes("store") ? "_active" : ""}>
          <Link to="/store">
            <Icons name="store" />
            <span className="name">Shop</span>
          </Link>
        </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Signup</Link>
            </li>
          </>
        ) : (
          <>
            <li className={path.includes("store") ? "_active" : ""}>
              <Link to="/store">
                <Icons name="store" />
                <span className="name">Shop</span>
              </Link>
            </li>
            <li className={path.includes("start") ? "_active" : ""}>
              <Link to="/start">
                <Icons name="skull" />
                <span className="name">Start</span>
              </Link>
            </li>
            <li className={path.includes("decks") ? "_active" : ""}>
              <Link to="/decks">
                <Icons name="clone" />
                <span className="name">Cards</span>
              </Link>
            </li>
            <li className={path.includes("account") ? "_active" : ""}>
              <Link to="/account">
                <Icons name="user-circle" />
                <span className="name">Account</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </Sidebar>
  );
};

export default SidebarMenu;
