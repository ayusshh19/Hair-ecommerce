import React from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
export default function Contact() {
  return (
    <Contactcomponent id="contact">
      <div className="contactleft">
        <h1 className="contacttitle">Contact Us</h1>
        <Box className="contactinput" sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField fullWidth id="input-with-sx" label="Enter Full Name" variant="standard" />
        </Box>
        <Box className="contactinput" sx={{ display: "flex", alignItems: "flex-end" }}>
          <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField fullWidth id="input-with-sx" label="Enter Email" variant="standard" />
        </Box>
        <Box className="contactinput" sx={{ display: "flex", alignItems: "flex-end" }}>
          <ChatBubbleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField fullWidth id="input-with-sx" label="Enter Message" variant="standard" />
        </Box>
        <Navbutton>
            Contact Us <PhoneIcon />
        </Navbutton>
      </div>
      <div className="contactright">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.4483790050253!2d73.14123331470057!3d19.26285798698105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7968efdd6afd5%3A0xab73b50556fa9e83!2sOsho%20Dhara%20Green!5e0!3m2!1sen!2sin!4v1678626669589!5m2!1sen!2sin"
          title="myaddress"
          width="100%"
          height="90%"
          loading="lazy"
        ></iframe>
      </div>
    </Contactcomponent>
  );
}

const Contactcomponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  .contactleft {
    width: 50%;
    height: 100%;
    padding: 2rem;

  }
  .contactright {
    width: 50%;
    height: 100%;
  }
  .contacttitle{
    color: #02bb86;
    text-align: center;
  }
  .contactinput{
    margin: 2rem;
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
