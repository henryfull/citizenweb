import React, { Component } from "react";
import {  Api } from "../helpers/utils";

import properties from "../data/properties.json";
export const p = properties[0];

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      submit: false,
    };
    this.handleFieldFormChange = this.handleFieldFormChange.bind(this);
    this.fetchUsername = this.fetchUsername.bind(this);
    this.fetchEmail = this.fetchEmail.bind(this);
    this.handleSumitClick = this.handleSumitClick.bind(this);
  }

  /**
   * Se utiliza para dar insertar los valores en el input cada vez que se pulsa una tecla, ademas de dar valor al estado
   * relacionado con el valor
   * @param {string} e
   */
  async handleFieldFormChange(e) {
    if (e.target.id === "username") {
      this.setState({ username: e.target.value });
      if (this.fetchUsername(e.target.value)) {
      }
    } else if (e.target.id === "email") {
      this.setState({ email: e.target.value });
      if (this.fetchEmail(e.target.value) === "existe") {
      }
    } else if (e.target.id === "password") {
      this.setState({ password: e.target.value });
    } else if (e.target.id === "confirm_password") {
      await this.setState({ confirm_password: e.target.value });
      if (this.state.confirm_password !== this.state.password) {
        // ToastsStore.error(`Las constraseñas no coinciden!`);
      } else {
        console.log("la contraseña es igual");
        // ToastsStore.success(`La constraseñas son iguales!`);
      }
      console.log(this.state.confirm_password, this.state.password);
    }
  }

  /**
   * Comprueba que en la base de datos si el usuario existe o no para poder registrarse
   * @param {string} element
   */
  fetchUsername(element) {
    const url = process.env.PUBLIC_URL + "username";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.map((item, cb) => {
          if (item.username.toLowerCase() === element.toLowerCase()) {
            // ToastsStore.error(`El username ${item.username.toLowerCase()} ya existe!`);
          }
          return item;
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  /**
   * Comprueba si el email existe en la base de datos par poder registrarse
   * @param {string} element
   */
  fetchEmail(element) {
    const url = Api("email");

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.map((item, cb) => {
          if (item.email.toLowerCase() === element.toLowerCase()) {
            // ToastsStore.error(`El email ${element.toLowerCase()} ya existe!`)
          }
          return item;
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  /**
   * Cuando se le da al boton de enviar el evento, este envia a la base de datos los para realizar el registro
   * @param {*} e
   */
  handleSumitClick(e) {
    // Prevent default es para evitar que haga la accion se produce cuando se hace click en un boton de un formulario
    e.preventDefault();
    const { username, email, password } = this.state;
    //    var url = 'http://localhost/api/username';
    //    var data = { username, email, password };

    var url = Api("user");
    var data = { username, email, password, id_iso_lang: "es" };
    console.log(data);
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Success:", res);
        //    ToastsStore.success(`Te has registrado con exito`);
      })
      .catch((error) => console.error("Error:", error));
  }

  render() {
    return (
      <div className="Register">
        <div className="col-m-6 col-s-12 mga">
          <div className="box">
            <div className="box-header mg_6">
              <h3>{p.msg_register}</h3>
            </div>
            {/* <ToastsContainer position={ToastsContainerPosition.TOP_RIGHT} store={ToastsStore} lightBackground /> */}

            <div className="box-body center-content">
              <form
                onSubmit={this.handleSumitClick}
                method="POST"
                className="form-minimal col-s-12 col-t-9 col-l-6 box-border br1 bgwhite  ma mb4"
              >
                <div className="form-group">
                  <input
                    type="text"
                    placeholder={p.msg_firstname}
                    id="username"
                    name="username"
                    className="form-control"
                    value={this.state.username}
                    required
                    onChange={this.handleFieldFormChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder={p.msg_Email}
                    id="email"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    required
                    onChange={this.handleFieldFormChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder={p.msg_Pass}
                    id="password"
                    name="password"
                    className="form-control"
                    value={this.state.password}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="La contraseña debe de tener Mayusculas, minusculas y y numeros"
                    required
                    onChange={this.handleFieldFormChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder={p.msg_repit_pass}
                    id="confirm_password"
                    name="confirm_password"
                    value={this.state.confirm_password}
                    className="form-control"
                    required
                    onChange={this.handleFieldFormChange}
                  />
                </div>
                <div className="form-group text-center">
                  <button
                    className="defaultbc pd_2 white radius_5"
                    type="submit"
                  >
                    {p.msg_register_me}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
