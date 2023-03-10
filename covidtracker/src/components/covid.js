import React, { useEffect } from 'react'

const Covid = () => {
    const getCovidData = async() => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            console.log(res);
        } catch (err){
               console.log(err);
        }
      
    }
    useEffect(()=>{
       getCovidData();
    }, []);
  return (
    <div>
      <h1>Live</h1>
      <h2>Covid-19 CORONAVIRUS TRACKER</h2>
    </div>
  )
}


export default Covid
