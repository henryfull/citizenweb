import React from "react";
import Range from "../../Atoms/Range/index.jsx";

const States = ({ card, saveSubDocument }) => {
  const handleChangeStates = (field, value) => {
    saveSubDocument(field, value);
  };
  console.log(card);
  let max = 100 * card.level;
  if (card.level > 1) {
    max = 100 * (card.level / 2);
  }
  return (
    <div>
      {/* <Range
        title="Energia base"
        name="attributes.energyBase"
        min={0}
        max={max}
        step={10}
        value={card.attributes.energyBase}
        setValue={(e) => handleChangeStates("attributes.energyBase", Number(e))}
        points={card.points.attributes}
      /> */}
      <Range
        title="Escudo valor"
        name="defense.shield.strength"
        min={0}
        max={100}
        step={10}
        value={card.defense.shield.strength}
        setValue={(e) => handleChangeStates("defense.shield.strength", Number(e))}
        points={100}
      />
      <Range
        title="Escudo Coste"
        name="defense.shield.cost"
        min={0}
        max={100}
        step={10}
        value={card.defense.shield.cost}
        setValue={(e) => handleChangeStates("defense.shield.cost", Number(e))}
        points={100}
      />
      <Range
        title="Bloqueo valor"
        name="defense.block.strength"
        min={0}
        max={100}
        step={10}
        value={card.defense.block.strength}
        setValue={(e) => handleChangeStates("defense.block.strength", Number(e))}
        points={100}
      />
      <Range
        title="Bloqueo Coste"
        name="defense.block.cost"
        min={0}
        max={100}
        step={10}
        value={card.defense.block.cost}
        setValue={(e) => handleChangeStates("defense.block.cost", Number(e))}
        points={100}
      />
      <Range
        title="Fuerza"
        name="attributes.strength"
        min={0}
        max={max * 2}
        step={10}
        value={card.attributes.strength}
        setValue={(e) => handleChangeStates("attributes.strength", Number(e))}
        points={card.points.attributes}
      />
      <Range
        title="Vida"
        name="attributes.life"
        min={500}
        max={max * 15}
        step={100}
        value={card.attributes.life}
        setValue={(e) => handleChangeStates("attributes.life", Number(e))}
        points={card.points.attributes}
      />
      <Range
        title="Escudo"
        name="attributes.shield"
        min={10}
        max={max}
        step={10}
        value={card.attributes.shield}
        setValue={(e) => handleChangeStates("attributes.shield", Number(e))}
        points={card.points.attributes}
      />
      <Range
        title="Energia"
        name="attributes.energy"
        min={0}
        max={max}
        step={10}
        value={card.attributes.energy}
        setValue={(e) => handleChangeStates("attributes.energy", Number(e))}
        points={card.points.attributes}
      />
      <Range
        title="Afinidad"
        name="attributes.affinity"
        min={0}
        max={1}
        step={1}
        value={card.attributes.affinity}
        setValue={(e) => handleChangeStates("attributes.affinity", Number(e))}
        points={card.points.attributes}
      />

      <Range
        title="Precision"
        name="attributes.precision"
        min={0}
        max={max}
        step={10}
        value={card.attributes.precision}
        setValue={(e) => handleChangeStates("attributes.precision", Number(e))}
        points={card.points.attributes}
      />
      <Range
        title="Armadura"
        name="attributes.armor"
        min={0}
        max={max}
        step={10}
        value={card.attributes.armor}
        setValue={(e) => handleChangeStates("attributes.armor", Number(e))}
        points={card.points.attributes}
      />
      <Range
        title="Esquivar"
        name="attributes.dodge"
        min={0}
        max={max}
        step={10}
        value={card.attributes.dodge}
        setValue={(e) => handleChangeStates("attributes.dodge", Number(e))}
        points={card.points.attributes}
      />
      <Range
        title="Influencia"
        name="attributes.influence"
        min={0}
        max={max}
        step={10}
        value={card.attributes.influence}
        setValue={(e) => handleChangeStates("attributes.influence", Number(e))}
        points={card.points.attributes}
      />
      <Range
        title="Conocimiento"
        name="attributes.knowlegde"
        min={0}
        max={max}
        step={10}
        value={card.attributes.knowlegde}
        setValue={(e) => handleChangeStates("attributes.knowlegde", Number(e))}
        points={card.points.attributes}
      />

      {/* <Range
        title="Escudo maximo"
        name="attributes.maxshield"
        min={0}
        max={100}
        step={10}
        value={card.attributes.maxshield}
        setValue={(e) => handleChangeStates("attributes.maxshield", Number(e))}
      /> */}
      {/* <Range
        title="vida maxima"
        name="attributes.maxlife"
        min={0}
        max={100}
        step={10}
        value={card.attributes.maxlife}
        setValue={(e) => handleChangeStates("attributes.maxlife", Number(e))}
      /> */}
    </div>
  );
};

export default States;
