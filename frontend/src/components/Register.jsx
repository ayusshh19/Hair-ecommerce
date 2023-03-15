import React, { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PasswordIcon from "@mui/icons-material/Password";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setvaluesdata, setloading } from "../app/action";

export default function Register(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [checked, setChecked] = useState(true)
  const [values, setvalues] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: "",
    isseller: "",
    cpassword:""
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    dispatch(setloading());
    const { username, email, password, phonenumber } =
      values;
    const { data } = await axios.post("https://backendrail-production.up.railway.app/register/", {
      username,
      email,
      password,
      phonenumber,
      issseller:checked
    }).catch((response)=>{
      dispatch(setloading());
      toast.error('please fill all responses properly');
    });
    dispatch(
      setvaluesdata({
        username: username,
        isseller: checked
      })
    );
    if (data.status === 404) {
      toast.error(data.response.data.msg);
    } else {
      dispatch(setloading());
      toast.success(data.msg, toastobj);
      localStorage.setItem('username',username)
      localStorage.setItem('isseller',checked)
      navigate("/");
      setvalues({
        username: "",
        email: "",
        password: "",
        phonenumber: "",
        isseller: "",
        cpassword:""
      });
    }
  };
  const toastobj = {
    position: "top-center",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handlechange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <Registercomponent>
      <ToastContainer />
      <h1 className="registertitle">Register</h1>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="input-with-sx"
          label="Enter Username"
          variant="standard"
          name="username"
          value={values.username}
          onChange={(e) => handlechange(e)}
        />
      </Box>
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
        <ContactPhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="input-with-sx"
          label="Enter Phone Number"
          variant="standard"
          name="phonenumber"
          value={values.phonenumber}
          onChange={(e) => handlechange(e)}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="input-with-sx"
          label="Enter Password"
          variant="standard"
          name="password"
          value={values.password}
          onChange={(e) => handlechange(e)}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="input-with-sx"
          label="Enter Confirm Password"
          variant="standard"
          name="cpassword"
          value={values.cpassword}
          onChange={(e) => handlechange(e)}
        />
      </Box>
      <FormControlLabel
        value={checked}
        control={<Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked) } />}
        label="Do you wish to be a Seller?"
        labelPlacement="start"
        name="isseller"
        defaultChecked
        onChange={(e) => handlechange(e)}
      />
      <Navbutton onClick={handlesubmit}>
        Register <HowToRegIcon />
      </Navbutton>
      <p>
        Already have an acount ?{" "}
        <span
          onClick={() => {
            props.setlogin(!props.value);
          }}
        >
          Login here
        </span>
      </p>
    </Registercomponent>
  );
}

const Registercomponent = styled.div`
  .registertitle {
    color: #02bb86;
    text-align: center;
  }
  .MuiBox-root {
    margin: 1rem;
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
  cursor: pointer;
`;
