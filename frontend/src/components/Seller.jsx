import React from 'react'
import styled from 'styled-components'
import seller from '../assets/cardimages/seller.png'

export default function Seller() {
  return (
    <Sellercomponent>
        <div className="sellerleft">
            <img src={seller} alt="" srcset="" />
        </div>
        <div className="sellerright">
            <h1>Benefits</h1>
        </div>
    </Sellercomponent>
  )
}

const Sellercomponent=styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
    .sellerleft{
        width: 50%;

    }
`