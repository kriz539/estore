import React from 'react'
import over from "./over sized.png";
import polo from "./polo.webp";
import jersy  from "./jersy.webp";

const Productcard = () =>
  {
  return (
    <div id='cards'>
      <div className='bella'>
        <img className='img1' src={over} alt=""/>
        <h1>oversized t-shirt</h1>
        <h2>Price:$899</h2>
        <p>colors</p>
      <div id='colors'>
        <div className='d1'> </div>
        <div className='d2'> </div>
        <div className='d3'> </div>
      </div>
    </div>


    <div className='bella'>
        <img className='img1' src={polo} alt=""/>
        <h1>polo t-shirt</h1>
        <h2>Price:$1499</h2>
        <p>colors</p>
      <div id='colors'>
        <div className='d1'> </div>
        <div className='d2'> </div>
        <div className='d3'> </div>
        
      </div>
    </div>



    <div className='bella'>
        <img className='img1' src={jersy} alt=""/>
        <h1>jersy</h1>
        <h2>Price:$999</h2>
        <p>colors</p>
      <div id='colors'>
        <div className='d1'> </div>
        <div className='d2'> </div>
        <div className='d3'> </div>
        </div>
      </div>
    </div>
  )
}

export default Productcard;