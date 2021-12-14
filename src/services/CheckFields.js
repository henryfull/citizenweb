import {fieldsAuto} from '../data/options'

export const CheckFields =  async (auto,  param ) => {
  return await new Promise((res, rej) => {
    let result = true;
    for (let i = 0; i < fieldsAuto[param].length; i++) {
      const element = fieldsAuto[param][i];
      if (auto[element] === undefined) result = false;
    }
    res(result);
  });
};
