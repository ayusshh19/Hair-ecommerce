import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import LoginIcon from '@mui/icons-material/Login';
export default function Login(props) {
  return (
    <Logincomponent>
      <h1 className="logintitle">Login</h1>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="input-with-sx"
          label="Enter Email"
          variant="standard"
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <KeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="input-with-sx"
          label="Enter password"
          variant="standard"
        />
      </Box>
      <Navbutton>Login <LoginIcon /></Navbutton>
      <p>Dont have an account?<a onClick={()=>{props.setlogin(!props.value)}}> Register here</a></p>
    </Logincomponent>
  );
}

const Logincomponent = styled.div`
  padding: 2rem;
  .logintitle {
    color: #02bb86;
    text-align: center;
  }
  .MuiBox-root{
    margin: 2rem;
  }
  p{
    text-align: center;
  }
  p a{
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
