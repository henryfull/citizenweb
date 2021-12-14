import controller from "../pages/Game/Services/controller";


const downgradeLife = ({
  currentCardTemp,
  enemyCardTemp,
  currentPlayerTemp,
  enemyPlayerTemp,
  actions,
  damage,
  checkEndGame,
}) => {
  let mirrorDamage = 0;
  let block = currentCardTemp.block;
  let precision = currentCardTemp.attributes.precision;
  let enemyCard = enemyCardTemp;
  let shield = enemyCard.attributes.shield;
  let effect = controller.checkCounterElements(
    currentCardTemp.effect,
    enemyCard
  );
  let numRandom = controller.randomMinMax(30, 100);
  // Esquivar
  let dodge = enemyCard.attributes.dodge;

  // cambia el valor dependiendo del bloque
  let multiplier = controller.multiplierBlock(block, enemyCard.block);

  precision += numRandom;
  numRandom = controller.randomMinMax(30, 100) / 100;
  precision = (precision / dodge) * numRandom;
  let powerAtack = damage;
  if (precision >= 1 && precision <= 3) {
    powerAtack = Math.round(powerAtack * multiplier);
    powerAtack = Math.round(powerAtack * effect);
  } else if (precision > 3) {
    powerAtack = Math.round(powerAtack * multiplier);
    powerAtack = Math.round(powerAtack * effect);
    powerAtack *= 1.3;
  } else {
    powerAtack = 0;
  }

  if (powerAtack !== 0) {
    for (const action of actions) {
      if (action.trigger === "damage") {
        if (action.action === "take") {
          mirrorDamage = Math.round((powerAtack * 20) / 100);
          currentCardTemp.attributes.life -= mirrorDamage;
        } else if (action.action === "give") {
          if (action.attributes === "life") {
            if (enemyCardTemp._id === action.to._id) {
              if (action.duration > 0) {
                enemyCardTemp.attributes.life += powerAtack;
                powerAtack = 0;
              }
            }
          } else if (action.attributes === "energy") {
            if (enemyCardTemp._id === action.to._id) {
              if (action.duration > 0) {
                enemyPlayerTemp.energy += powerAtack;
                powerAtack = 0;
              }
            }
          }
        } else if (action.action === "limit") {
          if (enemyCardTemp._id === action.to._id) {
            if (action.cooldown > 0) {
              action.cooldown = 0;
              action.permanent = false;
            }
          }
        } else if (action.action === "dodge") {
          if (enemyCardTemp._id === action.to._id) {
            if (action.cooldown > 0) {
              dodge += Number(action.value);
            }
          }
        }
      }
      if (action.trigger === "inmune") {
        if (enemyCardTemp._id === action.to._id) {
          if (action.duration > 0) {
            powerAtack = 0;
          }
        }
      }
    }
  }

  let lifetemp = shield - powerAtack;

  if (lifetemp < 0) {
    shield = 0;
    powerAtack = Math.abs(lifetemp);
  } else {
    shield = lifetemp;
    powerAtack = 0;
  }
  let lifeEnemy = enemyCard.attributes.life - powerAtack;
  if (lifeEnemy < 0) lifeEnemy = 0;
  if (lifeEnemy > enemyCardTemp.attributes.maxlife) {
    lifeEnemy = enemyCardTemp.attributes.maxlife;
  }

  enemyCardTemp.attributes.life = lifeEnemy;
  enemyCardTemp.attributes.shield = shield;

  if (lifeEnemy <= 0) {
    let newcard = controller.checkLife(enemyPlayerTemp.team);

    if (newcard) {
      let newCards = controller.swapDieCard(enemyPlayerTemp.team);
      actions = controller.checkActionsFordDead(enemyCardTemp._id, actions);
      enemyCardTemp = newcard;
      // const { newCard, playerTemp } = SwitchCardForDead(
      //   enemyPlayerTemp,
      //   enemyCardTemp
      // );
      // actions = controller.checkActionsFordDead(enemyCardTemp._id, actions);
      // enemyCardTemp = newCard;
      // enemyPlayerTemp = playerTemp;
      enemyCardTemp.team = newCards
    } else {
      console.log("Se ha terminado el partida");
      checkEndGame(true);
    }

    // if (!survive) {
    //   console.log("Se ha terminado el partida");
    //   checkEndGame(true);
    // }
  }

  return {
    currentCardTemp,
    enemyCardTemp,
    currentPlayerTemp,
    enemyPlayerTemp,
    actions,
  };
};

export default downgradeLife;
