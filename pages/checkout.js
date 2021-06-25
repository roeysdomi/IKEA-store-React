import React, {useState,useEffect} from 'react';
import Picscroll from '../picscroll'
import useFetch from '../useFetch'
import {useFilterContext} from '../context/filter_context'
import {useCartContext} from '../context/cart_context'
import { useParams } from "react-router-dom";
import {sourcelink} from '../links'
import ItemCheck from '../component/item_check'
import {formatPrice} from '../utils/helpers'
import  '../css/checkout.css'
import {useUserContext } from '../context/user_context'

let loadusers=true;




const Checkout =()=>
{
  let count=0;

  const [submit,setSubmit]=useState(false)
   const {cart,total_items,total_amount,addToCart, removeItem, toggleAmount, clearCart}=useCartContext()
   const { loginWithRedirect, logout, myUser, isLoading, error }=useUserContext();




  return(
     <>
         <div className="con-checkout">
         {
           cart.map(item=>
             {
               return(
                              <ItemCheck key={item.id} info={item}/>
               )
             })
         }
          <div className="con-clear">
            <div on onClick={()=>{clearCart()}} className="clear">clear cart</div>
          </div>
         </div>
         <div className="con-total">
          <div className="total">
          <div className="line">
            <h3>subtotal:<span>{formatPrice(total_amount)}</span> </h3>
            <h3>delivery:<span>{total_items}</span></h3>
            <h3>final:<span>{formatPrice(total_amount+400)}</span></h3>
          </div>

            {myUser?<div on onClick={()=>{setSubmit(true)}} className="submitorder">submit order</div>:<div className="login" onClick={()=>{loginWithRedirect()}}>login first</div>}

          </div>
         </div>
         <div className="mes">
          {submit?<div className="confirmed">youre order has been accepted ,an email was sent to : {myUser.email}</div>:<p></p>}
         </div>
    </>
  )
}
export default Checkout;
