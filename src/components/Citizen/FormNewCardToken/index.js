// External
import React, { useState, useEffect } from "react";
import Icons from "../../Atoms/Icons/index";
// import axios from "axios";
import domtoimage from "dom-to-image";

// Local
import datos from "../../../data/datas.json";
// Components
import States from "./States";
import Resistances from "./Resistances";
import {
  ContentModalClickBackground,
  ContentModalClickCharacter,
  ContentModalClickList,
  ContentModalClick,
} from "../ContentModalClick/index";
import Modal from "../../Atoms/Modal2/index";
// Styles
import { Label, Input } from "./styles";
const FormNewCardToken = ({ card, saveDocument, saveSubDocument }) => {
  // const { datas, loading } = useListBrands();
  const [showModal, setShowModal] = useState(false);
  const [showContent, setShowContent] = useState();

  const captureImage = "card-image";
  useEffect(() => {
    // console.log(auto);
    // getDatas();
  }, [card]);

  // Concierte el HTML en IMAGEN
  const convertHtmlToImage = (e) => {
    e.preventDefault();
    var node = document.getElementById(captureImage);
    domtoimage
      .toPng(node, { quality: 1 })
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.getElementById("makerImage").appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });

    domtoimage.toPng(node, { quality: 1 }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "token.png";
      link.href = dataUrl;
      link.click();
    });
  };

  const handleClickBlocks = (e) => {
    saveDocument("block", e.name);
    setShowModal(false);
  };
  const handleClickRace = (e) => {
    saveDocument("race", e.name);
    setShowModal(false);
  };
  const handleClickTypeToken = (e) => {
    saveDocument("typeToken", e.name);
    setShowModal(false);
  };
  const handleClickFaction = (e) => {
    saveDocument("faction", e.name);
    setShowModal(false);
  };
  const handleClickRarity = (e) => {
    saveDocument("rarity", e.name);
    setShowModal(false);
  };
  const handleClickEffect = (e) => {
    saveDocument("effect", e.name);
    setShowModal(false);
  };

  // // Obtiene los datos rellenar el formulario
  // const getDatas = () => {
  //   var url = process.env.PUBLIC_URL + "datas";
  //   const options = { method: "GET" };
  //   axios(url, options).then((res) => {
  //     // console.log(res.data.body);
  //     localStorage.setItem("datas", JSON.stringify(res.data.body));
  //     setDatas(res.data.body);
  //     setLoading(true);
  //   });
  // };

  const handleChangeText = (e, field) => {
    console.log(e.target.value,  field)
    saveDocument(field, e.target.value);
  };

  const handleChangeNumber = (value, field) => {
    saveSubDocument(field, value);
  };

  const openModalFilter = (e) => {
    setShowContent(e);
    setShowModal(true);
  };

  const handleClickCharacter = (e) => {
    console.log(e);
    saveDocument("image", e.name);
    setShowModal(false);
  };

  const handleClickBackground = (e) => {
    saveDocument("background", e.name);
    setShowModal(false);
  };

  return (
    <div id="">
      <div>
        <h5>Publicar datos token</h5>

        <div className="groups grid col2 gap">
          <div>
            <div className="flex">
              <div className="mg_right_1">
                <p>Nivel</p>
                <Label className="flex-justify">
                  <Input
                    type="number"
                    name="level"
                    defaultValue={card.level}
                    placeholder="ID"
                    onChange={(e) => handleChangeText(e, "level")}
                    min="1"
                    max="100"
                    required
                  />
                  <Icons name="hashtag" />
                </Label>
              </div>
              <div className="mg_right_1">
                <p>Multi</p>
                <Label className="flex-justify">
                  <Input
                    type="number"
                    name="states"
                    defaultValue={card.skills[0].skill.multiplier}
                    placeholder="multi"
                    onChange={(e) => handleChangeText(e, "states.multiplier")}
                    min="1"
                    max="100"
                    required
                  />
                  <Icons name="hashtag" />
                </Label>
              </div>
              <div className="mg_right_1">
                <p>Precio</p>
                <Label className="flex-justify">
                  <Input
                    type="number"
                    name="price"
                    defaultValue={card.price}
                    placeholder="Precio"
                    onChange={(e) => handleChangeText(e, "price")}
                    min="1"
                    max="100"
                    required
                  />
                  <Icons name="hashtag" />
                </Label>
              </div>
              <div className="mg_right_1">
                <p>Nombre</p>
                <Label className="flex-justify">
                  <Input
                    type="text"
                    name="name"
                    defaultValue={card.namecard}
                    placeholder="Nombre"
                    onChange={(e) => handleChangeText(e, "namecard")}
                    required
                  />
                  <Icons name="share-alt" />
                </Label>
              </div>
              <div className="mg_right_1">
                <p>Edad</p>
                <Label className="flex-justify">
                  <Input
                    type="number"
                    name="age"
                    defaultValue={card.age}
                    placeholder="Edad"
                    onChange={(e) => handleChangeText(e, "age")}
                    min="1"
                    max="500"
                    required
                  />
                  <Icons name="hashtag" />
                </Label>
              </div>
            </div>
            <div className="mg_right_1">
              <p>Vocación</p>
              <Label className="flex-justify">
                <Input
                  type="text"
                  name="name"
                  defaultValue={card.vocation}
                  placeholder="vocación"
                  onChange={(e) => handleChangeText(e, "vocation")}
                  required
                />
                <Icons name="share-alt" />
              </Label>
            </div>

            <div>
              <p>Genero</p>
              <div>
                <input
                  type="radio"
                  id="man"
                  name="gender"
                  value="man"
                  onChange={(e) => handleChangeText(e, "gender")}
                  checked={card.gender === "man" ? true : false}
                />
                <label for="man">Man</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="woman"
                  name="gender"
                  value="woman"
                  onChange={(e) => handleChangeText(e, "gender")}
                  checked={card.gender === "woman" ? true : false}

                />
                <label for="woman">Woman</label>
              </div>
            </div>

            <div className="mg_right_1">
              <button
                onClick={() => openModalFilter("character")}
                className="flex-justify"
              >
                <b className="black">Personaje:</b>
                <span className="primary">{card.image}</span>
              </button>
            </div>
            <div>
              <button
                onClick={() => openModalFilter("race")}
                className="flex-justify"
              >
                <b className="black">Raza:</b>
                <span className="primary">{card.race}</span>
              </button>
            </div>
            <div>
              <button onClick={() => openModalFilter("background")}>
                <b className="black">Fondo:</b>{" "}
                <span className="primary">{card.background}</span>
              </button>
            </div>
            <div>
              <button onClick={() => openModalFilter("block")}>
                <b className="black">Bloque:</b>
                <span className="primary">{card.block}</span>
              </button>
            </div>
            <div>
              <button onClick={() => openModalFilter("faction")}>
                <b className="black">Faccion:</b>
                <span className="primary">{card.faction}</span>
              </button>
            </div>
            <div>
              <button onClick={() => openModalFilter("rarity")}>
                <b className="black">Rareza:</b>
                <span className="primary">{card.rarity}</span>
              </button>
            </div>
            <div>
              <button onClick={() => openModalFilter("typeToken")}>
                <b className="black">Tipo token:</b>
                <span className="primary">{card.typeToken}</span>
              </button>
            </div>
            <div>
              <button onClick={() => openModalFilter("effect")}>
                <b className="black">Efecto:</b>
                <span className="primary">{card.effect}</span>
              </button>
            </div>

            <div>
              <b className="black">Descripción:</b>
              <textarea
                value={card.aboutme}
                onChange={(e) => handleChangeText(e, "aboutme")}
                cols="50"
                rows="5"
              />
            </div>
            <div className="mg_right_1">
              <p className="black">Nombre Skill principal</p>
              <Label className="flex-justify">
                <Input
                  type="text"
                  name="name"
                  defaultValue={card.skills[0].skill.name}
                  placeholder="Nombre"
                  onChange={(e) => handleChangeText(e, "skill.name")}
                  required
                />
                <Icons name="share-alt" />
              </Label>
            </div>
            <div className="mg_right_1">
              <p className="black">Descripción Skill principal</p>
              <Label className="flex-justify">
                <Input
                  type="text"
                  name="name"
                  defaultValue={card.skills[0].skill.description}
                  placeholder="Descripcion"
                  onChange={(e) => handleChangeText(e, "skill.description")}
                  required
                />
                <Icons name="share-alt" />
              </Label>
            </div>

            <div>
              <b className="black">Poder:</b>
              <b className="primary">{card.power}</b>
            </div>

            <h4>Puntos por nivel</h4>

            <div>
              <b className="black">Puntos de estado:</b>
              <b className="primary">{card.points?.attributes}</b>
            </div>
            <div>
              <b className="black">Puntos de Resistencia:</b>
              <b className="primary">{card.points?.resistences}</b>
            </div>

            <div className="mg_right_1">
              <p>Bloqueo status</p>
              <Input
                type="checkbox"
                name="defense.block.status"
                checked={card.defense.block.status}
                placeholder="Estado"
                onChange={(e) =>
                  handleChangeNumber(e.target.checked, "defense.block.status")
                }
                required
              />

              <p>Bloqueo code</p>
              <Label className="flex-justify">
                <Input
                  type="text"
                  name="defense.block.code"
                  value={card.defense.block?.code}
                  placeholder="code"
                  onChange={(e) =>
                    handleChangeNumber(e.target.value, "defense.block.code")
                  }
                  required
                />
                <Icons name="hashtag" />
              </Label>
            </div>

            <div>
              <b className="black">Escudo recarga:</b>
              <b className="primary">{card.defense?.shield.strength}</b>
            </div>
            <div>
              <b className="black">Escudo coste:</b>
              <b className="primary">{card.defense?.shield.cost}</b>
            </div>
          </div>
          <div>
            <h4>States</h4>
            <States saveSubDocument={saveSubDocument} card={card} />
            <h4>Resistencias</h4>
            <Resistances saveSubDocument={saveSubDocument} card={card} />
            <h4>Recuperación</h4>
            <div className="mg_right_1">
              <p>Recuperación vida</p>
              <Label className="flex-justify">
                <Input
                  type="number"
                  name="recovery.life"
                  defaultValue={card.recovery.life}
                  placeholder="Recuperación vida"
                  onChange={(e) =>
                    handleChangeNumber(e.target.value, "recovery.life")
                  }
                  min="0"
                  max="100"
                  required
                />
                <Icons name="hashtag" />
              </Label>
            </div>
            <div className="mg_right_1">
              <p>Recuperación escudo</p>
              <Label className="flex-justify">
                <Input
                  type="number"
                  name="recovery.shield"
                  defaultValue={card.recovery.shield}
                  placeholder="Recuperación escudo"
                  onChange={(e) =>
                    handleChangeNumber(e.target.value, "recovery.shield")
                  }
                  min="0"
                  max="100"
                  required
                />
                <Icons name="hashtag" />
              </Label>
            </div>
          </div>

          {/* Modals */}
          {showModal && (
            <Modal setShowModal={setShowModal}>
              {showContent === "block" && (
                <ContentModalClick
                  datas={datos.block}
                  handleClic={handleClickBlocks}
                  title="Selecciona un bloque"
                />
              )}
              {showContent === "race" && (
                <ContentModalClickList
                  datas={datos.typeCharacter}
                  handleClic={handleClickRace}
                  title="Selecciona una raza"
                />
              )}
              {showContent === "typeToken" && (
                <ContentModalClickList
                  datas={datos.typeToken}
                  handleClic={handleClickTypeToken}
                  title="Selecciona el tipo de token"
                />
              )}
              {showContent === "effect" && (
                <ContentModalClickList
                  datas={datos.effect}
                  handleClic={handleClickEffect}
                  title="Selecciona el tipo de efecto"
                />
              )}
              {showContent === "faction" && (
                <ContentModalClick
                  datas={datos.factions}
                  handleClic={handleClickFaction}
                  title="Selecciona una faccion"
                />
              )}
              {showContent === "rarity" && (
                <ContentModalClick
                  datas={datos.rarity}
                  handleClic={handleClickRarity}
                  title="Selecciona una rareza"
                />
              )}
              {showContent === "background" && (
                <ContentModalClickBackground
                  datas={datos.background}
                  handleClic={handleClickBackground}
                  title="Selecciona un fondo"
                />
              )}
              {showContent === "character" && (
                <>
                  <ContentModalClickCharacter
                    datas={datos.characters}
                    handleClic={handleClickCharacter}
                    title="Selecciona un personaje"
                  />
                </>
              )}
            </Modal>
          )}

          <button onClick={(e) => convertHtmlToImage(e)}>Crear</button>
        </div>
      </div>
    </div>
  );
};

export default FormNewCardToken;
