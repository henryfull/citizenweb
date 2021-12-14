import { Api } from "../helpers/utils";
import {fetx} from './fetch'

/**
 * 
 * @param {String} route | Ruta en la que hacer la peticion
 * @param {String} params | Parametros que se pasan en la ruta
 * @param {Object} data | Datos que se quieren enviar para actualizar
 * @param {Object} option | Cabeceras que van con la petición
 */
const PutItem = (route, params, data, option) => {
  let url = Api(`${route}/${params}`);
  return fetx.put(url, option, data)
    .then((res) => {
        return res;
    })
    .catch((err) => {
      console.error("ha habido un problem al actualizar", err);
      return false;
    });
};

export default PutItem;
