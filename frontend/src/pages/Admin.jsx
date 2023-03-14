import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Admin() {
  const navigate=useNavigate()
  const [admincount,setadmincount]=useState({
    numusers:0,
    numtransaction:0,
    totolrevenue:0,
    refundpendeing:0
  })
  useEffect(()=>{
    const username=localStorage.getItem('username')
    if(!username){
      navigate("/")
    }
    const getdata=async()=>{
      const admindata=await axios.get('https://backendrail-production.up.railway.app/adminpanel/')
      console.log(admindata)
      setadmincount({...admincount,['numusers']:admindata.data.userlist.length})
      const filterdata=admindata.data.productlist.filter((data)=>data.paymentcompletion)
      console.log(filterdata)
    }
    getdata()
  },[])
  return (
    <>
    <Navbar />
    <Admincomponent>
      <h1>admin panel</h1>
      <h3>users count {admincount.numusers}</h3>
      <h3>payment count {admincount.numtransaction}</h3>
      <h3>total count {admincount.totolrevenue}</h3>
      <h3>refund pending count {admincount.refundpendeing}</h3>
      </Admincomponent>
    </>
  )
}

const Admincomponent=styled.div`
  
`