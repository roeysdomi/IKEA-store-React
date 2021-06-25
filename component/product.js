import React,{useState} from 'react';
import '../css/product.css'
import {formatPrice} from '../utils/helpers'

const Product =(prop)=>
{
  // <div className="pic">pic</div>
  // <div className="title">title</div>
  let info=prop.info

     return(

             <div className="con-product" >
              <div className="product2">
                 <div className="pic">
                   <img src={info.image} alt=""/>
                 </div>
                  <div className="desc">
                      <div className="title2">{info.name}</div>
                      <div className="price">{formatPrice(info.price)}</div>

                  </div>

              </div>
            </div>


         )
}
export default Product;
