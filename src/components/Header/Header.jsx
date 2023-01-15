import React from 'react'
import './Header.css'

export default function Header(props) {
  return (
    <>
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-6">
          <h1 className="food_text">Super Fast <span>Food <br />
Delivery</span> Service</h1>
<p className='text_info'>We provide super fast-delivery service. Let’s use our <br />services right now and get discounts of up to 50%</p>
<div className="boxes">
  <button className="explore_btn">Explore Food</button>
  <a href="#!" className="download_link">Download App</a>
</div>
        </div>

        <div className="col-6">
          <img src={props.image} alt="" className="person_image" />
        </div>
      </div>
    </div>
    </>
  )
}
