import {fetx} from './fetch'
import { Api } from "../helpers/utils";

/**
 * 
 * @param {String} route | Ruta en la que hacer la peticion
 * @param {String} params | Parametros que se pasan en la ruta
 */
const DeleteItem = (route, option, params) => {

  let url = Api(`${route}/${params}`);
  return fetx
    .delete(url, option)
    .then((res) => {
      if (res) {
        return true;
      } else {
        return res || false;
      }
    })
    .catch((err) => {
      console.error("ha habido un problem al actualizar", err);
      return false;
    });
};

export default DeleteItem;
