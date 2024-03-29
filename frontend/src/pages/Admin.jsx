import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Admincards from "../components/Admincards";
import CollapsibleTable from "../components/Table";
import Tree from "../components/Tree";
export default function Admin() {
  const navigate = useNavigate();
  const [propsdata,setpropsdata]=useState(false)
  const [admincount, setadmincount] = useState({
    numusers: 0,
    numtransaction: 0,
    totolrevenue: 0,
    refundpendeing: 0,
  });
  const [tree,settree]=useState(false)
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      navigate("/");
    }
    const getdata = async () => {
      const admindata = await axios.get(
        "https://backendrail-production.up.railway.app/adminpanel/"
      );
      const filterdata = admindata.data.productlist.filter(
        (data) => data.paymentcompletion
      );
      const seller = filterdata.filter((data) => !data.sellerstatus);
      const countnumtotal = filterdata.map((data) => {
        return +data.productprice;
      });
      const totalamount = countnumtotal.reduce((curren, accumulator) => {
        return curren + accumulator;
      }, 0);
      
      setadmincount({
        ...admincount,
        numusers: admindata.data.userlist.length,
        numtransaction: filterdata.length,
        totolrevenue: totalamount,
        refundpendeing: seller.length,
      });
      setpropsdata(await admindata.data)
    };
    getdata();
  }, []);
  return (
    <>
      <Navbar />
      <Admincomponent>
        <Admincards num={admincount.numusers} text={'Number of users present in our system'}/>
        <Admincards num={admincount.numtransaction} text={'Number of payment successfull'}/>
        <Admincards num={admincount.totolrevenue} text={'Total revenue earned through online transaction'}/>
        <Admincards num={admincount.refundpendeing} text={'people remaining to refund money'}/>
      </Admincomponent>
      <Navbutton onClick={()=>settree(!tree)} >{tree?'Get Data':'Get Tree'}</Navbutton>
      {tree?<Tree propsdata={propsdata}/>:(propsdata?<CollapsibleTable propsdata={propsdata}/>:'')}
    </>
  );
}

const Admincomponent = styled.div`
width: 100%;
height: 20%;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: center;
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
  cursor: pointer;
`;