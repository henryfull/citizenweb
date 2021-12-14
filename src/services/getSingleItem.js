import { Api } from "../helpers/utils";
import {fetx} from './fetch'

/**
 * 
 * @param {String} route | ruta para la peticion 
 * @param {Object} option | Cabeceras de la peticion 
 * @param {String} params | parametros que acompañan la ruta
 */
const getSingleItem = (route, option, params) => {
  const url = Api(`${route}/${params}`);
  return fetx.get(url, option)
    .then((res) => {
        return res;
    })
    .catch((err) => {
      console.error("no se ha podido conectar", err);
      return false;
    });

};
export default getSingleItem;