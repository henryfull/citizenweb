import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { nanoid } from "nanoid";

import { Context } from "../../services/Context";
import {setCookies} from '../../helpers/utils'
import { ConsentInit, Div } from "./styles";
import Switch from "../Atoms/Switch/index";
import Modal from "../Atoms/Modal/index";

export const ConsentCookies = ({ show }) => {
  const {
    updateAnyFields,
    updateOnlyField,
    metadata,
    profile,
    auto,
    isAuth
  } = useContext(Context);
  const [consentCookies, setConsentCookies] = useState(() => {
    if (profile?.consentCookies === false) return false;
    else return true;
  });

  const [showModal, setShowModal] = useState(show || false);
  const [storage, setStorage] = useState( profile?.storage || true);
  const [geolocation, setGeolocation] = useState(true);
  const [analytics, setAnalytics] = useState(true);
  const [develop, setDevelop] = useState(true);
  const [marketing, setMarketing] = useState(true);
  const [customContent, setCustomContent] = useState(profile?.customContent || true);
  const [createProfile, setCreateProfile] = useState(true);
  const [specifications, setSpecifications] = useState(true);
  const [update, setupdate] = useState(false);

  useEffect(() => {
    setProfiles();
    // eslint-disable-next-line
  }, [consentCookies]);
  
  useEffect(() => {
    if (isAuth) setConsentCookies(false)
  }, [isAuth])

  // console.log(Cookies.get("PID"));
  if (Cookies.get("PID") === null || Cookies.get("PID") === undefined || !Cookies.get("PID")) {
    let id = nanoid();
    // Cookies.set("PID", id);
    setCookies("PID", id);
  }
  else{
    // console.log("si pid", Cookies.get("PID"))
  }

  const setProfiles = async () => {
    let today = new Date();

    if (!auto.PID) {
      updateOnlyField("PID", Cookies.get("PID"), 'auto');
    }
    if (!metadata.PID) {

      await updateAnyFields([
        { PID: Cookies.get("PID") },
        { screenWith: window.innerWidth },
        { screenHeight: window.innerHeight },
        { screenAvailWidth: window.screen.availWidth },
        { screenAvailHeight: window.screen.availHeight },
        { colorDepth: window.screen.colorDepth },
        { pixelDepth: window.screen.pixelDepth },
        { language: navigator.language },
        { platform: navigator.platform },
        { userAgent: navigator.userAgent },
        { appVersion: navigator.appVersion },
        { storage },
        { geolocation },
        { analytics },
        { develop },
        { marketing },
        { customContent },
        { createProfile },
        { specifications },
        {startSession: today},
        { theme: "lightmode" },
      ], 'metadata');
    }
    if (!profile.PID) {
      updateAnyFields([{"PID": Cookies.get("PID")}, {
        account:{
          id: '',
          email: '',
          name: 'nologin',
          avatar: 'nologin',
          notifications: null
        }
      }], 'profile');
    }
  };

  const handleChangeStore = (value) => {
    updateOnlyField("storage", value, 'profile');
    setStorage(value);
  };

  const handleChangeAnalytics = (value) => {
    updateOnlyField("analytics", value, 'profile');
    setAnalytics(value);
  };

  const handleChangeMarketing = (value) => {
    updateOnlyField("marketing", value, 'profile');
    setMarketing(value);
  };

  const handleChangeDevelop = (value) => {
    updateOnlyField("develop", value, 'profile');
    setDevelop(value);
  };
  const handleChangeCustomContent = (value) => {
    updateOnlyField("customContent", value, 'profile');
    setCustomContent(value);
  };

  const handleChangeSpecifications = (value) => {
    updateOnlyField("specifications", value, 'profile');
    setSpecifications(value);
  };

  const handleChangeCreateProfile = (value) => {
    updateOnlyField("createProfile", value, 'profile');
    setCreateProfile(value);
  };
  const handleChangeGeolocation = (value) => {
    updateOnlyField("geolocation", value, 'profile');
    setGeolocation(value);
  };

  const handleClickChangeAll = (option) => {
    console.log("entro", option);
    setStorage(option);
    setGeolocation(option);
    setAnalytics(option);
    setDevelop(option);
    setMarketing(option);
    setCustomContent(option);
    setCreateProfile(option);
    setSpecifications(option);
    setupdate(!update);

    updateAnyFields([
      { storage: option },
      { geolocation: option },
      { analytics: option },
      { develop: option },
      { marketing: option },
      { customContent: option },
      { createProfile: option },
      { specifications: option },
      { consentCookies: false },
    ], 'profile');
  };

  const handleClickConsentCookies = () => {
    setConsentCookies(false);
    handleClickChangeAll(true);
  };

  const handleCloseAndAcept = () => {
    setConsentCookies(false);
    setShowModal(false);
    updateOnlyField("consentCookies", false, 'profile');
  };

  return (
    <>
      {consentCookies && (
        <ConsentInit className="w100 pd_2">
          <p className="font_12 white txt">
            Con su acuerdo, nosotros y nuestros socios usamos cookies o
            tecnologías similares para almacenar, acceder y procesar datos
            personales como su visita en este sitio web. Puede retirar su
            consentimiento u oponerse al procesamiento de datos basado en
            intereses legítimos en cualquier momento haciendo clic en
            <span onClick={() => setShowModal(true)}> "Configuración"</span> o en nuestra <Link className="blue" to="/politica-privacidad"> Política de Cookies </Link> en este sitio web.
          </p>
          <div className="grid col2 gap">
            <button
              className="bgblack pd_2 mg_1 white font_12"
              onClick={() => setShowModal(true)}
            >
              Configuración
            </button>
            <button
              className="bggreen pd_2 mg_1 white font_14 radius_5"
              onClick={handleClickConsentCookies}
            >
              Aceptar
            </button>
          </div>
        </ConsentInit>
      )}

      {showModal && (
        <Modal
          setShowModal={setShowModal}
          title="¿Para qué finalidades se utiliza mi información y quiénes la
                  utilizan?"
        >
          <Div className="options mga col-s-12">
            <div>
              <p>
                Algunas cookies aseguran que ciertas partes de la web funcionen
                correctamente y que tus preferencias de usuario sigan
                recordándose. Al colocar cookies funcionales, te facilitamos la
                visita a nuestra web. De esta manera, no necesitas introducir
                repetidamente la misma información cuando visitas nuestra web y,
                por ejemplo, los artículos permanecen en memoria hasta que hayas
                realizado la venta. Podemos colocar estas cookies sin tu
                consentimiento.
              </p>
              <p>
                Usamos cookies analíticas para optimizar la experiencia en el
                sitio web para nuestros usuarios. Con estas cookies analíticas
                obtenemos conocimientos del uso de nuestro sitio web. Te pedimos
                tu permiso para insertar cookies analíticas.
              </p>
              <p>
                Información adicional:Puede conocer la información completa
                sobre el uso de las cookies, su configuración, origen,
                finalidades y derechos en nuestra Política de Cookies.
              </p>
              <p>
                Usted permite el uso de las cookies para las siguientes
                finalidades:
              </p>
            </div>
            <div className="flex-justify mgv_2">
              <div>
                <button
                  className="btn border_solid_1_black font_12 mgh_2"
                  onClick={() => handleClickChangeAll(false)}
                >
                  Rechazar todo
                </button>
                <button
                  className="btn btn-green font_12 "
                  onClick={() => handleClickChangeAll(true)}
                >
                  Aceptar todo
                </button>
              </div>
              <div>
                <button
                  className="btn border font_12 "
                  onClick={handleCloseAndAcept}
                >
                  Cerrar
                </button>
              </div>
            </div>
            <ul className="clear">
              <li className="flex-justify">
                <p>Almacenar o acceder a información en un dispositivo</p>
                <div className="items flex-columns-justify">
                  <Switch
                    value={profile.storage}
                    setValue={handleChangeStore}
                    name="storage"
                  />
                </div>
              </li>
              <li className="flex-justify">
                <p>Crear un perfil para la personalización de contenidos</p>
                <div className="items flex-columns-justify">
                  <Switch
                    value={profile.createProfile}
                    setValue={handleChangeCreateProfile}
                    name="createProfile"
                  />
                </div>
              </li>
              <li className="flex-justify">
                <p>Seleccionar contenido personalizado</p>
                <div className="items flex-columns-justify">
                  <Switch
                    value={profile.customContent}
                    setValue={handleChangeCustomContent}
                    name="customContent"
                  />
                </div>
              </li>
              <li className="flex-justify">
                <p>Medir el rendimiento del contenido</p>
                <div className="items flex-columns-justify">
                  <Switch
                    value={profile.specifications}
                    setValue={handleChangeSpecifications}
                    name="specifications"
                  />
                </div>
              </li>
              <li className="flex-justify">
                <p>
                  Utilizar estudios de mercado a fin de generar información
                  sobre el público
                </p>
                <div className="items flex-columns-justify">
                  <Switch
                    value={profile.marketing}
                    setValue={handleChangeMarketing}
                    name="marketing"
                  />
                </div>
              </li>
              <li className="flex-justify">
                <p>Desarrollar y mejorar productos</p>
                <div className="items flex-columns-justify">
                  <Switch
                    value={profile.develop}
                    setValue={handleChangeDevelop}
                    name="develop"
                  />
                </div>
              </li>
              <li className="flex-justify">
                <p>
                  Analizar activamente las características del dispositivo para
                  su identificación
                </p>
                <div className="items flex-columns-justify">
                  <Switch
                    value={profile.analytics}
                    setValue={handleChangeAnalytics}
                    name="analytics"
                  />
                </div>
              </li>
              <li className="flex-justify">
                <p>Utilizar datos de localización geográfica precisa</p>
                <div className="items flex-columns-justify">
                  <Switch
                    value={profile.geolocation}
                    setValue={handleChangeGeolocation}
                    name="geolocation"
                  />
                </div>
              </li>
            </ul>
            <p>
              Si das tu consentimiento para los fines anteriores, también
              permites que este sitio web y sus socios operen el procesamiento
              de los siguientes datos: Cotejar y combinar fuentes de datos off
              line, Garantizar la seguridad, evitar fraudes y depurar errores,
              Recibir y utilizar para su identificación las características del
              dispositivo que se envían automáticamente, Servir técnicamente
              anuncios o contenido, y Vincular diferentes dispositivos
            </p>
          </Div>
        </Modal>
      )}
    </>
  );
};
