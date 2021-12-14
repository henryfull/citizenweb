import React, { useState, useEffect } from "react";
// import { ranges } from "../../../../data/options";
import BlockMaxMinRanges from "../BlockMaxMinRanges/index.jsx";
import {
  Ranges,
  Range,
  BackgroundDinamicRangeMin,
  BackgroundDinamicRangeMax,
} from "./styles";

const ranges = {
  maxKms: 600000,
  maxPrice: 1000,
  maxPower: 600,
  minYear: 1971,
}

const PriceFilter = (props) => {
  const min = 0;
  const max = ranges.maxPrice;
  const [minPrice, setMinPrice] = useState(props.filter?.minPrice || min);
  const [maxPrice, setMaxPrice] = useState(props.filter?.maxPrice || max);
  const [withRangeMin, setWithRangeMin] = useState(() => {
    if (props.filter?.minPrice) {
      return Math.abs(((min - props.filter?.minPrice) * 100) / (max - min));
    } else {
      return 0;
    }
  });
  const [withRangeMax, setWithRangeMax] = useState(() => {
    if (props.filter?.maxPrice) {
      return (
        100 - Math.abs(((min - props.filter?.maxPrice) * 100) / (max - min))
      );
    } else {
      return 0;
    }
  });
  let diff = 10;
  // const [min, setMin] = useState(initialState)

  useEffect(() => {}, []);

  const handleChangeMinPrice = (e) => {
    let maxNum = parseFloat(maxPrice);
    let percent = 0;
    if (e < maxNum - diff + 1 && e < max + 1) {
      percent = Math.abs(((min - e) * 100) / (max - min));
      setMinPrice(e);
      setWithRangeMin(percent);
    }
  };

  const handleChangeMaxPrice = (e) => {
    let minNum = parseFloat(minPrice);
    if (e > minNum + diff && e > diff) {
      setMaxPrice(e);
      let percent = 100 - Math.abs(((min - e) * 100) / (max - min));
      setWithRangeMax(percent);
    }
  };
  const handleClickCloseModal = (e) => {
    e.preventDefault();
    props.setShowModal(false);
  };

  const handleApplyValue = (e) => {
    e.preventDefault();
    let filter = props.filter;
    filter.minPrice = minPrice;
    filter.maxPrice = maxPrice;
    props.setFilter({ ...props.filter, ...filter });
    props.setShowModal(false);
  };


  return (
    <div id="menuPrice" className="">
      <div className="bgwhite pd_1 mg_2 radius_5">
        <div className="mg_4">
          <h5 className="mga text-center">{props.title}</h5>
        </div>
        <form className=" pd_4">
          <BlockMaxMinRanges
            minPrice={minPrice}
            maxPrice={maxPrice}
            min={min}
            max={max}
            diff={diff}
            handleChangeMin={handleChangeMinPrice}
            handleChangeMax={handleChangeMaxPrice}
          />

          <section className="range-slider">
            <Ranges>
              <Range
                onChange={(e) => handleChangeMinPrice(e.target.value)}
                className="min"
                name="minValueRange"
                value={minPrice}
                min={min}
                max={max}
                step={diff}
                type="range"
              />

              <Range
                onChange={(e) => handleChangeMaxPrice(e.target.value)}
                className="max"
                name="maxValueRange"
                value={maxPrice}
                min={min}
                max={max}
                step={diff}
                type="range"
              />
              <BackgroundDinamicRangeMin width={withRangeMin} />
              <BackgroundDinamicRangeMax width={withRangeMax} />
            </Ranges>
          </section>
          <span className="rangeValues"></span>
          <div className="clear flex-justify">
            <button
              className="btn-red pd_2 radius_5"
              onClick={(e) => handleClickCloseModal(e)}
            >
              Cancelar
            </button>
            <button
              onClick={(e) => handleApplyValue(e)}
              className="btn-green pd_2 radius_5"
            >
              Aplicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PriceFilter;
