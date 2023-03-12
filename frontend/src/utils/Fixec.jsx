import React from 'react'
import styled from 'styled-components'
import whatsapp from '../assets/wplogo.png'
import phonecall from '../assets/phone.png'
export default function Fixec() {
  return (
    <Fixedwpcomponent>
        <a href="https://wa.me/9833040391">
        <img src={whatsapp} className="whatsapp" alt="" srcset="" />
        </a>
        <a href="tel:9833040391">
        <img src={phonecall} className="phonecall" alt="" srcset="" />
        </a>
    </Fixedwpcomponent>
  )
}

const Fixedwpcomponent=styled.div`
    .whatsapp{
        width: 5rem;
        height: 5rem;
        position: fixed;
        bottom: 2rem;
        right: 1rem;
    }
    .phonecall{
        width: 5rem;
        height: 5rem;
        position: fixed;
        bottom: 7rem;
        right: 1rem;
    }

`