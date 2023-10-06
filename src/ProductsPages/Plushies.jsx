import React from 'react'

export default function Plushies({plushies}) {
    console.log(plushies)
  return (
    <div className='plush-cont'>
      <center><div className='categ-title'>
      <h2 style={{textAlign :"center" , paddingTop : 14}}>
        Plushies
      </h2>
      <p >Our high-quality covers ensure your adorable plushies 
        stay safe from dust, spills, and wear, allowing them to continue bringing joy to your space while staying in pristine condition. Elevate your 
        plushie collection with our durable and stylish covers, designed to safeguard your treasured friends for years to come.</p>
        </div></center>
        <center><div className='plushies-container'>
      {plushies.map((e)=>(
        <div className='prod-cart'>
          <div>
        <img src={e.productImg}/>
        </div>
        <div className='prod-info'>
        <p className='prod-title'>{e.productTitle}</p>
        <p className='prod-price'>{e.productPrice} TND</p>
        <button className='cart-btn-add'>Add To Cart</button>
        </div>
        </div>
      ))}
      </div></center>
      <br /><br />
    </div>
  )
}
