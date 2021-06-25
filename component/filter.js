import React, {useState,useRef,useEffect} from 'react';
import '../css/filter.css'
import {useFilterContext} from '../context/filter_context'
import {formatPrice} from '../utils/helpers'


const Filter=()=>
{
  const {filtered_products,updateFilters}=useFilterContext()

   const [category,setcat]=useState('all')
   const [company,setcom]=useState('all')
   const [price,setprice]=useState(320000)


   useEffect(()=>{
    console.log({category,company,price});
     updateFilters({category,company,price})

   },[category,company,price])
  return(
      <div className="filter">
        <div className="con-menu-fill">
           <div className="menu-fill">

             <h1>Category</h1>
              <div className="category">

                <form onChange={(e)=>setcat(e.target.value)}>
                  <div className="item">
                    <input type="radio" id="male" name="gender" value="all"/>
                  </div>
                  <div className="item">
                  <input type="radio" id="female" name="gender" value="office"/>
                  </div>
                    <div className="item">
                  <input type="radio" id="other" name="gender" value="living room"/>
                  </div>
                    <div className="item">
                  <input type="radio" id="female" name="gender" value="Kitchen"/>
                  </div>
                    <div className="item">
                  <input type="radio" id="female" name="gender" value="bedroom"/>
                  </div>
                    <div className="item">
                  <input type="radio" id="female" name="gender" value="kids"/>

                  </div>

                 </form>
              </div>
             <h1>Company</h1>
             <select name="company" class="company" onChange={(e)=>setcom(e.target.value)}>
               <option value="all">all</option>
               <option value="marcos">marcos</option>
               <option value="liddy">liddy</option>
               <option value="ikea">ikea</option>
               <option value="caressa">caressa</option>
             </select>
             <h1>Price</h1>
             <div>
              <h3>{formatPrice(price)}</h3>

               <input type="range"  value={price} id="volume" name="volume"  min="0" max="320000" onChange={(e)=>setprice(e.target.value)}/>
             </div>
             <h3 className="filter_number">{filtered_products.length}</h3>
           </div>
        </div>
      </div>

  )
}

export default Filter
