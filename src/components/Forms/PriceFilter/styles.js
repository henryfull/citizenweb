import styled from "styled-components";
const inputthumbcolor = "#444444";
export const Ranges = styled.div`
  position: relative;
  background-color: #ccc;
  height: 20px;
  border-radius: 25px;
  overflow: hidden;
  margin: 10px;
  .visual {
    height: 100%;
    width: 50%;
    background-color: red;
  }
`;
export const BackgroundDinamicRangeMin = styled.div`
  height: 100%;
  background-color: var(--color-default-light);
  width: ${(props) => props.width}%;
`;

export const BackgroundDinamicRangeMax = styled.div`
  height: 100%;
  background-color: var(--color-default-light);
  width: ${(props) => props.width}%;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Range = styled.input`
  pointer-events: none;
  position: absolute;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  border: none;
  border-radius: 25px;
  background: lightgrey;
  box-shadow: inset 0 1px 0 0 #adadad, inset 0 -1px 0 0 #bababa;
  -webkit-box-shadow: inset 0 1px 0 0 #adadad, inset 0 -1px 0 0 #bababa;
  left: 0;
  top: 0px !important;
  width: 100%;
  outline: none;
  height: 20px;
  margin: 0;
  padding: 0px;
  background-color: transparent;

  &:-webkit-slider-thumb {
    pointer-events: all;
    position: relative;
    z-index: 11;
    outline: 0;
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0px 0px 2px #828282;
    // border: 1px solid var(--color-default);
    //   background: #DADADA;
    background-size: cover;
    cursor: ew-resize;

    &:active,
    &:hover {
      width: 40px;
      height: 40px;
    }
  }

  &.min::-webkit-slider-thumb {
    background: url("https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png")
      no-repeat white;
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA4MCAxNDIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyI+PHBhdGggaWQ9IkJhY2siIGQ9Ik0zLjA1NywyLjk1MWMzLjkyMSwtMy45MjEgMTAuMjc0LC0zLjkzNyAxNC4yMTQsLTAuMDM0YzEzLjc0NywxMy42MTYgNDMuOTA0LDQzLjQ4NiA1OC45NTksNTguMzk3YzIuMzY1LDIuMzQyIDMuNzAyLDUuNTI5IDMuNzE4LDguODU3YzAuMDE2LDMuMzI5IC0xLjI5MSw2LjUyOCAtMy42MzQsOC44OTNjLTE1LjAxNSwxNS4xNTggLTQ1LjIyNyw0NS42NTcgLTU5LjAxMyw1OS41NzVjLTEuODk0LDEuOTEyIC00LjQ3MiwyLjk5MSAtNy4xNjQsMi45OTdjLTIuNjkxLDAuMDA3IC01LjI3NCwtMS4wNiAtNy4xNzcsLTIuOTYzYy0wLjAwMiwtMC4wMDEgLTAuMDAzLC0wLjAwMiAtMC4wMDQsLTAuMDA0Yy0zLjkyNSwtMy45MjQgLTMuOTQ0LC0xMC4yODIgLTAuMDQyLC0xNC4yM2MxMS4xMiwtMTEuMjUgMzIuNzA4LC0zMy4wOTIgNDQuODM5LC00NS4zNjVjMi4zNCwtMi4zNjggMy42NDMsLTUuNTY4IDMuNjI0LC04Ljg5N2MtMC4wMiwtMy4zMjkgLTEuMzYxLC02LjUxMyAtMy43MjksLTguODUzYy0xMi4wODQsLTExLjk0MiAtMzMuNDE1LC0zMy4wMjIgLTQ0LjU1NCwtNDQuMDNjLTEuOTE0LC0xLjg5MiAtMi45OTUsLTQuNDY5IC0zLjAwMywtNy4xNmMtMC4wMDgsLTIuNjkxIDEuMDU4LC01LjI3NSAyLjk2MSwtNy4xNzhjMC4wMDEsLTAuMDAxIDAuMDAzLC0wLjAwMyAwLjAwNSwtMC4wMDVaIiBzdHlsZT0iZmlsbDojMGEyN2FkO2ZpbGwtcnVsZTpub256ZXJvOyIvPjwvc3ZnPg==)
      no-repeat white;
    background-size: 6px;
    background-position: center;
    background-repeat: no-repeat;
  }
  &.max:-webkit-slider-thumb {
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA4MCAxNDIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyI+PHBhdGggaWQ9IkJhY2siIGQ9Ik03Ni44OTEsMTM4LjY4NWMtMy45MjEsMy45MjIgLTEwLjI3NCwzLjkzNyAtMTQuMjE0LDAuMDM1Yy0xMy43NDcsLTEzLjYxNyAtNDMuOTA0LC00My40ODYgLTU4Ljk1OCwtNTguMzk4Yy0yLjM2NSwtMi4zNDIgLTMuNzAzLC01LjUyOCAtMy43MTksLTguODU3Yy0wLjAxNiwtMy4zMjkgMS4yOTEsLTYuNTI3IDMuNjM0LC04Ljg5MmMxNS4wMTUsLTE1LjE1OSA0NS4yMjcsLTQ1LjY1OCA1OS4wMTQsLTU5LjU3NmMxLjg5NCwtMS45MTIgNC40NzIsLTIuOTkxIDcuMTYzLC0yLjk5N2MyLjY5MiwtMC4wMDYgNS4yNzUsMS4wNiA3LjE3OCwyLjk2M2MwLjAwMSwwLjAwMSAwLjAwMiwwLjAwMyAwLjAwNCwwLjAwNGMzLjkyNCwzLjkyNSAzLjk0MywxMC4yODIgMC4wNDEsMTQuMjNjLTExLjEyLDExLjI1MSAtMzIuNzA3LDMzLjA5MiAtNDQuODM4LDQ1LjM2NmMtMi4zNCwyLjM2NyAtMy42NDQsNS41NjcgLTMuNjI0LDguODk2YzAuMDE5LDMuMzI5IDEuMzYsNi41MTQgMy43MjgsOC44NTNjMTIuMDg1LDExLjk0MyAzMy40MTUsMzMuMDIyIDQ0LjU1NCw0NC4wM2MxLjkxNSwxLjg5MiAyLjk5NSw0LjQ2OSAzLjAwMyw3LjE2YzAuMDA4LDIuNjkyIC0xLjA1Nyw1LjI3NSAtMi45Niw3LjE3OGMtMC4wMDIsMC4wMDIgLTAuMDA0LDAuMDA0IC0wLjAwNiwwLjAwNVoiIHN0eWxlPSJmaWxsOiMwYTI3YWQ7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PC9zdmc+)
      no-repeat white;
    background-size: 6px;
    background-position: center;
  }

  &:-moz-range-thumb {
    pointer-events: all;
    position: relative;
    z-index: 10;
    -moz-appearance: none;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 25px;
    background-image: linear-gradient(
      to bottom,
      lighten(${inputthumbcolor}, 60%) 0,
      ${inputthumbcolor} 100%
    ); /* W3C */
  }

  &:-ms-thumb {
    pointer-events: all;
    position: relative;
    z-index: 11;
    -ms-appearance: none;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    border: 0;
    background-image: linear-gradient(
      to bottom,
      lighten(${inputthumbcolor}, 60%) 0,
      ${inputthumbcolor} 100%
    ); /* W3C */
  }

  &:-moz-range-track {
    position: relative;
    z-index: -1;
    background-color: rgba(0, 0, 0, 1);
    border: 0;
  }

  &:last-of-type::-moz-range-track {
    -moz-appearance: none;
    background: none transparent;
    border: 0;
  }

  &:-moz-focus-outer {
    border: 0;
  }
`;


export const Section = styled.section`
  position: relative;
`;

export const Buttons = styled.div`
  position: absolute;
  right: 10px;
  svg {
  }
`;

export const InputBox = styled.input`
  width: 100%;
  color: var(--primary);
  font-size: 18px;
  padding: 3px;
  &::placeholder {
    font-size: 13px;
  }
  outline: none;
`;

export const LabelBox = styled.label`
  background-color: var(--light);
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  margin: 10px auto;
  border: 1px solid ${(props) => props.color || "var(--primary)"};
  padding: 10px;
  transition: 0.5s linear all;
  position: relative;
  &:-internal-autofill-selected {
    background-color: none;
  }
  &:focus-within {
    background-color: var(--light);
    transition: 0.5s linear all;
  }
  .title {
    position: absolute;
    background: var(--light);
    color: var(--primary);
    top: -10px;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 13px;
    text-align: left;
    font-family: Arial, "Franklin Gothic Medium", "Arial Narrow", sans-serif;
  }
`;
