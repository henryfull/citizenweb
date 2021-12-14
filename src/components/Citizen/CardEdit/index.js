// External
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import axios from "axios";

// Local
// Components
import { ElementCard } from "../ElementCard/index";
import Modal from "../../Atoms/Modal2/index";
import {
  ContentModalClickBackground,
  ContentModalClickCharacter,
  ContentModalClickList,
  ContentModalClick,
} from "../ContentModalClick";
// Styles
import {
  Div,
  Background,
  Border,
  Content,
  Num,
  Titles,
  Description,
  Block,
  Character,
  Footer,
  Label,
  Input,
} from "./styles";

const CardEdit = ({ ...props }) => {
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [showContent, setShowContent] = useState();
  const [colorCard, setColorCard] = useState("crimson");
  const iconCharacter = "pig-1";
  const [idToken, setIdToken] = useState(props.auto.idToken);
  const [name, setName] = useState(props.auto.name);
  const [vocation, setVocation] = useState(props.auto.vocation);
  const [block, setBlock] = useState(props.auto.block);
  const [faction, setFaction] = useState(props.auto.faction);
  const [aboutme, setAboutme] = useState(props.auto.aboutme);
  const [rarity, setRarity] = useState(props.auto.rarity);
  const [dna, setDna] = useState(props.auto.dna);
  const [imageCharacter, setImageCharacter] = useState(
    props.auto.imageCharacter
  );
  const [background, setBackground] = useState(props.auto.background);
  const [storyline, setStoryline] = useState(props.auto.storyline || 1);
  const [age, setAge] = useState(props.auto.age);
  const datas = props.datas;

  useEffect(() => {
    changeColor(rarity);
    let el = document.getElementById("nameToken");
    el.style.cssText = "height:auto; padding:0";
    el.style.cssText = "height:" + (el.scrollHeight - 5) + "px";
        // eslint-disable-next-line
  }, [rarity]);

  const openModalFilter = (e) => {
    setShowContent(e);
    setShowModal(true);
  };

  const changeColor = (rarity) => {
    let color = colorCard;
    if (localStorage.getItem("datas")) {
      const datas = JSON.parse(localStorage.getItem("datas")).rarity;
      let tempo = datas.filter((item) => item.name === rarity.name);
      color = tempo[0].color;
    }
    setColorCard(color);
  };
  const handleClickBlock = (e) => {
    setBlock(e);
    setShowModal(false);
  };
  const handleClickFaction = (e) => {
    setFaction(e);
    setShowModal(false);
  };
  const handleClickRarity = (e) => {
    setRarity(e);
    setShowModal(false);
  };
  const handleClickCharacter = (e) => {
    setImageCharacter(e);
    setShowModal(false);
  };
  const handleClickVocation = (e) => {
    setVocation(e);
    setShowModal(false);
  };
  const handleClickBackground = (e) => {
    setBackground(e);
    setShowModal(false);
  };
  const handleChangeName = (e) => {
    var el = e.target;
    setTimeout(function () {
      el.style.cssText = "height:auto; padding:0";
      // for box-sizing other than "content-box" use:
      // el.style.cssText = '-moz-box-sizing:content-box';
      el.style.cssText = "height:" + (el.scrollHeight - 5) + "px";
      console.log(el.scrollHeight);
    }, 0);
    setName(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let typeCharacter = datas.typeCharacter.filter(
      (item) => item.name === imageCharacter.name.split("-")[0]
    )[0];
    let formData = {
      name,
      aboutme,
      rarity,
      block,
      faction,
      vocation,
      background,
      idToken,
      storyline,
      idDescription: idToken,
      imageCharacter,
      typeCharacter,
      dna,
      age,
    };
    var url = process.env.PUBLIC_URL + "card/" + id;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent.loaded / progressEvent.total);
      },
    };
    axios.put(url, formData, options).then((res) => {
      console.log(res.data.body);
      if (res.status === 201) {
        console.log("publicado");
      }
    });
    setShowModal(false);
  };
  const handlePushToken = (e) => {
    e.preventDefault();
    let typeCharacter = datas.typeCharacter.filter(
      (item) => item.name === imageCharacter.name.split("-")[0]
    )[0];
    let formData = {
      address: "0xa26257f61D2c3666Bd62aC9039F1460A6Bb697cc",
      uri: "",
      name,
      typeT: typeCharacter.id,
      bloc: block.id,
      descriptionId: idToken,
      rarity: rarity.id,
      faction: faction.id,
      vocation: vocation.id,
      storyLine: storyline,
      age,
      description: aboutme,
      dna: dna,
    };
    console.log(formData);
    var url = "http://localhost:8000/api/contract/token";
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent.loaded / progressEvent.total);
      },
    };

    if (dna) {
      axios.post(url, formData, options).then((res) => {
        console.log(res.data.body);
        if (res.status === 201) {
          changeStatus();
          console.log(res.data.body);
          console.log("publicado");
        }
      });
      setShowModal(false);
    }
  };

  const handleCreateImage = (e) => {
    e.preventDefault();
    setShowModal(false);
    props.convertHtmlToImage(e);
  };

  const changeStatus = () => {
    let formData = {
      published: true,
    };
    var url = process.env.PUBLIC_URL + "card/" + id;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent.loaded / progressEvent.total);
      },
    };
    axios.put(url, formData, options).then((res) => {
      console.log(res.data.body);
      if (res.status === 201) {
        console.log("actualizado");
      }
    });
  };

  return (
    <Div id="card-image">
      <Content color={colorCard}>
        <Background background={background.name}></Background>
        <Border color={colorCard}></Border>
        <Character onClick={() => openModalFilter("character")}>
          {imageCharacter ? (
            <ElementCard name={imageCharacter.name} />
          ) : (
            <h1>{iconCharacter}</h1>
          )}
        </Character>
        <Num color={colorCard} className="rel">
          <span onClick={() => openModalFilter("background")}>#</span>
          <input
            type="text"
            name="idToken"
            id="idToken"
            size="5"
            value={idToken}
            onChange={(e) => setIdToken(e.target.value)}
          />
        </Num>
        <Block onClick={() => openModalFilter("block")}>
          <img
            // key={index + "example_photo"}
            src={`${process.env.PUBLIC_URL}files/symbols/emblem-${block.name}.svg`}
            alt={`emblem-${block.name}`}
          />
        </Block>
        <Titles color={colorCard}>
          <textarea
            type="text"
            name="name"
            id="nameToken"
            defaultValue={name}
            onChange={(e) => handleChangeName(e)}
            rows="1"
          />
          <h4 onClick={() => openModalFilter("vocation")}>{vocation.name}</h4>
        </Titles>
        <Description>
          <textarea
            rows="8"
            defaultValue={aboutme}
            onChange={(e) => setAboutme(e.target.value)}
          />
        </Description>
        <Footer color={colorCard} onDoubleClick={() => openModalFilter("push")}>
          <div onClick={() => openModalFilter("faction")}>
            <img
              // key={index + "example_photo"}
              src={`${process.env.PUBLIC_URL}files/symbols/emblem-${faction.name}.svg`}
              alt={`emblem-${faction.name}`}
            />
            <span>{faction.name}</span>
          </div>
          <div onClick={() => openModalFilter("rarity")}>
            <span>{rarity.name}</span>
          </div>
        </Footer>
      </Content>
      {/* <div>
        <div className="mg_right_1">
          <p>Price</p>
          <Label className="flex-justify">
            <Input
              type="number"
              name="price"
              defaultValue={price}
              placeholder="1"
              onChange={(e) => setPrice(e)}
              min="1"
              max="2000"
              required
            />
            <FontAwesomeIcon icon={["fas", "euro-sign"]} />
          </Label>
        </div>
      </div> */}

      {showModal && (
        <Modal setShowModal={setShowModal}>
          {showContent === "block" && (
            <ContentModalClick
              datas={datas.block}
              handleClic={handleClickBlock}
              title="Selecciona un bloque"
            />
          )}
          {showContent === "faction" && (
            <ContentModalClick
              datas={datas.factions}
              handleClic={handleClickFaction}
              title="Selecciona una faccion"
            />
          )}
          {showContent === "rarity" && (
            <ContentModalClick
              datas={datas.rarity}
              handleClic={handleClickRarity}
              title="Selecciona una rareza"
            />
          )}
          {showContent === "background" && (
            <ContentModalClickBackground
              datas={datas.background}
              handleClic={handleClickBackground}
              title="Selecciona un fondo"
            />
          )}
          {showContent === "character" && (
            <>
              <div className="mg_top_3">
                <p>Age character</p>
                <Label className="flex-justify">
                  <Input
                    type="number"
                    name="Age"
                    value={parseInt(age)}
                    placeholder="ej. 28"
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <FontAwesomeIcon icon={["fas", "clock"]} />
                </Label>
              </div>
              <ContentModalClickCharacter
                datas={datas.characters}
                handleClic={handleClickCharacter}
                title="Selecciona un personaje"
              />
            </>
          )}
          {showContent === "vocation" && (
            <ContentModalClickList
              datas={datas.vocation}
              handleClic={handleClickVocation}
              title="Selecciona una vocación"
            />
          )}
          {showContent === "push" && (
            <div className="w100">
              <h4>Enviar token</h4>
              <div className="mg_right_1">
                <p>Storyline</p>
                <Label className="flex-justify">
                  <Input
                    type="number"
                    name="storyline"
                    defaultValue={storyline}
                    placeholder="Storyline"
                    onChange={(e) => setStoryline(e)}
                    min="1"
                    required
                  />
                  <FontAwesomeIcon icon={["fas", "share-alt"]} />
                </Label>
              </div>
              <div className="mg_right_1">
                <p>DNA</p>
                <Label className="flex-justify">
                  <Input
                    type="text"
                    name="dna"
                    defaultValue={dna}
                    placeholder="DNA"
                    onChange={(e) => setDna(e.target.value)}
                    minLength="26"
                    maxLength="26"
                    required
                  />
                  <FontAwesomeIcon icon={["fas", "share-alt"]} />
                </Label>
              </div>
              <div className="flex-justify">
                <button
                  className="mg_1 btn btn-red"
                  onClick={(e) => handleSubmitForm(e)}
                >
                  Guadar
                </button>

                {!props.auto.published && (
                  <button
                    className="mg_1 btn btn-blue"
                    onClick={(e) => handlePushToken(e)}
                  >
                    Publicar
                  </button>
                )}
                <button
                  className="mg_1 btn btn-green"
                  onClick={(e) => handleCreateImage(e)}
                >
                  Crear
                </button>
              </div>
            </div>
          )}
        </Modal>
      )}
    </Div>
  );
};

export default CardEdit;
