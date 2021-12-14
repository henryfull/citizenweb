import { nanoid } from "nanoid";
import { card, effects, skills } from "../data/char";
import { moves } from "../data/moves";

/**
 * Establece todos los valores del jugador en base a los datos proporcionados
 * @param {Number} lvl | Numbero del nivel del personaje
 * @param {String} typeCharacter | El tipo de personaje
 * @param {String} name | Nombre del jugador
 */
export const setCardToken = async (
  lvl,
  typeCharacter,
  namePlayer,
  _id,
  token,
  num
) => {
  let id = nanoid();
  const {
    rarity,
    block,
    aboutme,
    file,
    background,
    imageCharacter,
    faction,
    name,
  } = token;

  console.log(token)

  let playerDefault = await setCharacters(typeCharacter, rarity.name);
  let data = {
    _id: id,
    name: namePlayer,
    namecard: name,
    faction: faction.name,
    aboutme: aboutme,
    file: file,
    image: imageCharacter.name,
    background: background.name,
    typeToken: "card",
    race : typeCharacter,
    block: block.name,
    rarity: rarity.name,
    level: card.level * lvl,
    count: 1,
    effect: playerDefault.basic[2],
    slots: card.slots,
    states:{
      energyBase: card.attributes.energyBase + playerDefault.energyBase,
      energy: card.attributes.energy + playerDefault.energy,
      affinity: card.attributes.affinity,
      strength: card.attributes.strength * lvl + playerDefault.basic[0],
      precision: card.attributes.precision + playerDefault.precision,
      armor: card.attributes.armor + playerDefault.armor,
      dodge: card.attributes.dodge + playerDefault.dodge,
      influence: card.attributes.influence + playerDefault.influence,
      knowlegde: card.attributes.knowlegde + playerDefault.knowlegde,
      shield: playerDefault.shield * lvl + card.attributes.shield,
      maxshield: playerDefault.shield * lvl + card.attributes.shield,
      life: (card.attributes.life * lvl + playerDefault.life) * 2,
      maxlife: (card.attributes.life * lvl + playerDefault.life) * 2,
      
    },
    resistence: {
      normal: card.resistence.normal * lvl + playerDefault.resistence[0],
      fire: playerDefault.resistence[1],
      electric: playerDefault.resistence[2],
      poison: playerDefault.resistence[3],
      blood: playerDefault.resistence[4],
      pure: playerDefault.resistence[5],
      total:
        card.resistence.normal * lvl +
        playerDefault.resistence[0] +
        playerDefault.resistence[1] +
        playerDefault.resistence[2] +
        playerDefault.resistence[3] +
        playerDefault.resistence[4] +
        playerDefault.resistence[5],
    },
    recovery:{
      life: playerDefault.recovery[0],
      shield: playerDefault.recovery[1],
    },
    skills: [
       {
        code: '0000',
        cost: card.skills[0].cost + playerDefault.basic[1],
        strength: card.attributes.strength * lvl + playerDefault.basic[0],
        effect: playerDefault.basic[2],
        name: setNameEffect(playerDefault.basic[2]),
        status: true,
        type: 'active',
        description: 'basic atack',
        cooldown: 0,
        multiplier: 100,
        color:"white"
      },
     {
        code: skills[(num * 3) + 0].code,
        name: skills[(num * 3) + 0].name,
        description: skills[(num * 3) + 0].description,
        cost: skills[(num * 3) + 0].cost,
        turn: skills[(num * 3) + 0].cooldown,
        status: skills[(num * 3) + 0].status,
        type: skills[(num * 3) + 0].type,
        cooldown: skills[(num * 3) + 0].cooldown + 2,
      },
      {
        code: skills[(num * 3) + 1].code,
        name: skills[(num * 3) + 1].name,
        description: skills[(num * 3) + 1].description,
        cost: skills[(num * 3) + 1].cost,
        turn: skills[(num * 3) + 1].cooldown,
        status: skills[(num * 3) + 1].status,
        type: skills[(num * 3) + 1].type,
        cooldown: skills[(num * 3) + 0].cooldown + 2,
      },
       {
        code: skills[(num * 3) + 2].code,
        name: skills[(num * 3) + 2].name,
        description: skills[(num * 3) + 2].description,
        cost: skills[(num * 3) + 2].cost,
        turn: skills[(num * 3) + 2].cooldown,
        status: skills[(num * 3) + 2].status,
        type: skills[(num * 3) + 2].type,
        cooldown: skills[(num * 3) + 0].cooldown + 2,
      },
    ],
    defense: {
      block: {
        strength: card.defense.block.strength * lvl + playerDefault.defense[0],
        cost: card.defense.block.cost,
        description: card.defense.description,
        name: card.defense.block.name
      },
      shield: {
        strength: card.defense.shield.strength * lvl + playerDefault.defense[1],
        cost: card.defense.shield.cost,
        description: card.defense.shield.description,
        name: 'shield',
        color: "#57F9FE",
        code: "shield"
      },
    },
    change: {
      name: 'change',
      cost: 50,
      description: card.change.description,
      color: "#FE6A57",
      code: "swap"
    },
  };
  data.skills_combat = data.skills;
  data.power = getPowerful(data);

  return data;
};

const setNameEffect = (effect) => {
  let nameEffect = effect;
  if (effect === "blood") nameEffect = "DARK";
  if (effect === "pure") nameEffect = "FIGHTING";

  let filterMoves = moves.filter(
    (item) => item.type.toLowerCase() === nameEffect.toLowerCase()
  );
  let move = filterMoves[randomMinMax(0, filterMoves.length - 1)];
  return move.name;
};

/**
 * Se suman todos los states para obtener su poder total
 * @param {Object} player | Objeto del jugador
 */
const getPowerful = (player) => {
  let sum = 0;
  Object.values(player).forEach((item) => {
    if (!isNaN(item)) sum += Number(item);
  });
  Object.values(player.attributes).map((item) => (sum += Number(item)));
  console.log(sum)
  // Object.values(player.resistence).map((item) => (sum += item));
  return sum;
};

const multiplierRarity = (rarity) => {
  if (rarity === "legendary") return randomMinMax(3, 4) * 10;
  if (rarity === "epic") return randomMinMax(2, 3) * 10;
  if (rarity === "rare") return randomMinMax(1, 2) * 10;
  if (rarity === "uncommon") return 10;
  if (rarity === "common") return 0;
};

const getEffect = () => {
  let num = randomMinMax(0, 4);
  return Object.keys(effects)[num];
};

/**
 * Establece los valores segun personaje
 * @param {String} params | Nombre del personaje a establecer
 */
export const setCharacters = (params, rarity) => {
  let multiplier = multiplierRarity(rarity);
    return {
      energyBase: randomMinMax(1, 4) * 10 + multiplier,
      energy: randomMinMax(2, 5) * 10 + multiplier,
      precision: randomMinMax(50, 100) + multiplier,
      shield: randomMinMax(1, 20) + multiplier,
      armor: randomMinMax(1, 20) + multiplier,
      dodge: randomMinMax(1, 20) + multiplier,
      recovery: [randomMinMaxDecimals(0.5, 1) , randomMinMaxDecimals(0.2, 0.5) ],
      resistence: [
        randomMinMaxResistence(0, 20 + multiplier, "normal", getEffect()),
        randomMinMaxResistence(0, 20 + multiplier, "fire", getEffect()),
        randomMinMaxResistence(0, 20 + multiplier, "electic", getEffect()),
        randomMinMaxResistence(0, 20 + multiplier, "blood", getEffect()),
        randomMinMaxResistence(0, 20 + multiplier, "water", getEffect()),
      ],
      strength: randomMinMax(10, 20) + multiplier,
      influence: randomMinMax(5, 10) + multiplier,
      knowlegde: randomMinMax(40, 60) + multiplier,
      life: randomMinMax(1, 5) * 100 + multiplier,
      basic: [randomMinMax(5, 10) + multiplier, 10, getEffect()],
      strong: [randomMinMax(15, 30) + multiplier, 10, getEffect()],
      special: [randomMinMax(10, 20) + multiplier, 20, getEffect()],
      defense: [randomMinMax(10, 20) + multiplier, randomMinMax(10, 30)],
      skill: [randomMinMax(150, 300) + multiplier, ""],
    };

};

/**
 * Genera un numero entero aleatorio teniendo en cuenta el numero maximo que puede tener
 * @param {Number} max | Numero maximo a utilizar para crear un numero random
 */
export const getRadomNum = (max) => {
  return Math.round(Math.random() * max);
};

/**
 * Genera un numero aleatorio entre dos numeros
 * @param {Number} min | Numero minimo para hacer un random
 * @param {Number} max | Numero maximo para hacer un random
 */
export const randomMinMax = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const randomMinMaxDecimals = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

/**
 * Genera un numero aleatorio entre dos numeros
 * @param {Number} min | Numero minimo para hacer un random
 * @param {Number} max | Numero maximo para hacer un random
 */
const randomMinMaxResistence = (min, max, name, effect) => {
  if (name === effect) {
    max = +50;
  }
  return Math.round(Math.random() * (max - min) + min);
};

const createcodes = () => {
  let codes = [];
  for (let i = 0; i < 35; i++) {
    if (i < 10) codes.push("000" + i);
    else codes.push("00" + i);
  }
  return codes;
};

export const codes = [createcodes()];
