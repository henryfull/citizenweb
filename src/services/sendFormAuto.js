import { Api } from "../helpers/utils";
import { fetx } from "./fetch";
import Cookies from "js-cookie";

export const sendFormAuto = async (auto, profile, clearFields) => {
  let formData = new FormData();
  let arrayFiles = auto.files;
  // formData.append("PID", Cookies.get("PID"));
  if (arrayFiles) {
    for (const item of arrayFiles) {
      if (item) {
        formData.append("file", item.file, item.name);
      }
    }
  }

  // Obtienes las key de la array Auto
  let keysAuto = Object.keys(auto);
  // Obtiene los valores de la array Auto
  let valuesAuto = Object.values(auto);
  // Recorre todos los campos de la array de Auto y los inserta en el formData
  valuesAuto.forEach(async (item, i) => {
    await formData.append(keysAuto[i], item);
  });

  // Obtienes las key de la array Profile
  let keysProfile = Object.keys(profile);
  // Obtiene los valores de la array Profile
  let valuesProfile = Object.values(profile);
  // Recorre todos los campos de la array de Profile y los inserta en el formData
  valuesProfile.forEach(async (item, i) => {
    if (keysProfile[i] === "storage") {
      formData.append("GDPR.storage", item);
    } else if (keysProfile[i] === "customContent") {
      formData.append(`GDPR.${keysProfile[i]}`, item);
    } else if (keysProfile[i] === "createProfile") {
      formData.append(`GDPR.${keysProfile[i]}`, item);
    } else if (keysProfile[i] === "develop") {
      formData.append(`GDPR.${keysProfile[i]}`, item);
    } else if (keysProfile[i] === "geolocation") {
      formData.append(`GDPR.${keysProfile[i]}`, item);
    } else if (keysProfile[i] === "marketing") {
      formData.append(`GDPR.${keysProfile[i]}`, item);
    } else if (keysProfile[i] === "specifications") {
      formData.append(`GDPR.${keysProfile[i]}`, item);
    } else {
      formData.append(keysProfile[i], item);
    }
  });

  if (!profile.idUser) {
    formData.append("roles", ["5f7cd3a74001b429e9bab7ed"]);
  }

  if (profile.account.rol === "company") {
    formData.append("idCompany", profile.account.id);
  }
  var url = Api("auto/");

  console.log(formData.get('coordinates'))

  return await fetx.file(url, "", formData).then((res) => {
    if (res) {
      sessionStorage.setItem("autotemp", JSON.stringify(res.auto));
      setTimeout(() => {
        clearFields();
      }, 1000);

      if (Cookies.get("jwt")) {
        return "/miscoches";
        //   history.push("/micoche/" + res.auto._id);
      } else {
        return "/thanks/" + res.auto._id;
        //   history.push("/thanks/" + res.auto._id);
      }
    }
  });
};
