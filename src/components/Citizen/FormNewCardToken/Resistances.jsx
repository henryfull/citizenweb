import React from "react";
import Range from "../../Atoms/Range/index.jsx";

const Resistances = ({ card, saveSubDocument }) => {
  const handleChangeStates = (field, value) => {
    saveSubDocument(field, value);
  };

  return (
    <div>
      <Range
        title="Resistencia normal"
        name="resistence.normal"
        min={10}  
        max={200}
        step={10}
        value={card.resistence.normal}
        setValue={(e) => handleChangeStates("resistence.normal", Number(e))}
        points={card.points.resistences}
      />
      <Range
        title="Resistencia fuego"
        name="resistence.fire"
        min={10}
        max={200}
        step={10}
        value={card.resistence.fire}
        setValue={(e) => handleChangeStates("resistence.fire", Number(e))}
        points={card.points.resistences}
      />
      <Range
        title="Resistencia electrico"
        name="resistence.electric"
        min={10}
        max={200}
        step={10}
        value={card.resistence.electric}
        setValue={(e) => handleChangeStates("resistence.electric", Number(e))}
        points={card.points.resistences}
      />
      <Range
        title="Resistencia Veneno"
        name="resistence.poison"
        min={10}
        max={200}
        step={10}
        value={card.resistence.poison}
        setValue={(e) => handleChangeStates("resistence.poison", Number(e))}
        points={card.points.resistences}
      />
      <Range
        title="Resistencia Sangrado"
        name="resistence.blood"
        min={10}
        max={200}
        step={10}
        value={card.resistence.blood}
        setValue={(e) => handleChangeStates("resistence.blood", Number(e))}
        points={card.points.resistences}
      />
    </div>
  );
};

export default Resistances;
