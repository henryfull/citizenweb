import { Datacars } from "../helpers/utils";
import {fetx} from './fetch'

/**
 * Devuelve los objectos que se piden por parametro
 * @param {String} route | Ruta donde queremos acceder a la información
 * @param {String} params | Parametros que se envian en la petición
 * @param {Object} option | Cabecera de la petición
 */
const getDatacars = (route, params, option) => {
  const url = Datacars(`${route}/${params}`);
  return fetx.get(url, option)
    .then(async (res) => {
      if (res) {
        return res;
      } else return false;
    })
    .catch((err) => {
      console.error("no se ha podido conectar", err);
      return false;
    });

};
export default getDatacars;