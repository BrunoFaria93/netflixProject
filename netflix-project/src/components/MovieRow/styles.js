import styled from "styled-components";

export const MovieRowList = styled.div`
  overflow-x: scroll;
  display: flex;
  padding: 0 10px;
  transition: all ease 0.3s;
  img {
    transform: scale(0.95);
    transition: all ease 0.2s;
  }

  @media (min-width: 1100px) {
    overflow-x: hidden;
    width: 100%;
    display: flex;
    padding: 0 30px;
    transition: all ease 0.3s;
    img {
      transform: scale(0.9);
      transition: all ease 0.2s;
    }
    img:hover {
      transform: scale(1);
      cursor: pointer;
    }
  }
`;

export const MovieRowContainer = styled.div`
  margin-bottom: 30px;

  h2 {
    margin: 0 0 0 10px;
    overflow: hidden;
  }

  .movieRow-left,
  .movieRow-right {
    display: none;
  }

  @media (min-width: 1100px) {
    margin-bottom: 30px;

    h2 {
      margin: 0 0 0 30px;
    }

    .movieRow-left,
    .movieRow-right {
      position: absolute;
      width: 40px;
      height: 450px;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 99;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      cursor: pointer;
      opacity: 0;
      transition: all ease 0.5s;
    }

    .movieRow-left {
      left: 0;
    }

    .movieRow-right {
      right: 0;
    }
    :hover {
      .movieRow-right {
        opacity: 1;
      }
      .movieRow-left {
        opacity: 1;
      }
    }
  }
`;
