// External
import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import domtoimage from "dom-to-image";

// Local
import { Context } from "../../../services/Context";
import SelectStandard from "../../Forms/Select/SelectStandard";
import { Label, Input, TextArea } from "./styles";
import { Url } from "../../../helpers/utils";
import CheckBox from '../../CheckBox/index'

const StepOne = ({auto}) => {
  // const { datas, loading } = useListBrands();
  const { handleSetAuto } = useContext(Context);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(auto.name);
  const [aboutme, setAboutme] = useState(auto.aboutme || "");
  const [imageCharacter, setImageCharacter] = useState(auto.imageCharacter);
  const [background, setBackground] = useState(auto.background)
  const [uri, setUri] = useState(auto.uri);
  const [language, setLanguage] = useState(auto.language || 'EN');
  const [idToken, setIdToken] = useState(auto.idToken);
  const [idDescription, setIdDescription] = useState(auto.idDescription);
  const [storyline, setStoryline] = useState(auto.storyline)
  const [age, setAge] = useState(auto.age)
  const [price, setPrice] = useState(auto.price);
  const [block, setBlock] = useState(auto.block);
  const [faction, setFaction] = useState(auto.faction);
  const [rarity, setRarity] = useState(auto.rarity);
  const [countDescription, setCountDescription] = useState(
    aboutme.length || 0
  );
  const [typeCharacter, setTypeCharacter] = useState(auto.typeCharacter);
  const [vocation, setVocation] = useState(auto.vocation);
  const captureImage = "card-image";
  useEffect(() => {
    getDatas();
  }, [auto]);

  // Concierte el HTML en IMAGEN
  const convertHtmlToImage = (e) => {
    e.preventDefault();
    var node = document.getElementById(captureImage);
    domtoimage
      .toPng(node, { quality: 1 })
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.getElementById('makerImage').appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });

    domtoimage
      .toPng(node, { quality: 1 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "token.png";
        link.href = dataUrl;
        link.click();
      });
  };

  const handleClickBlock = (e) => {
    setBlock(e);
    handleSetAuto("block", e);
    // localStorage.setItem("owner", e);
  };
  const handleClickFaction = (e) => {
    setFaction(e);
    handleSetAuto("faction", e);
    // localStorage.setItem("owner", e);
  };
  const handleClickRarity = (e) => {
    setRarity(e);
    handleSetAuto("rarity", e);
    // localStorage.setItem("owner", e);
  };

  // Obtiene los datos rellenar el formulario
  const getDatas = () => {
    var url = process.env.PUBLIC_URL + "datas";
    console.log(url);
    const options = { method: "GET" };
    axios(url, options).then((res) => {
      // console.log(res.data.body);
      localStorage.setItem("datas", JSON.stringify(res.data.body));
      setDatas(res.data.body);
      setLoading(true);
    });
  };

  const handleChangeText = (e, storage) => {
    var value = e.target.value;
    localStorage.getItem(storage, value);
    handleSetAuto(storage, value);
    // setCountDescription(description.length)
  };

  return (
    <div id="">
      <div>
        <h5>Publicar datos token</h5>

        <div className="groups">
          <div className="flex">
            <div className="mg_right_1">
              <p>ID Token</p>
              <Label className="flex-justify">
                <Input
                  type="number"
                  name="idToken"
                  defaultValue={idToken}
                  placeholder="ID"
                  onChange={
                    ((e) => setIdToken(e),
                    (e) => handleChangeText(e, "idToken"))
                  }
                  min="1"
                  max="2000"
                  required
                />
                <FontAwesomeIcon icon={["fas", "hashtag"]} />
              </Label>
            </div>
            <div className="mg_right_1">
              <p>ID Descripction</p>
              <Label className="flex-justify">
                <Input
                  type="number"
                  name="idDescription"
                  defaultValue={idDescription}
                  placeholder="ID"
                  onChange={
                    ((e) => setIdDescription(e),
                    (e) => handleChangeText(e, "idDescription"))
                  }
                  min="1"
                  required
                />
                <FontAwesomeIcon icon={["fas", "share-alt"]} />
              </Label>
            </div>
            <div className="mg_right_1">
              <p>Storyline</p>
              <Label className="flex-justify">
                <Input
                  type="number"
                  name="storyline"
                  defaultValue={storyline}
                  placeholder="Storyline"
                  onChange={
                    ((e) => setStoryline(e),
                    (e) => handleChangeText(e, "storyline"))
                  }
                  min="1"
                  required
                />
                <FontAwesomeIcon icon={["fas", "share-alt"]} />
              </Label>
            </div>
            <div className="mg_right_1">
              <p>Price</p>
              <Label className="flex-justify">
                <Input
                  type="number"
                  name="price"
                  defaultValue={price}
                  placeholder="1"
                  onChange={
                    ((e) => setPrice(e), (e) => handleChangeText(e, "price"))
                  }
                  min="1"
                  max="2000"
                  required
                />
                <FontAwesomeIcon icon={["fas", "euro-sign"]} />
              </Label>
            </div>
            <div className="mg_right_1">
              <p>Age</p>
              <Label className="flex-justify">
                <Input
                  type="number"
                  name="Age"
                  defaultValue={age}
                  placeholder="Age"
                  onChange={
                    ((e) => setAge(e),
                    (e) => handleChangeText(e, "age"))
                  }
                />
                <FontAwesomeIcon icon={["fas", "share-alt"]} />
              </Label>
            </div>
          </div>
          
          <div className="flex">
            <div className="mg_right_1">
              <p>Name</p>
              <Label className="flex-justify">
                <Input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Name"
                  onChange={
                    ((e) => setName(e), (e) => handleChangeText(e, "name"))
                  }
                  required
                />
                <FontAwesomeIcon icon={["fas", "font"]} />
              </Label>
            </div>
            <div className="mg_right_1">
              <p>Language</p>
              <Label className="flex-justify">
                <Input
                  type="text"
                  name="language"
                  defaultValue={language}
                  placeholder="language"
                  onChange={
                    ((e) => setLanguage(e), (e) => handleChangeText(e, "language"))
                  }
                  required
                />
                <FontAwesomeIcon icon={["fas", "font"]} />
              </Label>
            </div>
            <div className="mg_right_1 w100">
              <p>uri</p>
              <Label className="flex-justify">
                <Input
                  type="text"
                  name="uri"
                  defaultValue={uri}
                  placeholder="http://example.com/loquesea"
                  onChange={
                    ((e) => setUri(e), (e) => handleChangeText(e, "uri"))
                  }
                  required
                />
                <FontAwesomeIcon icon={["fas", "globe-europe"]} />
              </Label>
            </div>
          </div>
          <div className="mg_right_1 w100">
            <p>About me</p>
            <Label className="flex-justify">
              <TextArea
                name="name"
                defaultValue={aboutme}
                placeholder="About me"
                onChange={(e) => {
                  setAboutme(e);
                  setCountDescription(e.target.value.length);
                  handleChangeText(e, "aboutme");
                }}
                rows="4"
                maxLength="280"
                required
              />
              <FontAwesomeIcon icon={["fas", "text-height"]} />
            </Label>
          </div>

          <p className="right">{countDescription}</p>
          {loading && (
            <CheckBox
              arrayObject={datas.rarity}
              nameObject="rarity"
              theObject={rarity}
              functionObject={handleClickRarity}
            />
          )}
          {loading && (
            <CheckBox
              arrayObject={datas.block}
              nameObject="block"
              theObject={block}
              functionObject={handleClickBlock}
            />
          )}
          {loading && (
            <CheckBox
              arrayObject={datas.factions}
              nameObject="faction"
              theObject={faction}
              functionObject={handleClickFaction}
            />
          )}
          {loading && (
            <SelectStandard
              setSelect={(e) => setTypeCharacter(e)}
              arrayObjects={datas.typeCharacter}
              brand={typeCharacter}
              name="typeCharacter"
              title="Tipo token"
            />
          )}
          {loading && (
            <SelectStandard
              setSelect={(e) => setImageCharacter(e)}
              arrayObjects={datas.characters}
              brand={imageCharacter}
              name="imageCharacter"
              title="Imagen token"
            />
          )}
          {loading && (
            <SelectStandard
              setSelect={(e) => setBackground(e)}
              arrayObjects={datas.background}
              brand={background}
              name="background"
              title="Background token"
            />
          )}
          {loading && (
            <SelectStandard
              setSelect={(e) => setVocation(e)}
              arrayObjects={datas.vocation}
              brand={vocation}
              name="vocation"
              title="Vocación"
            />
          )}
          <button onClick={(e) => convertHtmlToImage(e)}>Crear</button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
