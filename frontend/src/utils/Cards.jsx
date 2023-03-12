import React from 'react'
import styled from 'styled-components'

export default function Cards(props) {
  return (
    <Cardcontainer>
        <div className="cardleft">
            <img src={props.image} alt="" srcset="" />
        </div>
        <div className="cardright">
            <h2>
                {props.text}
            </h2>
        </div>
    </Cardcontainer>
  )
}

const Cardcontainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 200px;
    background-color: #02bb86;
    margin: 2rem;
    border-radius: 1rem;
    .cardleft{
        width: 50%;
        height: 100%;
    }
    .cardright{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
    .cardleft img{
        width: 100%;
        height: 100%;
    }
`