import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
// Local
import { pathOrigin, Api } from "../../helpers/utils";

import { Layout } from "../../components/Layout/index";
import { Lang } from "../../services/lang";
// STYLES
import {
  DivHome,
  Logo,
  Language,
  About,
  Div,
  Modes,
  Characteres,
  Edit,
  Skills,
  Suscriptions,
  Gameplay,
  Footer,
} from "./styles";

const WelcomePage = () => {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(null);

  const selectLanguge = (param) => {
    if (param) {
      setCookies("lang", param);
      return Lang[param];
    } else {
      if (navigator.language.includes("es")) {
        setCookies("lang", "es");
        return Lang["es"];
      } else {
        setCookies("lang", "en");
        return Lang["en"];
      }
    }
  };

  const setCookies = (name, value) => {
    var fecha = new Date();
    var dias = 7; // Número de días a agregar
    fecha.setDate(fecha.getDate() + dias);
    const options = {
      domanin: pathOrigin,
      expires: fecha,
    };
    Cookies.set(name, value, options);
  };

  const [l, setL] = useState(selectLanguge());
  const [language, setLanguage] = useState(() => {
    if (navigator.language.includes("es")) {
      return "es";
    } else {
      return "en";
    }
  });

  const handleClickSwapLanguage = (param) => {
    setL(Lang[param]);
    setLanguage(param);
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log(navigator, Cookies, email);
    let data = {
      email: email,
      lang: navigator.language,
      userAgent: navigator.userAgent,
    };
    console.log(data);
    fetch(Api("suscriber"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json()) // Transform the data into json
      .then((res) => {
        console.log(res);
        if (res.body.code) {
          setShowMessage(l.msg_01258);
        } else {
          setShowMessage(l.msg_01259);
        }
        setCookies("subscribe", true, { expires: 1 });
      });
  };

  return (
    <Layout
      title={l.msg_TitleHead || Lang["es"].msg_TitleHead}
      subtitle={l.msg_subTitleHead || Lang["es"].msg_subTitleHead}
    >
      <Div>
        <DivHome id="">
          <Logo>
            <h1>
              <img
                src={`${pathOrigin}/citizengame-logo-home.png`}
                alt={`logo citizen game`}
                className="citizen"
              />
            </h1>
          </Logo>
          <h3>{l.msg_01200}</h3>
          <Language
            lang={language === "es" ? "var(--second)" : "var(--primary)"}
            onClick={() =>
              handleClickSwapLanguage(language === "es" ? "en" : "es")
            }
          >
            {language}
          </Language>
        </DivHome>
        <About className="About">
          <img
            src={`${pathOrigin}/files/assets/ian-parker-1.png`}
            alt="ian parker"
          />
          <div>
            <p className="about">{l.msg_01201}</p>
            <h2>{l.msg_01202}</h2>
            <p className="description">{l.msg_01203}</p>
            <p className="description">{l.msg_01203_2}</p>
            <p className="description">{l.msg_01203_3}</p>
            <button>{l.msg_01204}</button>
          </div>
        </About>
        <Modes className="Modes">
          <h2 className="text-center">{l.msg_01205}</h2>
          <div className="modes Max">
            <div className="modes_images">
              <img
                src={`${pathOrigin}/files/assets/adventure-mode.png`}
                alt="modo aventura"
              />
              <h3>{l.msg_01206}</h3>
            </div>
            <p className="text-adventure">{l.msg_01210}</p>
            <div className="modes_images">
              <img
                src={`${pathOrigin}/files/assets/exploration-mode.png`}
                alt="modo exploración"
              />
              <h3>{l.msg_01207}</h3>
            </div>
            <p className="text-exploration">{l.msg_01211}</p>
            <div className="modes_images">
              <img
                src={`${pathOrigin}/files/assets/dungeon-mode.png`}
                alt="modo mazmorra"
              />
              <h3>{l.msg_01208}</h3>
            </div>
            <p className="text-dungeon">{l.msg_01212}</p>
            <div className="modes_images">
              <img
                src={`${pathOrigin}/files/assets/arena-mode.png`}
                alt="modo arena"
              />
              <h3>{l.msg_01209}</h3>
            </div>
            <p className="text-arena">{l.msg_01213}</p>
            <div></div>
          </div>
        </Modes>
        <Characteres className="Characters Max">
          <h2 className="text-center">{l.msg_01214}</h2>
          <p>{l.msg_01215}</p>
          <div className="list_characters Max">
            <img
              src={`${pathOrigin}/files/assets/character-ian.png`}
              alt="ian parker character"
              title="Ian Parker"
            />
            <img
              src={`${pathOrigin}/files/assets/character-kernel.png`}
              alt="kernel character"
              title="kernel"
            />
            <img
              src={`${pathOrigin}/files/assets/character-sarah.png`}
              alt="sarah character"
              title="sarah"
            />
            <img
              src={`${pathOrigin}/files/assets/character-hanna.png`}
              alt="hanna character"
              title="hanna"
            />
            <img
              src={`${pathOrigin}/files/assets/character-pride.png`}
              alt="pride character"
              title="pride"
            />
            <img
              src={`${pathOrigin}/files/assets/character-kasumi.png`}
              alt="kasumi character"
              title="kasumi"
            />
            <img
              src={`${pathOrigin}/files/assets/character-trump.png`}
              alt="trump character"
              title="trump"
            />
            <img
              src={`${pathOrigin}/files/assets/character-rust.png`}
              alt="rust character"
              title="rust"
            />
            <img
              src={`${pathOrigin}/files/assets/character-jk.png`}
              alt="jk character"
              title="jk"
            />
            <img
              src={`${pathOrigin}/files/assets/character-billy.png`}
              alt="billy character"
              title="billy"
            />
            <img
              src={`${pathOrigin}/files/assets/character-mike.png`}
              alt="mike character"
              title="mike"
            />
            <img
              src={`${pathOrigin}/files/assets/character-linus.png`}
              alt="linus character"
              title="linus"
            />
          </div>
        </Characteres>
        <Edit className="Edit">
          <h2 className="text-center">{l.msg_01216}</h2>
          <p>{l.msg_01217}</p>
          <img
            src={`${pathOrigin}/files/assets/edit-character.jpg`}
            alt="edit character"
          />
        </Edit>
        <Skills className="Characters">
          <h2 className="text-center">{l.msg_01218}</h2>
          <p>{l.msg_01219}</p>
          <p>{l.msg_01219_2}</p>
          <div className="list_characters Max">
            <img
              src={`${pathOrigin}/files/assets/swap-skills.png`}
              alt="ian parker character"
              title="Ian Parker"
            />
          </div>
        </Skills>
        <Gameplay className="Characters ">
          <h2 className="text-center">{l.msg_01220}</h2>
          <p>{l.msg_01221}</p>
          <div className="list_characters Max">
            <img
              src={`${pathOrigin}/files/assets/gameplay-es.png`}
              alt="capture gameplay citizen v.1.9"
              title="Gameplay Citizen"
            />
          </div>
        </Gameplay>

        <Suscriptions className="Suscriptions Max">
          <div>
            <h3>{l.msg_01250}</h3>
            <p>{l.msg_01251}</p>
            <div className="flex-center">
              <a
                href="https://discord.gg/ExgqvWZw"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${pathOrigin}/files/assets/icon-discord.png`}
                  alt="discord"
                  width="20"
                />
              </a>
              <a
                href={`https://twitter.com/${
                  language === "es" ? "citizenNFTs" : "citizenNFT"
                }`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${pathOrigin}/files/assets/icon-twitter.png`}
                  alt="twitter"
                />
              </a>
              <a
                href="https://t.me/citizen_nft_esp"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${pathOrigin}/files/assets/icon-telegram.png`}
                  alt="telegram"
                />
              </a>
              <a
                href="https://www.instagram.com/citizennft"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`${pathOrigin}/files/assets/icon-instagram.png`}
                  alt="instagram"
                />
              </a>
            </div>
          </div>
          <div className="grid Suscription_email">
            <img
              src={`${pathOrigin}/files/assets/envelope-suscription.png`}
              alt="envelope suscription"
            />
            <h4 className="title">{l.msg_01252}</h4>
            <p className="primary">{l.msg_01253}</p>
            <form onSubmit={(e) => handleSubmitForm(e)}>
              <input
                type="email"
                placeholder="Correo electrónico"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>
                <input type="checkbox" required /> <span>{l.msg_01254}</span>
              </label>
              <label>
                <input type="checkbox" required /> <span>{l.msg_01255}</span>
              </label>
              <input type="submit" value={l.msg_01256} className="white" />
            </form>
            {showMessage && <p className="font_12">{showMessage}</p>}
          </div>
        </Suscriptions>
      </Div>
      <Footer>
        <div>
          <p>{l.msg_01257}</p>
        </div>
      </Footer>
    </Layout>
  );
};

export default WelcomePage;
