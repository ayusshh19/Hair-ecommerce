import React from 'react'
import styled from 'styled-components'
import signup from '../assets/login.png'
export default function Signup() {
  return (
    <Signupcomponent>
        <div className="signupcontainer">
            <div className="signuplogo">
                <img src={signup} alt="" />
            </div>
            <div className="mainsignupcontent">

            </div>
        </div>
    </Signupcomponent>
  )
}

const Signupcomponent=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: aqua;
    .signupcontainer{
        width: 70%;
        height: 70%;
        background-color: beige;
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

