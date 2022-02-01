import React, { useEffect } from "react";
import { pathOrigin } from "../../helpers/utils";
import { Layout } from "../../components/Layout/index";

// STYLES
import {
  DivHome,
  Logo,
  About,
  Div,
  Modes,
  Characteres,
  Edit,
  Suscriptions,
} from "./styles";

const WelcomePage = () => {
  const handleSubmitForm = (second) => {};

  return (
    <Layout
      title="Citizen Game - A new way to play games with NFT"
      subtitle="Un juego gratuito para jugar y ganar"
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
        </DivHome>
        <About className="About">
          <img
            src={`${pathOrigin}/files/assets/ian-parker-1.png`}
            alt="ian parker"
          />
          <div>
            <p className="about">Sobre el juego</p>
            <h2>Entra en el universo de Citzen</h2>
            <p className="description">
              Citizen es un desafiante juego de rol de fantasía por turnos
              basado en un nuevo universo donde la tierra esta gobernada por los
              animales. Recluta, mejora, lidera un equipo de Citizens y Unete a
              al bando de los rebeldes lo de las elites. ¿Podrás mantener a tus
              héroes unidos cuando toda esperanza se haya perdido?
            </p>
            <button>Explorar</button>
          </div>
        </About>
        <Modes className="Modes">
          <h2 className="text-center">Modos de juego</h2>
          <div className="modes Max">
            <div className="modes_images">
              <img
                src={`${pathOrigin}/files/assets/adventure-mode.png`}
                alt="modo aventura"
              />
              <h3>aventura</h3>
            </div>
            <p className="text-adventure">
              Te adentraras en la historia principal donde conocerás a todos los
              personajes e iras formando un equipo para descubrir la verdad. En
              cada una de las tramas, deberás superar cada acto para avanzar en
              el juego y completar la historia.
            </p>
            <div className="modes_images">
              <img
                src={`${pathOrigin}/files/assets/exploration-mode.png`}
                alt="modo exploración"
              />
              <h3>exploration</h3>
            </div>
            <p className="text-exploration">
              Manda a un equipo a explorar zonas del juego durante un tiempo,
              contra más lejos envía a explorar al equipo mayor es la recompensa
              y su dificultad de obtener la victoria. En esta modalidad el
              jugador no controla los personajes.
            </p>
            <div className="modes_images">
              <img
                src={`${pathOrigin}/files/assets/dungeon-mode.png`}
                alt="modo mazmorra"
              />
              <h3>mazmorra</h3>
            </div>
            <p className="text-dungeon">
              El jugador se adentrara en una mazmorra donde deberá superar cada
              nivel enfrentándose a enemigos, realizando mejoras o adquiriendo
              cartas, con cada profundidad de fase se aumenta la dificultad,
              existen 99 fases con unos 20 niveles por fase.
            </p>
            <div className="modes_images">
              <img
                src={`${pathOrigin}/files/assets/arena-mode.png`}
                alt="modo arena"
              />
              <h3>arena</h3>
            </div>
            <p className="text-arena">
              Combate contra otros jugadores y ganate la reputación de la
              comunidad entrando en el top raknked.
            </p>
            <div></div>
          </div>
        </Modes>
        <Characteres className="Characters Max">
          <h2 className="text-center">Personajes principales</h2>
          <p>
            Hay cientos de personajes que habitan el mundo de Citizen. <br></br>
            Estos son algunos de los personajes que conocerás cuando empieces a
            jugar
          </p>
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
          <h2 className="text-center">Mejora tu personaje</h2>
          <p>
            Para que ser el mejor, no solo hay que tener las mejores cosas, sino
            saber combinarlas. Cada personaje se puede personalizar cambiando
            distinatas habilidades, atributos, accesorios u objetos.{" "}
          </p>
          <img
            src={`${pathOrigin}/files/assets/edit-character.jpg`}
            alt="edit character"
          />
        </Edit>
        <Suscriptions className="Suscriptions Max">
          <div>
            <h3>Unete a la comunidad</h3>
            <p>
              Estamos creando una comunidad increíble repartida por todo el
              mundo, así que ¡por qué no te unes a nosotros! Únete a la
              discusión en Discord, muéstranos tu fan art, chatea con nosotros
              en Twitter y suscríbete al boletín oficial.
            </p>
            <div className="flex-center">
              <button>
                <img
                  src={`${pathOrigin}/files/assets/icon-discord.png`}
                  alt="discord"
                  width="20"
                />
              </button>
              <button>
                <img
                  src={`${pathOrigin}/files/assets/icon-twitter.png`}
                  alt="twitter"
                />
              </button>
              <button>
                <img
                  src={`${pathOrigin}/files/assets/icon-telegram.png`}
                  alt="telegram"
                />
              </button>
              <button>
                <img
                  src={`${pathOrigin}/files/assets/icon-instagram.png`}
                  alt="instagram"
                />
              </button>
            </div>
          </div>
          <div className="grid Suscription_email">
            <img
              src={`${pathOrigin}/files/assets/envelope-suscription.png`}
              alt="envelope suscription"
            />
            <h4 className="title">Descubre lo ultimo de Citizen</h4>
            <p className="primary">
              Si quieres estar al día de todo lo relacionado con Citizen,
              ¡inscríbete a continuación!
            </p>
            <form onSubmit={handleSubmitForm}>
              <input type="email" placeholder="Correo electrónico" required />
              <label>
                <input type="checkbox" required />{" "}
                <span>Acepto los términos y condiciones.</span>
              </label>
              <label>
                <input type="checkbox" required />{" "}
                <span>
                  Acepto recibir ocasionalmente correos electrónicos de
                  marketing.
                </span>
              </label>
              <input type="submit" value="Suscribirse" className="white" />
            </form>
          </div>
        </Suscriptions>
      </Div>
    </Layout>
  );
};

export default WelcomePage;
