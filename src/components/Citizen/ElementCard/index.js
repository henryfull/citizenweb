import React from "react";

export const ElementCard = ({...props}) => {
  return (
      <img
        // key={index + "example_photo"}
        src={`${process.env.PUBLIC_URL}files/characters/${props.name}`}
        alt={`character_${props.name}`}
        width={`${props.width || 'auto'}`}
        className="characterImage"
      />
  );
};
