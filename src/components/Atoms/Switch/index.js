import React from "react";
import {Div} from './styles'

const Switch = (props) => {
  return (
    <Div className="item_content pd_1">
      <div className="onoffswitch">
        <input
          type="checkbox"
          name="onoffswitch"
          checked={props.value}
          className="onoffswitch-checkbox"
          id={`swtich_${props.name}`}
          onChange={() => props.setValue(!props.value)}
        />
        <label
          className="onoffswitch-label"
          htmlFor={`swtich_${props.name}`}
        >
          <span className="onoffswitch-inner"></span>
          <span className="onoffswitch-switch"></span>
        </label>
      </div>
    </Div>
  );
}
export default Switch;
