import React from 'react'
import styled from 'styled-components'
export default function Admincards(props) {
  return (
    <Admincomponent>
      <div className="title">
        <h1>{props.num}</h1>
      </div>
      <div className="admintext">
        <h3>{props.text}</h3>
      </div>
    </Admincomponent>
  )
}

const Admincomponent=styled.div`
flex: 1;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  min-height: 225px;
  background-color: #02bb86;
  color: white;
  text-align: center;
  border-radius: 1rem;
  margin: 2rem;
  .title{
    width: 100%;
    height: 10% !important;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
  }
  .admintext{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`