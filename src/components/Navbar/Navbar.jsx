import React from 'react'
import './Navbar.css'
const icon = require('../../img/EFood.png')
const search = require('../../img/Search.png')
const cart = require('../../img/cart.png')
export default function Navbar() {
  return (
    <>
    <div className="container">
            <div className="row mt-5">
                <div className="col-3" >
                    <img src={icon} alt="" />
                </div>
                <div className="col-5">
                    <ul className="list">
                        <li className="active list_item">Home</li>
                        <li className="list_item">Service</li>
                        <li className="list_item">Top Sites</li>
                        <li className="list_item">Contact</li>
                    </ul>
                </div>

                <div className="col-4">
                <div className="box">
                          <div className="image_right">
                          <img src={search} claasName="list_search" alt="" />
                        <img src={cart} claasName="list_cart" alt="" />
                          </div>
                       <div className="btn_box">
                       <button className="btn_primary">Sign Up</button>
                       </div>
                        </div>
                </div>
            </div>
         </div>
    </>
  )
}
