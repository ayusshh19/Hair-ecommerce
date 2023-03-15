import React from "react";
import styled from "styled-components";
import seller from "../assets/cardimages/seller.png";
import Sellercards from "../utils/Sellercards";
import WorkIcon from "@mui/icons-material/Work";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DiscountIcon from "@mui/icons-material/Discount";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from '@mui/icons-material/Storefront';
export default function Seller() {
  return (
    <Sellercomponent id="seller">
      <div className="sellerleft" data-aos="fade-down-right">
        <img src={seller} alt="" srcset="" />
      </div>
      <div className="sellerright" data-aos="fade-down-left">
        <h1 className="benefitstitle">Benefits</h1>
        <div className="rightcontent">
          <Sellercards
            icon={WorkIcon}
            Maintext={"Home"}
            text={"Earn through work from with minimum efforts"}
          />
          <Sellercards
            icon={AttachMoneyIcon}
            Maintext={"Make profits"}
            text={"Make profit with each sell you do"}
          />
          <Sellercards
            icon={DiscountIcon}
            Maintext={"25% Off"}
            text={"Get 25% discount after your first sell"}
          />
          <Sellercards
            icon={PeopleIcon}
            Maintext={"Community"}
            text={"Make your network grow and become a part of community"}
          />
        </div>
        <Navbutton >
            Proceed to Become Seller <StorefrontIcon />
        </Navbutton>
      </div>
    </Sellercomponent>
  );
}

const Sellercomponent = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  @media (max-width:990px) {
    height: 100%;
    flex-direction: column;
    .sellerleft {
    width: 100% !important;
    height: 50% !important;
  }
  .sellerleft img {
    width: 100%;
    height: 100%;
  }
  .sellerright {
    width: 100% !important;
    height: 50% !important;
  }
  }
  .sellerleft {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sellerleft img {
    width: 80%;
    height: 80%;
  }
  .sellerright {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .rightcontent{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .benefitstitle{
    color: #02bb86;
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
  margin: 1rem;

`;
