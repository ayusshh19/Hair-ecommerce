import React from 'react'
import styled from 'styled-components'

export default function Sellercards(props) {
  return (
    <Sellercardscomponent>
        <div className="mainhead">
            <h1>
                {<props.icon className={'iconmain'}/>} {props.Maintext}
            </h1>
        </div>
        <div className="content">
            <h3>
                {props.text}
            </h3>
        </div>
    </Sellercardscomponent>
  )
}

const Sellercardscomponent=styled.div`
   width: 275px;
    height: 200px;
    background-color:  #02bb86;
    margin: 1rem;
    color: white;
    border-radius: 1rem;
    
    .mainhead {
        font-size: 1.3rem;
        text-align: center;
    }
    .mainhead h1 {
        margin: 0;
    }
    .mainhead svg{
        font-size: 1.5rem;
    }
    .iconmain{
        scale: calc(1.4);
    }
    .content{
        text-align: center;
    }
`