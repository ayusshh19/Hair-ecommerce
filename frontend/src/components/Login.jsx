import React, { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import LoginIcon from "@mui/icons-material/Login";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setvaluesdata, setloading } from "../app/action";
export default function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    dispatch(setloading());
    const { email, password } = values;
    const { data } = await axios.post("https://backendrail-production.up.railway.app/login/", {
      email,
      password,
    });
    dispatch(setloading());
    dispatch(
      setvaluesdata({
        username: data.user[0].username,
        isseller: data.user[0].issseller,
        isadmin: data.user[0].isadmin,
      })
    );
    if (data.status === 404) {
      toast.error(data.response.data.msg);
    } else {
      toast.success(data.msg, toastobj);
      navigate("/");
      setvalues({
        email: "",
        password: "",
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
    <Logincomponent>
      <ToastContainer />
      <h1 className="logintitle">Login</h1>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="input-with-sx"
          label="Enter Email"
          variant="standard"
          name="email"
          value={values.email}
          onChange={(e) => handlechange(e)}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <KeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="input-with-sx"
          label="Enter password"
          variant="standard"
          name="password"
          value={values.password}
          onChange={(e) => handlechange(e)}
        />
      </Box>
      <Navbutton onClick={handlesubmit}>
        Login <LoginIcon />
      </Navbutton>
      <p>
        Dont have an account?
        <span
          onClick={() => {
            props.setlogin(!props.value);
          }}
        >
          {" "}
          Register here
        </span>
      </p>
    </Logincomponent>
  );
}

const Logincomponent = styled.div`
  padding: 2rem;
  .logintitle {
    color: #02bb86;
    text-align: center;
  }
  .MuiBox-root {
    margin: 2rem;
  }
  p {
    text-align: center;
  }
  p span {
    color: blue;
    cursor: pointer;
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
  margin: auto;
`;
