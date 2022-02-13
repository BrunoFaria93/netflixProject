import styled from "styled-components";

export const BlackHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  right: 0;
  height: 100px;
  background: transparent;
  align-items: center;
  transition: all ease 0.4s;

  a {
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      width: 60px;
      height: 25px;
      margin: 0px;
    }
  }
  @media (min-width: 450px) {
    a {
      width: 200px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        width: 130px;
        height: 45px;
        margin: 0px;
      }
    }
  }
`;
