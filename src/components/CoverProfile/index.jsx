import React, { useContext } from "react";
import styled from "styled-components";
import { pathOrigin } from "../../helpers/utils";
import { Context } from "../../services/Context";
import StatusBar from "../Atoms/StatusBar/index.jsx";
import Avatar from "../Atoms/Avatar/index.jsx";

const CoverProfile = (props) => {
  const { profile } = useContext(Context);
  const avatar = {
    url: `${pathOrigin}/files/characters/avatar/cat-avatar-f000.png`,
    num: 180,
    hexa: "#56F9FE",
    name: "cat-avatar-f000.png",
  };
  return (
    <Div>
      <Image color={avatar.num}>
        <Avatar avatar={profile.avatar || avatar}/>
      </Image>
      <Bar>
        <Name>
          <b>{profile.name}</b>
        </Name>
        <BarBottom className="">
          <div className="w100">
            <p className="level">
              <b>{profile.level}</b>
            </p>
          </div>
          <div className="w100">
            <div className="w100">
              <StatusBar
                widthState={profile.experience || 40}
                height={30}
                color={{ primary: "var(--primary)", second: "#290005" }}
                text={`${profile.experience || 400} / 1000 `}
              ></StatusBar>
              {/* <p>
                <span className="value">750</span> /{" "}
                <span className="maxvalue">1000</span>
              </p> */}
            </div>
          </div>
        </BarBottom>
      </Bar>
    </Div>
  );
};

const Div = styled.div`
  transition: 0.5s linear all;
  cursor: pointer;
  color: white;
  display: grid;
  place-items: center;
  width: 350px;
  height: 200px;
  position: relative;
  grid-area: 1 / 3 / 1 / 3;
`;
const Image = styled.div`
  transition: 0.5s linear all;
  cursor: pointer;
  color: white;
  display: grid;
  place-items: center;
  position: absolute;
  left: 10px;
  bottom: 0;
  z-index: 1;
  width: 180px;
  height: 180px;
  ._blockImage {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .bg-avatar {
    filter: hue-rotate(${(props) => props.color}deg);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    bottom: 0;
  }
`;
const Bar = styled.div`
  transition: 0.5s linear all;
  cursor: pointer;
  color: white;
  display: grid;
  place-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 0;
  background-color: var(--second);
  padding: 5px;
  border-radius: 5px;
`;
const Name = styled.p`
  color: var(--body);
  text-align: right;
  width: 100%;
  padding-right: 5px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
const BarBottom = styled.div`
  transition: 0.5s linear all;
  cursor: pointer;
  color: white;
  display: grid;
  grid-template-columns: 5rem auto;
  place-items: center;
  width: 100%;
  background-color: var(--body);
  padding: 5px;
  border-radius: 5px;

  .level {
    padding: 10px;
  }
`;

export default CoverProfile;
