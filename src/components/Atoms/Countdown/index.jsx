import React, { useState, useEffect, useContext } from "react";
import { setCount } from "../../../helpers/basic_functions";
import { Contexto } from "../../../pages/Game/Services/Contexto";

const Countdown = ({ endDate, size = 16, color }) => {
  const { board } = useContext(Contexto);
  const [countDown, setCountDown] = useState(setCount(endDate));
  const [colors, setcolors] = useState("var(--primary)");
  useEffect(() => {
    setInterval(async () => {
      let time = setCount(endDate);
      setCountDown(time);
      if (!board.endGame) {
        board.time = time;
      }
        // dispatch({board, type: board})
        if (
          (Number(countDown.substr(0, 2)) >= 3) &
          (Number(countDown.substr(0, 2)) < 12)
        ) {
          setcolors("orange");
        }
        if (
          (Number(countDown.substr(0, 2)) > 0) &
          (Number(countDown.substr(0, 2)) < 3)
        ) {
          setcolors("red");
        }
      }, 1000);
    // eslint-disable-next-line
  }, []);

  return (
    <b className={`pdh_1 font_${size} ${color || colors} `}>
      {" "}
      {" " + countDown}
    </b>
  );
};

export default Countdown;
