import React from "react";
import styled from "styled-components";
import mainlogo from "../assets/mainlogo.png";
import LocalMallIcon from '@mui/icons-material/LocalMall';
export default function Maincomponent() {
  return (
    <Maincontainer>
      <div className="css-blurry-gradient"></div>
      <div className="css-blurry-gradient1"></div>
      <div className="mainleft">
        <h1 className="leftmain">SADHANA HAIR OIL</h1>
        <h3>Revive your hair's natural shine with our nourishing hair oil.</h3>
        <Navbutton >Buy Now  <LocalMallIcon /></Navbutton>
      </div>
      <div className="mainright">
        <img src={mainlogo} alt="" srcset="" />
      </div>
    </Maincontainer>
  );
}

const Maincontainer = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  .mainleft {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: normal;
    align-items: center;
    padding: 2rem;
  }
  .css-blurry-gradient {
    position: fixed;
    top: 30%;
    left: 10%;
    transform: translate(-50%, 0%);
    width: 600px;
    height: 400px;
    border-radius: 50% 22% 40% 80%;
    filter: blur(100px);
    background: radial-gradient(
      circle at 50% 50%,
      #3083dc,
      rgba(76, 0, 255, 0)
    );
    opacity: 0.6;
    z-index: -1;
  }
  .css-blurry-gradient1 {
    position: fixed;
    top: 20%;
    left: 80%;
    transform: translate(-50%, 0%);
    width: 600px;
    height: 600px;
    border-radius: 50% 22% 40% 80%;
    filter: blur(100px);
    background: radial-gradient(
      circle at 50% 50%,
      #02bb86,
      rgba(76, 0, 255, 0)
    );
    opacity: 0.6;
    z-index: -1;
  }
  h3 {
    font-size: 4rem;
    text-align: center;
  }
  .leftmain {
    color: #02bb86;
  }
  .mainright {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mainright img {
    width: 60%;
    height: 100%;
  }
  @media (max-width:990px) {
    flex-direction: column;
    .mainleft {
    width: 100%;
  }
  .mainright {
    width: 100%;
  }
  .mainright img {
    width: 100%;
    height: 100%;
  }
  .css-blurry-gradient {
    width: 100px;
    height: 100px;
  }
  .css-blurry-gradient1 {
    width: 100px;
    height: 100px;
  }}
`;
const Navbutton = styled.button`
  padding: 0.8rem 2.5rem;
  background-color: #02bb86;
  border: none;
  border-radius: 0.6rem;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
