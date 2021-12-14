// External dependecies
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

// import io from "socket.io-client";

// Local dependencies
import { Context } from "../../services/Context";
import SendMetada from "../../services/sendMetada";
// import { Io } from "../../../helpers/utils";

// Components
import SidebarMenu from "../SidebarMenu/index";

// Styles
import { Navbar, ContentNavbar } from "./syles";

if (sessionStorage.getItem("profile")) {
  let profileTemp = JSON.parse(sessionStorage.getItem("profile"));
  const { idUser } = profileTemp;
  // var socket = io.connect(Io("auto"), {
  //   query: { nameJoin: idUser },
  //   extraHeaders: {
  //     "my-custom-header": "1234",
  //   },
  // });
}

const SidebarProfile = React.lazy(() => import("../SidebarProfile/index"));

const Nav = () => {
  const [openSideMenu, setopenSideMenu] = useState(false);
  const [openSideProfile, setopenSideProfile] = useState(false);
  const { isAuth, profile } = useContext(Context);
  const [showLogin, setShowLogin] = useState(false);
  const [urlAvatar, setUrlAvatar] = useState(profile?.account?.avatar || "");
  const [numNotifications, setNumNotifications] = useState(0);

  useEffect(() => {
    SendMetada(profile);
    if (isAuth) {
      // socket.on("newAuto", (res) => {
      //   console.log("Juan", res);
      // });
    }
  }, []);

  useEffect(() => {
    let avatar = "";
    if (profile.account?.avatar) {
      avatar = profile.account.avatar;
    } else if (profile.account?.email) {
      avatar = `https://avatars.dicebear.com/4.5/api/initials/${profile.account.name}.svg`;
    }
    setUrlAvatar(avatar);
    if (profile.account?.notifications) {
      let num = 0;
      for (const item of profile.account.notifications) {
        if (!item.visualized) num++;
      }
      setNumNotifications(num);
    }
  }, [profile.account]);

  return (
    <React.Fragment>
      <Navbar className="pd_15" id="navbartop">
        <ContentNavbar>
          <SidebarMenu
            openSideMenu={openSideMenu}
            setopenSideMenu={setopenSideMenu}
          />

          {/* {isAuth ? (
            <div className="flex-justify mg_right_3 rel">
              <button
                className="defaultc"
                onClick={() => setopenSideProfile(!openSideProfile)}
              >
                <img src={urlAvatar} alt="Avatar" className="avatar" />
                {profile.idUser && (
                  <>
                    {numNotifications !== 0 && (
                      <span className="icon_notification abs">
                        {numNotifications > 9 ? "+9" : numNotifications}
                      </span>
                    )}
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="flex-justify mg_right_3 rel">
              <Links onClick={() => setShowLogin(true)}>
                <Icon name="user-circle" />
              </Links>

              {showLogin && (
                <>
                  <Sidebar showSidebar={setShowLogin}>
                    <LoginForm />
                  </Sidebar>
                  <Overlay close={setShowLogin} color={"white"} />
                </>
              )}
            </div>
          )} */}
        </ContentNavbar>
      </Navbar>
    </React.Fragment>
  );
};
export default Nav;
