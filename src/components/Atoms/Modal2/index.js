import React from "react";
import Overlay from "../../Overlay/index";
import { Div, Header } from "./styles";

const Modal = (props) => {
  return (
    <React.Fragment>
      <Div className="center-content bgwhite col-s-12 col-t-6 mga">
        <Header className="flex-justify">
          <h5>{props.title || " "}</h5>
          <button
            onClick={() => props.setShowModal(false)}
          >
            &times;
          </button>
        </Header>
        <div className="">
        {props.children}

        </div>
      </Div>
      <Overlay color="black" close={props.setShowModal} />
    </React.Fragment>
  );
};

export default Modal;
