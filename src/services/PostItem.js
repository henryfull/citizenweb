import {useContext} from 'react'
import {fetx} from './fetch'
import { Api } from "../helpers/utils";
import {Context} from './Context'

/**
 * 
 * @param {String} route | Ruta en la que hacer la peticion
 * @param {String} params | Parametros que se pasan en la ruta
 * @param {Object} data | Datos que se quieren enviar para actualizar
 * @param {Object} option | Cabeceras que van con la petición
 */
const PostItem = (route, params, data) => {
const {option} = useContext(Context)
  let url = Api(`${route}/${params}`);
  return fetx
    .post(url,option, data)
    .then((res) => {
      if (res) {
        return res;
      } else {
        return res || false;
      }
    })
    .catch((err) => {
      console.error("ha habido un problem al actualizar", err);
      return false;
    });
};

export default PostItem;
