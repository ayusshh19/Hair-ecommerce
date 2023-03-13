import React from 'react'
import styled from 'styled-components'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from '@mui/icons-material/Person';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PasswordIcon from '@mui/icons-material/Password';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
export default function Register(props) {
  return (
    <Registercomponent>
        <h1 className='registertitle'>Register</h1>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="input-with-sx"
          label="Enter Username"
          variant="standard"
        />
      </Box>
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
        <ContactPhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="input-with-sx"
          label="Enter Phone Number"
          variant="standard"
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="input-with-sx"
          label="Enter Password"
          variant="standard"
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          id="input-with-sx"
          label="Enter Confirm Password"
          variant="standard"
        />
      </Box>
      <FormControlLabel
          value="start"
          control={<Checkbox />}
          label="Do you wish to be a Seller?"
          labelPlacement="start"
        />
      <Navbutton>
        Register <HowToRegIcon />
      </Navbutton>
      <p>Already have an acount ? <span onClick={()=>{props.setlogin(!props.value)}}>Login here</span></p>
    </Registercomponent>
  )
}

const Registercomponent=styled.div`
.registertitle{
  color: #02bb86;
    text-align: center;
}
    .MuiBox-root{
    margin: 1rem;
  }
  p{
    text-align: center;
  }
  p span{
    color: blue;
    cursor: pointer;
  }
`
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
