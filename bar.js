import React, {useState,useRef} from 'react';
import './css/bar.css'
import { Link } from 'react-router-dom'
import {useUserContext } from './context/user_context'
import {useCartContext } from './context/cart_context'
import {useFilterContext} from './context/filter_context'
import useMediaQuery from "./utils/useMedia";
const Bar=()=>
{

    const refmain=useRef(null);
    const refmesseges=useRef(null);
    const refview=useRef(null);


    const handler=(press)=>
    {
          refmain.current.style.color="#18181899";
          refmesseges.current.style.color="#18181899";
          refview.current.style.color="#18181899";
          press.current.style.color="#2d8fff";

    }
    const {menutoggle,menu,filtered_products}=useFilterContext()
    const matches = useMediaQuery("(max-width: 600px)");
   const { loginWithRedirect, logout, myUser, isLoading, error }=useUserContext();
   const {cart,total_items,total_amount,addToCart, removeItem, toggleAmount, clearCart}=useCartContext()

  console.log(myUser);
  return(
           <div className="container">
               <div className="bar">
               <Link className="hidelogo" to="/">
                 <div className="logo">
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 110" color="#ffdb00" class="svelte-y64z96"><title>IKEA</title><path fill="currentcolor" d="M4.35,105.17c3.61-1.79,3.36-8,3.37-8.76,0-1.52,0-76.8,0-79.86a7.12,7.12,0,0,0-2.78-5.94h65.2s-2.8,1.61-2.8,6c0,2.58,0,76.87,0,81.46,0,1.14.49,5.46,3.37,7Z"></path><path fill="currentcolor" d="M161.58,105.17c-3.34-2.28-3.2-7.07-3.22-8.16,0-.78,0-14.56,0-30.59,0,0,18.21,28.7,19.91,32.88,1.87,4.59-.25,5.87-.25,5.87h75s-.76-.5-1.89-1.36a29.77,29.77,0,0,1-6.69-6.55c-2.66-3.56-30.1-48.12-30.1-48.12s20.66-28.82,23.89-33a29.06,29.06,0,0,1,5.87-5.52s-4.53,0-4.53,0H179.86s3.57,2.51.42,7.09-21.9,30.54-21.9,30.54c0-15.93,0-30.56,0-31.69a7.08,7.08,0,0,1,2.85-5.94H97.72a7.13,7.13,0,0,1,2.77,5.94c.05,3.06,0,78.34,0,79.86,0,.81.24,7-3.37,8.76Z"></path><path fill="currentcolor" d="M266.2,10.61A7.13,7.13,0,0,1,269,16.55c0,3.06,0,78.34,0,79.86,0,.81.24,7-3.37,8.76H375V73.05a10.27,10.27,0,0,1-7.41,3.08H324.94V68.59h30.74c1.86,0,7,.59,8.32,2.33l0-28.84c-1.38,1.93-6.57,2.38-8.28,2.38H324.92V36.91s35.67,0,40.09,0A14.8,14.8,0,0,1,375,41.15V10.61Z"></path><path fill="currentcolor" d="M476.22,105.17s2.88-3.23,1.87-7.14a94.13,94.13,0,0,0-4.59-11.56H445.45s-3.52,7.45-4.59,11.56c-1,3.91,1.87,7.14,1.87,7.14H386a22.4,22.4,0,0,0,5.23-7.31c2-4.59,29-76.67,30.07-79.27,2-5-1.31-7.93-1.31-7.93h90.23a7.71,7.71,0,0,0-1.49,8.06c1.69,5.1,30.51,76.54,31.81,79.14a19.37,19.37,0,0,0,6,7.31ZM467,69.31S460.25,52.63,460,52a16.53,16.53,0,0,1-1-4.86h-.1A16.53,16.53,0,0,1,458,52c-.26.63-7,17.31-7,17.31Z"></path><path fill="currentcolor" d="M522.87,19.68a16,16,0,1,1,16,15.8,15.74,15.74,0,0,1-16-15.8m16,13.18c7.13,0,12.76-5.59,12.76-13.18a12.8,12.8,0,1,0-25.6,0c0,7.59,5.63,13.18,12.84,13.18m-3.33-4.05H532.8V10.64h6.92c4.29,0,6.42,1.58,6.42,5.17,0,3.25-2,4.67-4.71,5l5.16,8h-3.08l-4.79-7.88h-3.17Zm3.29-10.21c2.34,0,4.42-.17,4.42-3,0-2.25-2-2.67-4-2.67h-3.75V18.6Z"></path></svg>
                 </div>
                 </Link>
                 {
                   matches?<div className="wrapmenu"><div className="secret-menu " onClick={()=>{menutoggle()}}><span class="material-icons-outlined">more_horiz</span></div></div>:<></>
                 }

                 <div className="items" onClick={()=>{loginWithRedirect()}}>
                   <div className="cart live">
                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                      {total_items?<div className="total_items">{total_items}</div>: <p></p>}
                   </div>
                    <div className="user live">
                      {myUser?<div className="user_name"><h3>{myUser.name}</h3></div>:<div className="user_name"><h3>login</h3></div>}
                    </div>
                 </div>

               </div>
          </div>


  )
}

export default Bar
