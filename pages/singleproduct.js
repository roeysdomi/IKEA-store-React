import React, {useState,useEffect} from 'react';
import Picscroll from '../picscroll'
import useFetch from '../useFetch'
import {useFilterContext} from '../context/filter_context'
import {useCartContext} from '../context/cart_context'
import { useParams ,Link} from "react-router-dom";
import {sourcelink} from '../links'
import  '../css/singleproduct.css'
import {formatPrice} from '../utils/helpers'

let loadusers=true;



const Singlepro =()=>
{
  let count=0;
  let {id}=useParams()
  const [amount,setamount]=useState(1)
   const {useProduct,signleproduct,lastid}=useFilterContext()

   const {addToCart, removeItem, toggleAmount, clearCart}=useCartContext()

       useProduct(id)

 const additem=(id)=>
 {
   console.log("stock:"+signleproduct.stock);
       if(signleproduct.stock > amount)
       {
          toggleAmount(id,'inc')
       }
      else
       {
         setamount(amount)
       }

 }
 const removeamount=(id)=>
 {
     if(amount==1){setamount(1)}
   toggleAmount(id,'dec')

 }

 if(lastid!==id){return <h1 class="loading">loading product</h1>}
  return(
     <>
         <div className="con-single">
           <div className="single">
                <div className="pics">
                 <Picscroll pics={signleproduct.images}/>
                </div>
                <div className="info">
                  <h5>company: <span>{signleproduct.company}</span></h5>
                  <h5>name: <span>{signleproduct.name}</span></h5>
                  <h5>amount: <span>{signleproduct.stock}</span></h5>
                  <h5>stars: <span>{signleproduct.stars}</span></h5>
                  <h5>price: <span>{formatPrice(signleproduct.price)}</span></h5>
                    <h5>reviews: <span>{signleproduct.reviews}</span></h5>
                  <h5>info: <span>{signleproduct.description}</span></h5>
                </div>
           </div>
         </div>
         <div className="con-add">
           <div className="add">
             <h3>Add to cart:</h3>
             <div className="toggle">
               <div class="increase" onClick={()=>{setamount(amount+1);additem(id);}}><h1>+</h1></div>
               <h1>{amount}</h1>
               <div class="decrease" onClick={()=>{setamount(amount-1);removeamount(id);}}><h1>  - </h1></div>
             </div>
             <Link onClick={()=>{addToCart(id,amount,signleproduct)}} to='/checkout'>
               <div className="go-checkout">
                <h1>go to checkout</h1>
               </div>
             </Link>
            </div>


         </div>
    </>
  )
}
export default Singlepro;
