import React from "react";
// import Checkbox from "../Checkbox/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Checkbox, BlockCheck} from './styles'

const BoxCheckbox = ({ title, description, name, type, check, value,  setService, setValueService  }) => {
  // const [checking, setCheck] = useState(false);


  const changeCheck = () =>{
    setService(!check)
  }
  const handleValueService = (e) => {
    console.log(e.target.value);
    setValueService(e.target.value);
  }

  return (
    <BlockCheck className="flex-justify pd_1">
      <div className="w100">
        <h5>{title}</h5>
        {
          description !== '' &&
          <>
        { check && (
          <input
            type={type}
            name={`input${name}`}
            placeholder={description}
            className="font_12 w100"
            value={value}
            onChange={e => handleValueService(e)}
          />
        )}
         
        </>
        }
        {/* <p className="font_12">{description}</p> */}
      </div>
      <div className="tab-form">

      {check ? (
          <Checkbox onClick={changeCheck} className="green">
            <FontAwesomeIcon icon={["far", "check-circle"]} />
          </Checkbox>
        ) : (
          <Checkbox onClick={changeCheck}>
            <FontAwesomeIcon icon={["far", "circle"]} />
          </Checkbox>
        )}
        {/* <Checkbox name={name} check={check} changeCheck={changeCheck}/> */}
      </div>

     

    </BlockCheck>
  );
};
export default BoxCheckbox;
