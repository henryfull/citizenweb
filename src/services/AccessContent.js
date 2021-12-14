import { roles } from "../data/options";

/**
 * Comprueba si el usuario es el mismo de la url o si tiene los roles para poder acceder
 * @param {String} id | Identificación del usuario
 */
const AccessContent = (id) => {
  let profile = JSON.parse(sessionStorage.getItem('profile'))
    let access = false;

    for (const item of profile.rols) {
      if (item === sessionStorage.getItem("roles")) {
        access = true;
      }
    }

    if (id === profile.account.id) {
      access = true;
    } else {
      for (const item of roles) {
        if (item === sessionStorage.getItem("roles")) {
          access = true;
        }
      }
    }
    return access;
  };

  export default AccessContent;