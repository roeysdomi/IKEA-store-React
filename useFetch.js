import React, { useState, useEffect } from 'react'
export const API_ENDPOINT = ``;
// https://roey2work.herokuapp.com/
let counter=0;
const useFetch = (urlParams) => {

     const [data, setdata] = useState(null)
    const [loading,setLoading]=useState(false)
  const fetchMovies = async (url) => {
    var myHeaders = new Headers();
 myHeaders.append('pragma', 'no-cache');
 myHeaders.append('cache-control', 'no-cache');

 var myInit = {
   headers: myHeaders,
 };
    try {
       setLoading(true)
        console.log('trying to fetch');
      const response = await fetch(url,myInit)
        let data2 =await response.json()
        console.log("this is counter :"+counter++);

      if (data2) {
           setdata(data2)
            setLoading(false);
      } else {

        console.log("error in fetch1"+` ${data} ${urlParams}`);
        console.log("fetch changed the state");


      }
    } catch (error) {
      console.log("error in fetch2");
       console.log("this is data inside fetch after error :"+data);
      console.log(error);
    }
  }

  useEffect(() => {

          fetchMovies(urlParams)



  },[urlParams])


  return  {data,loading}
}

export default useFetch
