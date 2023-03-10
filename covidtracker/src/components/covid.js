import React, { useEffect, useState } from 'react'
import './covid.css'
const Covid = () => {
const [data, setData] = useState([]);

    const getCovidData = async() => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
         const actualData =  await res.json();
         console.log(actualData.statewise[0]);
         setData(actualData.statewise[0]);
        } catch (err){
               console.log(err);
        }
      
    }
    useEffect(()=>{
    getCovidData();
    }, []);
  return (
    <div className='Main-div'>
    <div className="header">
      <h1>Live</h1>
      <h2>Covid-19 CORONAVIRUS TRACKER</h2>
      </div>
      <section>
      <ul className='card'>
      <li>
      <div className="styleCardContent">
      <p className="styleCardTitle">TOtal </p>
      <p className="styleLocationLabel">Recoverd Cases</p>
      <p className="styleDescription">{data.recovered}</p>
    </div>
    </li>
    <li>
      <div className="styleCardContent">
      <p className="styleCardTitle">Country Name</p>
      <p className="styleLocationLabel">India</p>
      <p className="styleDescription"></p>
    </div>
      </li>
    <li>
    <div className="styleCardContent">
      <p className="styleCardTitle">Total </p>
      <p className="styleLocationLabel">Deaths</p>
      <p className="styleDescription">{data.deaths}</p>
    </div>
      </li>
       
      <li>
      <div className="styleCardContent">
      <p className="styleCardTitle">Total </p>
      <p className="styleLocationLabel">Active Cases</p>
      <p className="styleDescription">{data.active}</p>
    </div>
      </li>
      <li>
      <div className="styleCardContent">
      <p className="styleCardTitle">Total </p>
      <p className="styleLocationLabel">Confirmed Cases</p>
      <p className="styleDescription">{data.confirmed}</p>
    </div>
    </li>
      <li>
      <div className="styleCardContent">
      <p className="styleCardTitle">Last </p>
      <p className="styleLocationLabel">Update Time</p>
      <p className="styleDescription">{data.lastupdatedtime}</p>
    </div>
      </li>
      </ul>
      </section>
      <div className="footer">
      <p>CopyRight @ Chandan Pratap</p>
      </div>
    </div>
  )
}


export default Covid
