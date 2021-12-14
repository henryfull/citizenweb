 // Muestra las notificaciones
 
 /**
  * Muestra una notificacion al usuario
  * @param {String} title | Titulo que se mostrara en la notificacion
  * @param {String} body | Cuerpo del mensaje
  * @param {Boolean} requireInteraction | Si el usuario tiene que hacer click o no para quita la notificacion
  */
 const sendNotification = (title, body, route, requireInteraction ) => {
    var options = {
      body: body,
      action: "archive",
      dir: 'ltr',
      icon: "https://checkauto.es/logo192.png",
      badge: "https://checkauto.es/logo192.png",
      image: "https://www.gravatar.com/avatar/1b36e938dd2fdc7991bc0e6c98cf8bbf",
      tag: "song",
      lang: "es",
      data: "I like peas.",
      song: "../../../assets/audio/plup.mp3",
      renotify: true,
      requireInteraction: requireInteraction, 
      vibrate: [200, 100, 200]
    };

    // Comprobamos si el navegador soporta las notificaciones
    if (!("Notification" in window)) {
      alert("Este navegador no soporta las notificaciones del sistema");
    }
    // Comprobamos si ya nos habían dado permiso
    else if (Notification.permission === "granted") {
      // Si esta correcto lanzamos la notificación
      var notification = new Notification(title, options);
      notification.onclick = function(event) {
          window.open(route, '_blank');
      }
    }

    // Si no, tendremos que pedir permiso al usuario
    else if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
        // Si el usuario acepta, lanzamos la notificación
        if (permission === "granted") {
            // var notification = new Notification(title, options);

        }
      });
    }

    // console.log(notification);
    // Finalmente, si el usuario te ha denegado el permiso y
    // quieres ser respetuoso no hay necesidad molestar más.
  };

  export default sendNotification