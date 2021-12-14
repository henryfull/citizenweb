import React from "react";
import { Link } from "react-router-dom";

import { ElementCard } from "../../Citizen/ElementCard/index";
import { OpenseaLogo } from "../../Atoms/OpenseaLogo/index";
import { Discord } from "../../Atoms/Discord/index";
import { Div } from "./styles";

const HomeCitizen = () => {
  return (
    <Div>
      <div className="clear grid col2">
        <div className="intro font_18">
          <p>Hello world!</p>
          <p>
            Citizen is a project based on the CryptoArt movement, combining a
            dystopian sci-fi universe with blockchain technology.
          </p>
          <p>
            Each collectible is a Citizen character, with its own mission and
            life, described in its data sheet.
          </p>

          <p>Participate in our socia media, and win your special rewards!</p>
          <p>
            No two tokens are exactly alike, plus each of them can only be
            officially owned by a single person on the Ethereum blockchain.
          </p>
          <p>
            Blockchain technology guarantees ownership. It cannot be replicated,
            subtracted, or destroyed.
          </p>
          <div>
            <a className="mg_2" rel="noreferrer" href="https://opensea.io/accounts/citizenNFT" target="_blank">
              <OpenseaLogo height="60" />
            </a>
            <a className="mg_2" rel="noreferrer" href="https://discord.gg/PRyNxE2G" target="_blank">
              <Discord height="60" />
            </a>
          </div>
        </div>
        <div className="rel center-content character">
          <Link to="/tokens" className="text-chart zero">
            2000 NFTs of unique characters
          </Link>
          <p className="text-chart one">They live in Ethereum's Blockchain</p>
          <p className="text-chart two">
          <a className="mg_2" rel="noreferrer" href="https://opensea.io/accounts/citizenNFT" target="_blank">Buy and trade them in Rarible &amp; Opensea
            </a>
          </p>
          <a className="mg_2" rel="noreferrer" href="https://discord.gg/PRyNxE2G" target="_blank">
          <p className="text-chart three">Join us in our Discord</p>
            </a>
          <ElementCard name="cat-1.png" width="300px" className="image" />
          <p className="text-center second">And discover their stories ...</p>
        </div>
      </div>
    </Div>
  );
};

export default HomeCitizen;
