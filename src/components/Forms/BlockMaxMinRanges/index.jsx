import React from "react";
import Icons from "../../Atoms/Icons/index";
import { setPointNumberValue } from "../../../helpers/basic_functions";

import { LabelBox, InputBox, Buttons } from "./styles";

const BlockMaxMinRanges = ({
  minPrice,
  maxPrice,
  min,
  max,
  diff,
  handleChangeMin,
  handleChangeMax,
}) => {
  const handleClickUpdateRangeMin = (e, value) => {
    e.preventDefault();
    handleChangeMin(value);
  };
  const handleClickUpdateRangeMax = (e, value) => {
    e.preventDefault();
    handleChangeMax(value);
  };

  return (
    <div className="grid col2 gap">
      <LabelBox className="flex-justify">
        <span className="title">{"Desde"}</span>
        <InputBox
          id={`minValueInput`}
          name="minValueInput"
          value={setPointNumberValue(minPrice)}
          min={min}
          max={max}
          type="text"
          readOnly
        />
        <Buttons>
          <button
            onClick={(e) =>
              handleClickUpdateRangeMin(e, Number(minPrice) - Number(diff))
            }
          >
            <Icons name="chevron-circle-left" color="var(--primary)" />
          </button>
          <button
            onClick={(e) =>
              handleClickUpdateRangeMin(e, Number(minPrice) + Number(diff))
            }
          >
            <Icons name="chevron-circle-right" color="var(--primary)" />
          </button>
        </Buttons>
      </LabelBox>
      <LabelBox className="flex-justify">
        <span className="title">{"Hasta"}</span>
        <InputBox
          id={`maxValueInput`}
          name="maxValueInput"
          value={setPointNumberValue(maxPrice)}
          min={min}
          max={max}
          type="text"
          readOnly
        />
        <Buttons>
          <button
            onClick={(e) =>
              handleClickUpdateRangeMax(e, Number(maxPrice) - Number(diff))
            }
          >
            <Icons name="chevron-circle-left" color="var(--primary)" />
          </button>
          <button
            onClick={(e) =>
              handleClickUpdateRangeMax(e, Number(maxPrice) + Number(diff))
            }
          >
            <Icons name="chevron-circle-right" color="var(--primary)" />
          </button>
        </Buttons>
      </LabelBox>
    </div>
  );
};

export default BlockMaxMinRanges;
