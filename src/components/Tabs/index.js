import React from "react";
import { Div, Button } from "./styles";

const Tabs = ({ setTab, tab }) => {
  return (
    <Div>
      <div className="flex">
        <Button className={tab === 1 ? "active" : ""} onClick={() => setTab(1)}>
          Vender coche
        </Button>
        <Button className={tab === 2 ? "active" : ""} onClick={() => setTab(2)}>
          Tasar coche
        </Button>
        <Button className={tab === 3 ? "active" : ""} onClick={() => setTab(3)}>
          Comprar coche
        </Button>
      </div>
    </Div>
  );
};

export default Tabs;
