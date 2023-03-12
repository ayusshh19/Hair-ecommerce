import React, { useState } from "react";
import styled from "styled-components";
import Navlogo from "../assets/sadhana-hairoil-logo.png";
import { Link } from "react-router-dom";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  const count = useSelector((state) => state.counter.value);
  const [close, setclose] = useState(false);
  const menuhandle = () => {
    const menu = document.querySelector(".navcenter");
    menu.classList.toggle("open");
    setclose(!close);
  };
  function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }
  return (
    <Navbarcomponent>
      <div className="navleft">
        <img src={Navlogo} alt="" srcset="" />
      </div>
      <div className="navcenter">
        <ul>
          <li>
            <Link to={""}>Home</Link>
          </li>
          <li>
            <Link to={""}>About</Link>
          </li>
          <li>
            <Link to={""}>Become A Seller</Link>
          </li>
          <li>
            <Link to={""}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navright">
        <div className="innernav">
          <div className="menu-open" onClick={menuhandle}>
            {close ? <CloseIcon /> : <MenuIcon />}
          </div>
          <div className="icon-shopping">
            <IconButton aria-label={notificationsLabel(count)}>
              <Badge badgeContent={count} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </div>
        <div className="navbutton">
          <Navbutton>
            Sign Up <LoginIcon />
          </Navbutton>
        </div>
      </div>
    </Navbarcomponent>
  );
}

const Navbarcomponent = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom: 0.3rem solid #02bb86;
  z-index: 100;
  .navleft img {
    width: 10rem;
    height: 3rem;
  }
  .navleft {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .innernav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .navcenter {
    flex: 3;
    justify-content: center;
    align-items: center;
  }
  .navcenter ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .navcenter li {
    list-style-type: none;
  }

  .navcenter a {
    position: relative;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    color: black;
    padding: 0 10px;
  }
  .navcenter a::after {
    content: "";
    position: absolute;
    background-color: #02bb86;
    width: 100%;
    height: 3px;
    width: 0;
    left: 0;
    top: -5px;
    transition: 0.3s;
  }
  .navcenter a:hover::after {
    width: 100%;
  }
  .navright {
    flex: 2;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .icon-shopping {
    font-size: 2rem;
  }
  .menu-open {
    display: none;
  }
  .navbutton button {
    width: 100%;
  }
  @media (max-width: 990px) {
    height: 6rem;
    .menu-open {
      display: block;
    }
    .navbutton {
      display: block;
      width: 100%;
    }
    .innernav {
      width: 100%;
      display: flex;
    }
    .navcenter {
      flex: 0;
      position: absolute;
      top: 17%;
      right: 100%;
      width: 200px;
      height: 20vh;
      background-color: #02bb86;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      border-radius: 2rem;
      transition: 2s all ease;
    }
    .navcenter ul {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
    }
    .navcenter li {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 0.2rem;
    }
    .navbutton button {
      width: 100%;
    }
    .open {
      &.navcenter {
        right: 2%;
      }
    }
    .navright {
      flex-direction: column;
    }
    .navcenter li a {
      color: white;
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
  justify-content: space-evenly;
  align-items: center;
`;
