import React, { useState,useRef,useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import imglogo from "../assets/mainlogo.png";
import { useDispatch,useSelector } from "react-redux";
import {  setloading } from "../app/action";
import { decrement, increment } from "../app/action";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function Payment() {
  const bottomRef = useRef(null);
  const navigate = useNavigate();
  const [showaddress,setshowaddress]=useState(false)
  const [prodid, setprodid] = useState(0);
  const userdetails = useSelector((state) => state.counter.userdetails);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      navigate("/");
    }
  },[])
  const [values, setvalues] = useState({
    buildingaddress: "",
    city: "",
    state: "",
    address: "",
    landmark: "",
    pincode: "",
  });
  const handlepayment=async (e)=>{
    e.preventDefault();
    setshowaddress(!showaddress)
    dispatch(setloading());
    const proddata  = await axios.post("https://backendrail-production.up.railway.app/purchase/", {
      username:userdetails.username,
      productprice:count*1999,
      productname:'Sadhana Hair oil'
    }).then((data)=>{
      console.log(data.data.proddata.id)
      setprodid(data.data.proddata.id)
      toast.success('Payment added!!!', toastobj)
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }).catch(()=>{
      toast.error('Click on purchase again');
    })
    
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    dispatch(setloading());
    const { buildingaddress, city, state, address, landmark, pincode } = values;

    const { data } = await axios.post("https://backendrail-production.up.railway.app/address/", {
      prodid:prodid,
      buildingaddress,
      city,
      state,
      address,
      landmark,
      pincode,
    });
    dispatch(setloading());
    if (data.status === 404) {
      toast.error(data.response.data.msg);
    } else {
      toast.success('address added', toastobj);
      navigate("/");
      setvalues({
        buildingaddress: "",
        city: "",
        state: "",
        address: "",
        landmark: "",
        pincode: "",
      });
    }
  };
  const toastobj = {
    position: "top-center",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handlechange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />
      <ToastContainer />
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
              <Navbutton
              onClick={handlepayment}>₹ {1999 * count}</Navbutton>
            </div>
          </div>
          {
            showaddress?(
              <div className="address" ref={bottomRef}>
            <h1 className="addresstitle">Delivery Address</h1>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <ApartmentIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="FlatNo/building name "
                variant="standard"
                name="buildingaddress"
                fullWidth
                value={values.buildingaddress}
                onChange={(e) => handlechange(e)}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LocalShippingIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                id="input-with-sx"
                label="Address"
                variant="standard"
                fullWidth
                name="address"
                value={values.address}
                onChange={(e) => handlechange(e)}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LocationCityIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                id="input-with-sx"
                label="City"
                variant="standard"
                fullWidth
                name="city"
                value={values.city}
                onChange={(e) => handlechange(e)}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <FlightTakeoffIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                id="input-with-sx"
                label="State"
                variant="standard"
                fullWidth
                name="state"
                value={values.state}
                onChange={(e) => handlechange(e)}
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
                  name="pincode"
                  value={values.pincode}
                  onChange={(e) => handlechange(e)}
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
                  name="landmark"
                  value={values.landmark}
                  onChange={(e) => handlechange(e)}
                />
              </Box>
            </div>
            <Navbutton onClick={handlesubmit}>Proceed to payment</Navbutton>
          </div>
            ):''
          }
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
  @media (max-width: 990px) {
    margin-bottom: 2rem;
    .paymentcontainer {
      width: 100%;
    }
    .addresstitle {
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
    .paymentbutton {
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
  margin: 1rem;
  cursor: pointer;
`;
const Increment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
