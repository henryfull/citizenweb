import React from "react";
import styled from "styled-components";
import { pathOrigin } from "../../../helpers/utils";

const AvatarSkew = (props) => {
  const avatar = {
    url: `${pathOrigin}/files/characters/skew/cat-skew-f000.png`,
    num: 180,
    hexa: "#56F9FE",
    name: "cat-avatar-f000.png",
  };

  return (
    <Image color={avatar.num} hg={props.hg} className={props.rv ? "reverse" : "noreverse"}>
      <div className="_blockImage">
        <img
          src={`${pathOrigin}/files/assets/bg-skew-orange.png`}
          alt={`bg avatar`}
          className="bg-avatar"
        />
        <img
          src={avatar.url}
          alt={`icon menu ${avatar.name}`}
          className="character"
        />
      </div>
    </Image>
  );
};

const Image = styled.div`
  transition: 0.5s linear all;
  cursor: pointer;
  color: white;
  display: grid;
  place-items: center;
  z-index: 1;
  width: ${(props) => props.hg}px;
  height: ${(props) => props.hg}px;
  ._blockImage {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .bg-avatar {
    filter: hue-rotate(${(props) => props.color}deg);
  }
  &.reverse {
    transform: rotateY(180deg);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    bottom: 0;
  }
`;

export default AvatarSkew;
