import React from "react";
import Overlay from "../Overlay/index";
import {ModalContent,  Div, Header } from "./styles";

const Modal = (props) => {
  return (
    <ModalContent >
      <Div background={props.background} className="center-content col-s-12 col-t-6 mga">
        <Header className="flex-justify">
          <h5>{props.title || " "}</h5>
          <button
            onClick={() => props.setShowModal(false)}
          >
            &times;
          </button>
        </Header>
        <div className="w100">
        {props.children}

        </div>
      </Div>
      <Overlay color={props.color || "black"} close={props.setShowModal} />
    </ModalContent>
  );
};

export default Modal;
