import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import imglogo from "../assets/mainlogo.png";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../app/action";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PinDropIcon from '@mui/icons-material/PinDrop';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

export default function Payment() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <Paymentcontainer>
        <div className="paymentcontainer">
          <div className="payment">
            <div className="paymenttitle">
              <div className="paymentimg">
                <img src={imglogo} alt="" srcset="" />
              </div>
              <div className="paymentdesc">
                <h1>Sadhana Hair Oil</h1>
                <h3>
                  100% Natural Content best suitable to regrow and repair your
                  hair
                </h3>
              </div>
            </div>
            <div className="paymentbutton">
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
              <Navbutton>₹ {1999*count}</Navbutton>
            </div>
          </div>
          <div className="address">
            <h1 className="addresstitle">Delivery Address</h1>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <ApartmentIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="FlatNo/building name "
                  variant="standard"
                  fullWidth
                />
              </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LocalShippingIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Address"
                variant="standard"
                fullWidth
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LocationCityIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="City"
                variant="standard"
                fullWidth
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <FlightTakeoffIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="State"
                variant="standard"
                fullWidth
              />
            </Box>
            <div className="building">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <GpsFixedIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Pincode"
                variant="standard"
                fullWidth
              />
            </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Landmark"
                  variant="standard"
                  fullWidth
                />
              </Box>
            </div>
            <Navbutton>
              Proceed to payment
            </Navbutton>
          </div>
        </div>
      </Paymentcontainer>
    </>
  );
}

{
  /* buildingaddres       
city=models.CharField(max_length=100)
state=models.CharField(max_length=100)
address=models.CharField(max_length=1000)
landmark=models.CharField(max_length=100)
pincode=models.CharField(max_length=100) */
}
const Paymentcontainer = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  .paymentcontainer {
    width: 70%;
    height: 100%;
  }
  .addresstitle {
    color: #02bb86;
  }
  .payment {
    width: 100%;
    height: 30%;
    margin: 2rem;
    border-radius: 1rem;
    background-color: #3083dc;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .address {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
  }
  .building {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .paymenttitle {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width:990px) {
    .paymentcontainer{
      width: 100%;
    }
    .addresstitle{
      text-align: center;
    }
    .payment {
    width: 90%;
    height: 80vh;
    margin: 1rem;
    text-align: center;
    border-radius: 1rem;
    background-color: #3083dc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .paymentbutton{
    flex-direction: column;
  }
    .paymenttitle {
    width: 100% !important;
    height: 50vh !important;
    flex-direction: column;
  }
  .paymentimg {
    width: 60% !important;
    height: 60% !important;
  }
  .paymentimg img {
    width: 80%;
    height: 100%;
    margin: auto;
  }
  }
  .paymentimg {
    width: 30%;
    height: 100%;
  }
  .paymentimg img {
    width: 100%;
    height: 100%;
  }
  .paymentbutton {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
  margin: 1rem
  ;
`;
const Increment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .additem {
    /* flex: 1; */
    padding: 0.6rem;
    border-radius: 0.6rem;
    background-color: white;
    color: black;
    margin: 0.2rem;
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
    z-index: 100;
  }
  .increment,
  .decrement {
    width: 1rem;
  }
  .count {
    flex: 3;
    background-color: #02bb86;
    width: 4rem;
    color: white;
    justify-content: center;
    align-items: center;
  }
`;
