import React,{useState} from 'react';
import '../css/item_check.css'
import {useCartContext} from '../context/cart_context'

const formatPrice = (number) => {
 return new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD',
 }).format(number / 100)
}
const ItemCheck =(prop)=>
{
  let item=prop.info
  const {cart,total_items,total_amount,addToCart, removeItem, toggleAmount, clearCart}=useCartContext()

     return(

          <>
            <div className="check-item">
              <div className="item-pic"><img src={item.image} alt=""/> </div>
              <div className="item-name"><p>name:</p><h3>{item.name}</h3></div>
              <div className="-item-price"><p>price:</p><h3>{formatPrice(item.price)}</h3></div>
              <div className="item-amount"><p>amount:</p><h3>{item.amount}</h3></div>
              <div className="item-delete" onClick={()=>{removeItem(item.id)}}>X</div>

            </div>
          </>



         )
}
export default ItemCheck;
