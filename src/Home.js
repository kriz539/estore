import React, { useEffect, useState } from 'react'
import kr from "./kr.jpg";
import Productcard from './Productcard';
import axios from 'axios';
const Home = () => {
 const[productData,setproductData]=useState([]);
async function getData()
{
  await axios.get('https://dummyjson.com/products').then((res)=> {
  setproductData(res.data.products);
});
}
useEffect(()=>{
  getData();
},[]);
console.log(productData);
  return (
    <div>
    <nav className="navbar">
     
      < img className="image" src={kr} alt="" />
      <input type="text" placeholder="Search products..." className="searchbar" />
      
      <div className="quiet">
        <p><a href="/home" className='y'> Home</a></p>
        <p><a href="#" className='z'>Contact</a></p>
        <p><a href="#" className='t'>items</a></p>
      </div>
     
    </nav>

<Productcard/>







    </div>
  )
}

export default Home;