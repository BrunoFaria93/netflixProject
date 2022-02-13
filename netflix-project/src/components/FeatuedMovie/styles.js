import styled from "styled-components";

export const FeaturedMovieContainer = styled.section`
  height: 100vh;
`;
export const GoesBlack = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111, transparent 90%);

  .goesBlackHorizontal {
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 25%, transparent);
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .logo {
    width: 110px;
    height: 40px;
    margin: 50px;
    /* cursor: pointer; */
  }
`;
export const FeaturedInfo = styled.div`
  margin-left: 0px;
  margin-top: 150px;
  margin-left: 10px;
  h1 {
    font-size: 2rem;
  }
  .featured-info {
    font-size: 1rem;
  }
  div {
    margin: 5px;
    font-weight: bold;
  }
  p {
    font-weight: 300;
  }
  .featured-overview {
    max-width: 60%;
    height: 70px;
    color: #999;
    font-size: 0.8rem;
    margin-bottom: 10px;
    overflow: hidden;

    p {
      overflow-y: scroll;
    }
  }

  a {
    background-color: #f3f3f3;
    max-width: fit-content;
    padding: 0px 10px;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 7px;
    margin: 10px;
    margin-left: 0;
    text-decoration: none;
    color: #111;
    opacity: 1;
    transition: all ease 0.2s;
    overflow-y: hidden;
  }
  a:hover {
    opacity: 0.7;
  }
  .featured-genres {
    max-width: 60%;
    color: #999;
    font-size: 0.7rem;
    margin-bottom: 10px;
    font-weight: 300;
  }
  .featured-buttons {
    width: 70%;
    display: flex;
    flex-direction: row !important;
    justify-content: start !important;

    a {
      padding: 10px;
    }
  }
  @media (min-width: 1100px) {
    margin-left: 30px;
    margin-top: 150px;

    .featured-buttons {
      width: 50%;
    }

    h1 {
      font-size: 4rem;
    }
    .featured-info {
      font-size: 1.3rem;
    }
    div {
      margin: 5px;
      font-weight: bold;
    }
    p {
      font-weight: 300;
    }
    .featured-overview {
      height: auto;
      max-width: 40%;
      color: #999;
      font-size: 1.3rem;
      margin-bottom: 10px;

      p {
        overflow: hidden;
      }
    }

    a {
      background-color: #f3f3f3;
      max-width: fit-content;
      padding: 15px 17px;
      font-size: 1.5rem;
      font-weight: bold;
      border: none;
      border-radius: 7px;
      margin: 10px;
      margin-left: 0;
      text-decoration: none;
      color: #111;
      opacity: 1;
      transition: all ease 0.2s;
    }
    a:hover {
      opacity: 0.7;
    }
    .featured-genres {
      max-width: 40%;
      color: #999;
      font-size: 1.3rem;
      margin-top: 35px;
      font-weight: 300;
    }
  }
`;
