import React, {useState} from 'react';
import './css/main.css';
import Product from './component/product'
import useFetch from './useFetch'
import Filter from './component/filter'
import {useFilterContext} from './context/filter_context'
import { Link } from 'react-router-dom'
import {sourcelink} from './links'
import useMediaQuery from "./utils/useMedia";

let loadusers=true;




const Mainx =()=>
{
  let count=0;
  const matches = useMediaQuery("(max-width: 600px)");
   const {menutoggle,menu,filtered_products}=useFilterContext()

// <Link to={`/product/${pro.id}`}> <Product key={pro.id} info={pro}/></Link>
    console.log("this is filtered :"+filtered_products);
  if(!matches){
    return(
      <>
       <div className="main">
        <Filter/>

         <div className="con-products">

           <div className="products">
                 {
                     (()=>{
                       if(filtered_products.length==0)
                        return <h1>no products</h1>
                       }
                     )()
                 }
           {
             filtered_products.map(pro=>{
                 return <Link to={`/product/${pro.id}`}> <Product key={pro.id} info={pro}/></Link>
             })
           }
           </div>

         </div>

       </div>




     </>
    )
  }






  return(
     <>
      <div className="main">
        { menu?<Filter/>:<></>}
          {!menu?
        <div className="con-products">

          <div className="products">
                {
                    (()=>{
                      if(filtered_products.length==0)
                       return <h1>no products</h1>
                      }
                    )()
                }
          {
            filtered_products.map(pro=>{
                return <Link to={`/product/${pro.id}`}> <Product key={pro.id} info={pro}/></Link>
            })
          }
          </div>

        </div>
         :<></>}
      </div>




    </>
  )
}
export default Mainx;
