import styled from "styled-components";

export const Div = styled.div`
  .character {
    max-width: 400px;
  }

  p {
    font-family: "gotham book";
    color: var(--second);
   
  }
  a:hover{
      color: var(--dark);
      svg {

      fill: var(--dark);
      }

  }
  .intro {
    p {
      /* color: var(--primary); */
      color: var(--second);
      width: 100%;
      padding: 3px;
      font-size: 16px;
      margin: 10px;
      text-shadow: 0 0 9px var(--second);
    }
  }
  /* .characterImage {
    -webkit-filter: grayscale(100%) brightness(50%) sepia(100%)
      hue-rotate(-180deg) saturate(1000%) contrast(0.8);
    filter: grayscale(100%) brightness(50%) sepia(100%) hue-rotate(-180deg)
      saturate(1000%) contrast(0.8);
  } */
  .text-chart {
    position: absolute;
    font-size: 14px;
    color: var(--second);
    text-shadow: 0 0 9px var(--second);

    /* color: var(--light); */
    &.zero {
      top: 10px;
      width: 150px;
      left: 10%;
      z-index: 1;
    }
    &.one {
      top: 20%;
      width: 140px;
      right: 20px;
      z-index: 1;
      text-align: right;
    }
    &.two {
      bottom: 35%;
      width: 100px;
      left: 10%;
      z-index: 1;
    }
    &.three {
      bottom: 47%;
      width: 80px;
      right: 10px;
      z-index: 1;
    text-align: right;
    }
  }
`;
