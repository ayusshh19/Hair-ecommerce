import React, { useState } from "react";
import styled from "styled-components";
import mainlogo from "../assets/mainlogo.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../app/action";
import PaymentsIcon from "@mui/icons-material/Payments";
export default function Maincomponent() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [Additem, setadditem] = useState(true);
  const setincrement = () => {
    setadditem(!Additem);
  };
  return (
    <Maincontainer>
      <div className="css-blurry-gradient"></div>
      <div className="css-blurry-gradient1"></div>
      <div className="mainleft">
        <h1 className="leftmain">SADHANA HAIR OIL</h1>
        <h3>Revive your hair's natural shine with our nourishing hair oil.</h3>
        <h2>Purchase at ₹1999</h2>
        {Additem ? (
          <Navbutton onClick={setincrement}>
            Buy Now <LocalMallIcon />
          </Navbutton>
        ) : (
          <>
            <Increment>
              <div
                className="decrement additem"
                onClick={() => dispatch(decrement())}
              >
                -
              </div>
              <div className="count additem">{count}</div>
              <div
                className="increment additem"
                onClick={() => dispatch(increment())}
              >
                +
              </div>
            </Increment>
            <Navbutton>
              Proceed To Payment <PaymentsIcon />
            </Navbutton>
          </>
        )}
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
    gap: 0.2rem;
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
    font-size: 3rem;
    text-align: center;
    margin: 0;
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
  @media (max-width: 990px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: 100%;
    .mainleft {
      width: 100%;
      padding: 0;
      height: 40%;
    }
    .leftmain{
      font-size: 1rem;
    }
    .mainright {
      width: 100%;
      height: 30%;
    }
    .mainright img {
      width: 55%;
      height: 100%;
    }
    .css-blurry-gradient {
      width: 100px;
      height: 100px;
    }
    .css-blurry-gradient1 {
      width: 100px;
      height: 100px;
      left: 50%;
    }
    h3 {
    font-size: 1rem;
    text-align: center;
    margin: 0;
  }
  }
`;
const Navbutton = styled.button`
  padding: 0.8rem 2.5rem;
  background-color: #02bb86;
  border: none;
  border-radius: 0.6rem;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;

const Increment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .additem {
    /* flex: 1; */
    padding: 0.6rem;
    background-color: #02bb86;
    border-radius: 0.6rem;
    color: white;
    margin: 0.2rem;
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
  }
  .increment,
  .decrement {
    width: 1rem;
  }
  .count {
    flex: 3;
    width: 4rem;
    justify-content: center;
    align-items: center;
  }
`;
