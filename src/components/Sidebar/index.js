import React from "react";
import Icons from '../Atoms/Icons/index'
import { Div } from "./styles";
import Overlay from '../Atoms/Overlay/index'

const Sidebar = ( props) => {

  const closeModal = (value) => {
    props.showSidebar(value)
  }
  

  return (
    <>
    <Div id="block_float_link">
      <button
        className="dark font_28 close"
        onClick={() => props.showSidebar(false)}
      >
        <Icons name="angle-right" size="14" />
      </button>
      {props.children}
    </Div>
    <Overlay close={closeModal} color={'black'} />
    </>
  );
};

export default Sidebar;
