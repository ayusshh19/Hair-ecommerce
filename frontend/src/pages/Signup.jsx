import React, { useState } from 'react'
import styled from 'styled-components'
import signup from '../assets/login.png'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Register from '../components/Register'
import { useSelector } from "react-redux";
import Loading from './Loading'
export default function Signup() {
    const [login,setlogin]=useState(true)
    const loading = useSelector((state) => state.counter.loading);
  return (
   <>
   {
    !loading?(
        <><Navbar /><Signupcomponent>

                      <div className="signupcontainer">
                          <div className="signuplogo">
                              <img src={signup} alt="" />
                          </div>
                          <div className="mainsignupcontent">
                              {login ? <Login setlogin={setlogin} value={login} /> : <Register setlogin={setlogin} value={login} />}
                          </div>
                      </div>
                  </Signupcomponent></>
    ):(
        <Loading />
    )
   }
   </>
  )
}

const Signupcomponent=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
    .signupcontainer{
        width: 70%;
        height: 70%;
        /* background-color: beige; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width:990px) {
        height: 100vh;
        .signupcontainer{
            width: 100%;
            height: 100vh;
        flex-direction: column;
    }
    .signuplogo{
        width: 100% !important;
        height: 50%;
    }
    .mainsignupcontent{
        width:100% !important;
        height: 50% !important;
        margin-bottom: 2rem !important;

    }
    }
    .signuplogo{
        width: 50%;
        height: 100%;
    }
    .signuplogo img{
        width: 100%;
        height: 100%;
    }
    .mainsignupcontent{
        width: 50%;
        height: 100%;

    }
`

