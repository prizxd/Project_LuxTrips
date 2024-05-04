import React from 'react'
import pin2 from '../../assets/pin_2.png'
import './cards.scss'

export default function Card2() {
  return (
    <div className='second'>
      <img src={pin2} alt="" />
      <h1>Collecting precious moments is our utmost goal.</h1>
      <p>Our exclusive network of trusted local partners allows us to carefully curate every detail. </p>
    </div>
  )
}