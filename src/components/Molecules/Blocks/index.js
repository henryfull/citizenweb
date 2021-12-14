import React from "react";
import styled from "styled-components";

const Blocks = (params) => {
  return (
    <Div className="pdh_4">
      <article className="flex">
        <div className="pd_2 block-image">
          <img
            src={`${process.env.PUBLIC_URL}files/symbols/emblem-establishment.svg`}
            alt={`emblem-establishment`}
          />
        </div>
        <div>
          <h4 className="primary">THE ESTABLISHMENT</h4> 
          <p>
            The dominant block in past wars, now tries to maintain its status,
            contenting and containing the masses by promoting a virtual paradise
            called "Ether". The Establishment bloc is made up of businessmen,
            rulers, policemen, masters, advisors and an upper middle class that
            maintains its status by acting as influencers in Ether.
          </p>
        </div>
      </article>
      <article className="flex">
        <div className="pd_2 block-image">
          <img
            src={`${process.env.PUBLIC_URL}files/symbols/emblem-citizens.svg`}
            alt={`emblem-establishment`}
          />
        </div>
        <div>
          <h4 className="primary">THE CITIZENS</h4>
          <p>
            Nowadays, robots are in charge of the jobs that Citizen usually
            developed. Now, the Establishment supports them, albeit in a
            precarious way. They mostly hang out in the fascinating world of
            Ether. But some of them are struggling to get ahead, and keep real
            jobs. They mostly hang out in the fascinating world of Ether, which
            is why they are called "virtuals". But some of them, the
            "artisans",struggle to progress, and maintain real jobs, already
            almost extinct.
          </p>
        </div>
      </article>
      <article className="flex">
        <div className="pd_2 block-image">
          <img
            src={`${process.env.PUBLIC_URL}files/symbols/emblem-cyborgs.svg`}
            alt={`emblem-establishment`}
          />
        </div>
        <div>
          <h4 className="primary">THE CYBORGS</h4>
          <p>
            Dr. Orwell performed robotic implants on a group of outsiders four
            years ago. Many of them acquired great qualities that now apply in
            programming and designing the complex world of Ether. Some others
            betray the Dr. and the Establishment in alliance with the most
            revolutionary Citizens.
          </p>
        </div>
      </article>
    </Div>
  );
};

const Div = styled.div`
  article {
    display: flex;
    margin-bottom: 20px;
    .block-image {
      min-width: 150px;
      padding: 10px;
      display: grid;
      place-items: center;
      img {
        filter: invert();
        height: 100px;

      }
      @media (max-width: 600px) {
      img {
        width: 60%;
        height: auto;
      }
    }
    }

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

export default Blocks;
