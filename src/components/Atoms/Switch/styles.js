import styled from "styled-components";

export const Div = styled.div`
  .onoffswitch {
    position: relative;
    width: 90px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  .onoffswitch-checkbox {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  .onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 0px solid #999999;
    border-radius: 50px;
    height: 24px;
  }
  .onoffswitch-inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
  }
  .onoffswitch-inner:before,
  .onoffswitch-inner:after {
    display: block;
    float: left;
    width: 50%;
    height: 24px;
    padding: 0;
    line-height: 24px;
    font-size: 16px;
    color: white;
    font-family: Trebuchet, Arial, sans-serif;
    font-weight: bold;
    box-sizing: border-box;
  }
  .onoffswitch-inner:before {
    content: "SI";
    padding-left: 30px;
    background-color: var(--color-default-light);
    color: #ffffff;
  }
  .onoffswitch-inner:after {
    content: "NO";
    padding-right: 30px;
    background-color: #333;
    color: #ffffff;
    text-align: right;
  }
  .onoffswitch-switch {
    display: block;
    width: 24px;
    height: 24px;
    margin: -0.5px;
    background: #ffffff;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 66px;
    border: 2px solid #333;
    border-radius: 50px;
    transition: all 0.3s ease-in 0s;
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
    margin-left: 0;
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
    right: 0px;
  }

  .onoffswitch-checkbox:checked ~ .onoffswitch-label .onoffswitch-switch {
    border: 2px solid royalblue;
  }
`;
