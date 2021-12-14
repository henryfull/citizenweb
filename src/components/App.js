// Dependencias
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Content from "./Content";
import { Api } from "../helpers/utils";
import { Context } from "../services/Context";
import { user } from "../services/resetProfile";

// Components
import SidebarMenu from "./SidebarMenu/index";
import Messages from "./Atoms/Messages/index";

const App = (props) => {
  const { updateAnyFields } = useContext(Context);
  const [openSideMenu, setopenSideMenu] = useState(false);

  useEffect(function () {
    if (window.screen.width < 600) {
      setopenSideMenu(false);
    }
    console.log("Wellcome to Citizen Game 🦄");
    setUser();
    getTokens();
    // eslint-disable-next-line
  }, []);

  const { children } = props;

  const setUser = async () => {
    if (!sessionStorage.getItem("profile")) {
      await updateAnyFields(user, "profile");
    }
  };

  const getTokens = (tab) => {
    let tokens = ["character", "skill", "skin", "item"];

    if (!sessionStorage.getItem("character")) {
      for (const nameToken of tokens) {
        setTokens(nameToken);
      }
    }

    // setLoading(true);
  };

  const setTokens = (name) => {
    let url = Api(name + "/list");
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async (res) => {
        if (res.status === 200) {
          // setCardsForToken(res.data.body);
          sessionStorage.setItem(name, JSON.stringify(res.data.body));
        }
      });
  };

  return (
    <div id="App" className="darkmode">
      {openSideMenu && (
        <SidebarMenu
          openSideMenu={openSideMenu}
          setopenSideMenu={setopenSideMenu}
        />
      )}
      <Messages />
      <div id="content" className="w100">
        <Content body={children} />
        {/* <ConsentCookies /> */}
      </div>
    </div>
  );
};

export default App;
