import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
 import { items } from './Data';
import Prodect from './Prodect';

export default function Searchitem({cart,setcart}) {
  // console.log(useParams);
let[filterdata,setfilterdata]=useState([]);

  const {term}=useParams();
  useEffect (()=>{
    const filterdata=()=>{
      const data =items.filter((p)=>p.title.toLowerCase().includes(term.
      toLowerCase()));
      console.log(data);
      setfilterdata(data);
    }
    filterdata();
    
  },[term])
  return (
    <div>
   <Prodect cart={cart} setcart={setcart} items={filterdata}></Prodect>
    </div>
  )
}

