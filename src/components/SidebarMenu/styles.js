import styled from "styled-components";

export const Sidebar = styled.div`
  width: 100%;
  z-index: 9;
  transition: 0.5s;
  ul {
    display: flex;
  }

  ul li.active {
    filter: hue-rotate(250deg);
  }
  li {
    color: var(--second);
    padding: 5px;
    width: 100%;
    display: flex;
    cursor: pointer;
    position: relative;
    a {
      color: var(--second);
      text-shadow: 0 0 9px var(--second);
      /* padding: 4px; */
      display: flex;
      place-items: center;

      span {
        padding: 2px;
        &.logo {
          place-items: center;
          height: 24px;
          width: 24px;
          box-sizing: content-box;
          vertical-align: middle;
          -webkit-transition: 0.5s linear all;
          transition: 0.5s linear all;
          margin: auto;
          svg {
            height: 24px;
          }
        }
      }
    }
    svg {
      color: var(--second);
      height: 16px;
    }

    &._active {
      a {
        color: var(--dark);
        text-shadow: 0 0 9px var(--primary);
      }
      svg {
        color: var(--primary);
      }
      &::before {
        color: var(--second);
      }
  
      &::after {
        color: var(--second);
      }
    }
    &::before {
      content: "[";
      margin-right: 5px;
      font-size: 24px;
      color: var(--primary);
    }

    &::after {
      content: "]";
      margin-right: 5px;
      font-size: 24px;
      color: var(--primary);
    }
    &:hover {
      filter: hue-rotate(250deg);
      /* background: linear-gradient(to right, var(--primary), transparent); */
      a {
        color: white;
      }
    }
  }
  .menu {
    display: flex;
    z-index: 999;
    > li {
      &:hover {
        .submenu {
          li:hover p {
            filter: hue-rotate(250deg);
          }
        }
      }
    }
  }
  .submenu {
    position: absolute;
    left: 100%;
    top: -100%;
    display: none;
    background-color: var(--darkopacity);
    font-size: 16px;
    &.large {
      min-width: 650px;
    }
  }
  @media (max-width: 600px) {
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: stretch;
      align-content: stretch;
    }
    li {
      max-width: 70px;
      &::before {
        font-size: 54px;

        position: absolute;
        left: 0;
      }
      &::after {
        font-size: 54px;
        position: absolute;
        right: -7px;
      }

      svg {
        height: 24px;
      }
      a {
        display: block;
        width: 100%;
        span {
          text-align: center;
          display: block;
          width: 100%;
        }
        span.name {
          display: block;
          font-size: 12px;
        }
      }
    }
  }
`;
