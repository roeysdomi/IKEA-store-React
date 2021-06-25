import React, { useEffect, useContext, useReducer,useState } from 'react'
import useFetch from '../useFetch'
import reducer from '../reducers/filter_reducer'


import {
  GET_SINGLE_PRODUCT_BEGIN,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
const FilterContext = React.createContext()

const initialState = {
  lastid:"",
  filtered_products: [],
  all_products: [],
  signleproduct:"",
  filters: {
    company: 'all',
    category: 'all',
    price: 0,
    shipping: false,
  },
}




export const FilterProvider = ({ children }) => {

  const {loading,data}=useFetch('https://course-api.com/react-store-products')
  const [state, dispatch] = useReducer(reducer, initialState)
  const [menu,setmenu]=useState(false)
 useEffect(()=>
 {
   if(data!==null)
     {

      dispatch({type:LOAD_PRODUCTS,payload:data})
     }


 }
,[data])
  const updateFilters=(fill)=>
  {
    console.log("dispatch filters :"+fill.categrory);
     dispatch({type:FILTER_PRODUCTS,payload:fill})
  }
  const menutoggle=()=>
  {
    setmenu(!menu)
  }
  const useProduct=async(id)=>
  {
    const getinfo=async(id)=>{
          var myHeaders = new Headers();
       myHeaders.append('pragma', 'no-cache');
       myHeaders.append('cache-control', 'no-cache');

       var myInit = {
         headers: myHeaders,
       };
       let url ="https://course-api.com/react-store-single-product?id="+id

       const response = await fetch(url,myInit)
         let data2 =await response.json()


      await dispatch({type:GET_SINGLE_PRODUCT_BEGIN,payload:{data2,id}})
    }
    useEffect(()=>
    {

       getinfo(id)
    }
   ,[])
  }


  return (
    <FilterContext.Provider
      value={{...state,updateFilters,useProduct,menu,menutoggle}}>

      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
