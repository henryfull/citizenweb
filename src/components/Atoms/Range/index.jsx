import React, { useState, useEffect } from "react";

import {
  BackgroundInput,
  BackgroundDinamicRange,
  Input,
  Section,
} from "./styles";

const Range = ({ title, name, min, max, step, value, setValue, points }) => {
  const [maxValueRange, setMaxValueRange] = useState(value);
  const [withRange, setWithRange] = useState();
  const [changeIcon, setChangeIcon] = useState(false);

  useEffect(() => {
    setMaxValueRange(value);
  }, [value]);

  useEffect(() => {
    handleClickUpdateApply();
    // eslint-disable-next-line
  }, [maxValueRange, withRange, max]);

  useEffect(() => {
    setWithRange(Math.abs(((min - value) * 100) / (max - min)));
    // eslint-disable-next-line
  }, [max, value]);

  const handleChangeValue = (e) => {
    let value = Number(e);
    let point = Math.floor(Math.abs((value - maxValueRange) / 10));
    if (name.includes("life")) {
      point = point / 10;
    }

    if (
      (value >= parseInt(maxValueRange) &&
        parseInt(point) <= parseInt(points)) ||
      value < parseInt(maxValueRange)
    ) {
      setMaxValueRange(e);
      let avg = (parseInt(max) + parseInt(min)) / 2;
      if (e > avg) setChangeIcon(true);
      else setChangeIcon(false);
      let percent = Math.abs(((min - e) * 100) / (max - min));
      setWithRange(percent);
    }
  };

  const handleClickUpdateApply = () => {
    // e.preventDefault();
    if (isNaN(min)) {
      setValue(max);
    } else if (maxValueRange > max) {
      setValue(max);
    } else if (maxValueRange < min) {
      setValue(min);
    } else {
      setValue(maxValueRange);
    }
  };

  return (
    <div className="mg_bottom_6">
      <div className="flex-justify">
        <b className="black">{title}</b>
        <b className="primary">{maxValueRange}</b>
      </div>
      <Section className="simple ">
        <Input
          onInput={(e) => handleChangeValue(e.target.value)}
          className={changeIcon ? "max" : "min"}
          id={`inputId${name}`}
          name={name}
          value={maxValueRange || 0}
          min={min}
          max={max}
          step={step}
          type="range"
          readOnly
        />
        <BackgroundInput>
          <BackgroundDinamicRange width={Number(withRange) || 0} />
        </BackgroundInput>
        <div className="clear"></div>
      </Section>
    </div>
  );
};

export default Range;
