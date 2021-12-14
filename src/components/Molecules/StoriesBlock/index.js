import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Url } from "../../../helpers/utils";

export const Stories = (props) => {

  
  return (
    <div className="pdh_4 w100">
      {props.list.map((item, index) => {
        const token = props.items[item - 1];
        return (
          <>
            {token.published ? (
              <Link to={"/tokencard/" + token._id}>
                <Article key={`${item}_${index}`} className="">
                  <div className="block-image-story">
                    <img
                      src={`${process.env.PUBLIC_URL}files/characters/${token.imageCharacter.name}`}
                      alt={`character_${token.name}`}
                      className="characterImage-story"
                    />
                  </div>
                  <div>
                    <strong className="mg_2 flex-justify">
                      {" "}
                      <span>{token.name}</span>
                      <span>#{token.idToken}</span>
                    </strong>
                    <p className="mg_2">{token.aboutme}</p>
                  </div>
                </Article>
              </Link>
            ) : (
              <Article key={`${item}_${index}`} className="">
                <div className="block-image-story desactive">
                  <img
                    src={`${process.env.PUBLIC_URL}files/characters/${token.imageCharacter.name}`}
                    alt={`character_${token.name}`}
                    className="characterImage-story"
                  />
                </div>
                <div className="">
                  <strong className="mg_2 flex-justify">
                    <span>{token.name}</span>
                    <span>#{token.idToken}</span>
                  </strong>
                  <p className="mg_2 desactive">{token.aboutme.toLowerCase().replaceAll("a","j").replaceAll("o","b").replaceAll("e","q").replaceAll("u","e").replaceAll("s","a").replaceAll("n","s")}</p>
                </div>
              </Article>
            )}
          </>
        );
      })}
      {/* {items.map((item) => {
          return <p>{item.aboutme}</p>;
        })} */}
    </div>
  );
};
const Article = styled.section`
  background-color: rgba(0, 0, 0, 0.2);
  margin: 5px auto;
  display: grid;
  grid-template-columns: 150px auto;
  border: 2px solid var(--primary);
  strong,
  p {
    color: var(--second);
    &.desactive {
      font-family: 'alien';
      font-size: 18px;
      color: var(--primary);
    }
  }
  .block-image-story {
    &.desactive {
      img {
        filter: brightness(0);
        -webkit-filter: brightness(0);
      }
    }
    width: 150px;
    height: 150px;
    overflow: hidden;
    background-color: rgba(125,0, 0, 0.5);
    padding: 5px;
    clip-path: polygon(
      0 100%,
      25% 100%,
      75% 100%,
      100% 75%,
      100% 12%,
      100% 0,
      25% 0,
      0 25%
    );
    img {
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    display: block;
    padding: 5px;
    .block-image-story {
      float: left;
      margin-right: 10px;
      width: 100%;
      height: 250px;
    }
    strong {
      display: inline-flex;
      flex-direction: row-reverse;
      span {
        padding: 2px;
      }
    }
  }
`;
export default Stories;
