import { Api } from "../helpers/utils";

const SendMetada = () => {
  let seconds = 6000;
  // Alerta si intentas salir de la pagina
  let metadata = JSON.parse(sessionStorage.getItem("meta"));
  if (metadata) {
    sessionStorage.removeItem("meta");
    metadata = false;
  }

  if (process.env.NODE_ENV !== "development") {
    window_mouseout(document, "mouseout", (event) => {
      metadata = JSON.parse(sessionStorage.getItem("meta"));
      if (!metadata) {
        event = event ? event : window.event;
        var from = event.relatedTarget || event.toElement;
        // Si quieres que solo salga una vez el mensaje borra lo comentado
        // y así se guarda en localStorage
        let leftWindow = localStorage.getItem("leftWindow") || false;
        if (!leftWindow && (!from || from.nodeName === "HTML")) {
          // Haz lo que quieras aquí
          sendMetaData();
          // localStorage.setItem( 'leftWindow', true );
        }
      }
    });
  }
  // Funcion Alerta si intentas salir de la pagina
  function window_mouseout(obj, evt, fn) {
    if (obj.addEventListener) {
      obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
      obj.attachEvent("on" + evt, fn);
    }
  }

  const sendMetaData = () => {
    let today = new Date();
    let data = JSON.parse(sessionStorage.getItem("profile"));
    data.endSession = today;
    data.path = window.location.pathname;
    fetch(Api("metadata"), {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        // console.log('Success:', data);
        sessionStorage.setItem("meta", true);
        setTimeout(() => {
          sessionStorage.removeItem("meta");
        }, seconds);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

export default SendMetada;
