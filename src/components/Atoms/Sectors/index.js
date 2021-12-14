import React from "react";
import { Logotipo } from "./styles";

export const Sectors = (props) => {
  const DIAMETER = 180;
  const SVG_SIZE = DIAMETER + 12;
  const STROKE = "transparent";
  const STROKE_WIDTH = "1";
  const sector1 = (props.size1 * 360) / 100;
  const sector2 = ((props.size2 + props.size1) * 360) / 100;

  
  const getSectorPath = (x, y, outerDiameter, a1, a2) => {
    const degtorad = Math.PI / 180;
    const cr = outerDiameter / 2;
    const cx1 = Math.cos(degtorad * a2) * cr + x;
    const cy1 = -Math.sin(degtorad * a2) * cr + y;
    const cx2 = Math.cos(degtorad * a1) * cr + x;
    const cy2 = -Math.sin(degtorad * a1) * cr + y;
    return `M${x} ${y} ${cx1} ${cy1} A${cr} ${cr} 0 0 1 ${cx2} ${cy2}Z`;
  };
  return (
    <Logotipo
      viewBox="0 0 200 200"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1}
      {...props}
    >

        <g fill="url(#gradient1)">
          <path
            stroke={`${STROKE}`}
            strokeWidth={`${STROKE_WIDTH}`}
            d={`${getSectorPath(SVG_SIZE / 2 + 0.5, SVG_SIZE / 2 - 0.5 , DIAMETER, 0, sector1)}`}
            fill="aqua"
          />
        </g>
        <path
          stroke={`${STROKE}`}
          strokeWidth={`${STROKE_WIDTH}`}
          d={`${getSectorPath(SVG_SIZE / 2, SVG_SIZE / 2 , DIAMETER, sector1, sector2)}`}
          fill="greenyellow"
        />
        <path
          stroke={`${STROKE}`}
          strokeWidth={`${STROKE_WIDTH}`}
          d={`${getSectorPath(SVG_SIZE / 2 + 0.5, SVG_SIZE / 2 + 0.1, DIAMETER, sector2, 360)}`}
          fill="deeppink"
        />
    </Logotipo>
  );
};
