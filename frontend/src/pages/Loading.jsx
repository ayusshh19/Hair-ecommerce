import React from 'react'
import styled from 'styled-components'
import loadinggif from '../assets/loader.gif'
export default function Loading() {
  return (
    <Loadingcomponent>
        <img src={loadinggif} alt="" srcset="" />
    </Loadingcomponent>
  )
}

const Loadingcomponent=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center ;
    img{
        width: 40%;
        height: 40%;
    }
    @media (max-width:990px) {
        img{
            width: 100%;
            height: 50%;
        }
    }
`