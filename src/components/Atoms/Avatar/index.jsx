import React from "react";
import styled, { keyframes } from "styled-components";
import { pathOrigin } from "../../../helpers/utils";
var clg = 0;
const Avatar = (props) => {
  clg = props.avatar.num;
  return (
    <Image color={props.avatar.num} className={props.active} size={props.avatar.size}>
      <div className="_blockImage">
        <img
          //   src={`${pathOrigin}/files/assets/bg-skew-orange.png`}
          src={`${pathOrigin}/files/assets/bg-rombo-blue.png`}
          // src={`${pathOrigin}/files/characters/rombo/cat-rombo-woman.png`}
          alt={`bg avatar`}
          className="bg-avatar"
        />
        <img
          src={props.avatar.url}
          alt={`icon menu ${props.avatar.name}`}
          className="character"
        />
      </div>
    </Image>
  );
};

const showAction = keyframes`
 0% {filter: hue-rotate(${clg}deg);}
 100% {filter: hue-rotate(360deg);}
`;

const Image = styled.div`
  transition: 0.5s linear all;
  cursor: pointer;
  color: white;
  display: grid;
  place-items: center;
  z-index: 1;
  width: ${props => props.size || 180}px;
  height:  ${props => props.size || 180}px;
  margin: auto;
  ._blockImage {
    position: relative;
    height: 100%;
    width: 100%;
  }
 
  .bg-avatar {
    filter: hue-rotate(${(props) => props.color}deg);
  }
  .character,
  .bg-avatar {
    transition: 0.2s all linear;
  }

  &:hover {
    .bg-avatar {
      filter: hue-rotate(${(props) => props.color + 180}deg);
    }
    .character {
      transform: scale(1.1) translateY(-10px);
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    bottom: 0;
    left: 1%;
    right: 1%;
  }
  &.active {
    .bg-avatar {
      -webkit-animation-duration: 20s;
      animation-duration: 20s;
      animation-name: ${showAction};
      animation-iteration-count: infinite;
    }
  }
`;

export default Avatar;
