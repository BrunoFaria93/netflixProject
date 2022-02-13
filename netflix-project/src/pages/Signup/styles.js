import styled from "styled-components";

export const MainSignup = styled.main`
  background-color: rgba(0, 0, 0, 0.75);

  .logo {
    display: none;
  }
  .motion-div {
    width: 90vw;
  }
  .container-box {
    max-width: 90vw;
  }
  .container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
      margin-left: 25px;
    }
  }
  .text-login {
    display: none;
  }

  .input-login {
    width: 100%;
  }
  .input-password {
    width: 100%;
  }
  .button-enter {
    width: 100%;
  }
  .singup-button {
    font-size: 12px;
    margin: 0 auto;
  }
  .login-text-father {
    width: 100%;
  }
  .title {
    margin-left: 0;
  }
  @media (min-width: 590px) {
    .motion-div {
      min-width: 55%;
      max-width: 55%;
    }
  }
  @media (min-width: 740px) {
    .motion-div {
      min-width: 45%;
      max-width: 45%;
    }
  }

  @media (min-width: 1100px) {
    .title {
      margin-left: 38px;
    }
    .singup-button {
      font-size: 14px;
      margin: 0;
    }
    .login-text-father {
      margin-top: 10px;
      width: 80%;
      justify-content: space-between;
    }
    .text-login {
      display: block;
      font-size: 16px;
      text-align: start;
    }
    .input-password {
      width: 80%;
    }
    .button-enter {
      width: 80%;
    }
    .input-login {
      width: 80%;
    }
    .motion-div {
      min-width: 30vw;
      max-width: 30vw;
    }
    .container {
      height: 80vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 0px;
    }

    .logo {
      display: block;
      position: absolute;
      top: 25px;
      left: 25px;
    }
  }
`;
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.87);
  color: #8c8c8c;
  width: 100vw;
  height: 13vh;
  margin: 0px;
  font-size: 10px;
  position: absolute;
  bottom: -12vh;

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.87);
    color: #8c8c8c;
    width: 100vw;
    height: 20vh;
    margin: 0px;
    position: relative;
    bottom: 0;
    font-size: 16px;
  }
`;
