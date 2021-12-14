import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../../services/Context";
const Messages = ({ msg }) => {
  const { message, showMessage, setshowMessage } = useContext(Context);
  const [color, setColor] = useState(() => {
    if (message?.type === "error") return "crimson";
    else return "lightgreen";
  });

  useEffect(() => {
    if (message?.type === "error") setColor("crimson");
    else setColor("lightgreen");
    setTimeout(() => {
      setshowMessage(false)
    }, 5000);
        // eslint-disable-next-line
  }, [message]);
  console.log(message)

  return (
    <>
      {(showMessage && message) && (
        <Div color={color}>
          <p>{`${message.status} : ${
            msg === undefined ? message.text : msg
          }`}</p>
          <button className="pointer" onClick={() => setshowMessage(false)}>
            &times;
          </button>
        </Div>
      )}
    </>
  );
};

export const Div = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 50px;
  transition: 1s linear all;
  background-color: ${(props) => props.color};
  padding: 5px;
  z-index: 100;
  @media(max-width: 587px){
    top: 0;
    position: sticky;
  }
  @media(min-width: 587px){
    position: fixed;
    bottom: 0;
  }

`;

export default Messages;
