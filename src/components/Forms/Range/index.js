import React, { useState, useEffect } from "react";
import { Div, Label, BackgroundInput, BackgroundDinamicRange } from "./styles";

const Range = ({ title, name, min, max, step, value, setValue }) => {
  const [maxValueRange, setMaxValueRange] = useState(value);
  const [withRange, setWithRange] = useState(
    Math.abs(((min - value) * 100) / (max - min))
  );
  const [changeIcon, setChangeIcon] = useState(false);

  const handleChangeValue = (e) => {
    setValue(e);
    setMaxValueRange(e);
    let avg = (parseInt(max) + parseInt(min)) / 2;
    if (e > avg) setChangeIcon(true);
    else setChangeIcon(false);
    let percent = Math.abs(((min - e) * 100) / (max - min));
    setWithRange(percent);
  };
  useEffect(() => {
  }, [withRange, changeIcon]);

  return (
    <section className="simple range-slider">
      <BackgroundInput>
        <BackgroundDinamicRange width={withRange} />
      </BackgroundInput>

      <input
        onInput={(e) => handleChangeValue(e.target.value)}
        // onInput={this.form.maxValueInput.value = this.value}
        className={changeIcon ? "max" : "min"}
        id={`inputId${name}`}
        name={name}
        defaultValue={value}
        min={min}
        max={max}
        step={step}
        type="range"
      />

      <Div className="mg_top_2">
        <h5 className=" pd_right_2">{title}</h5>
        <Label className="">{maxValueRange}</Label>
      </Div>
    </section>
  );
};

export default Range;
