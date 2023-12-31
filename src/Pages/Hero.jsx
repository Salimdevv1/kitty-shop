import React from 'react'
import Feedback from './Feedback'
import Category from './Category'
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function Hero() {
  return (
    <div>
      <section className='hero'>
            <div className='intro'>
                <p>Discover the artistry of crochet with our brand, where creativity intertwines with craftsmanship. 
                    We offer a curated selection of 
                    premium crochet supplies, ensuring every stitch you make is a masterpiece.</p>
                    <AnchorLink href='#category' className='discover-btn' style={{textDecoration :"none" , color :"black" , width : 200}} ><button className='discover-btn'>Discover</button></AnchorLink>
            </div>
            <div className='hero-logo'>
                <img src="/img/kiity.jpg" alt="" className='kitty' />
            </div>

      </section>
      <div id='category'>
      <Category></Category>
      </div>
      <br /><br />
      <Feedback></Feedback>
      <br />
      <br />
    </div>
  )
}
