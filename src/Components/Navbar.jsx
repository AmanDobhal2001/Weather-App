import { useEffect, useState } from 'react'
import React from 'react'
import Content from './Content'

function NavScrollExample() {
  useEffect(() => {
    getData();
}, [])

  const [place, setplace] = useState('delhi')
  const [weatherData, setWeatherData] = useState()

  const handleChange=(e)=>{
    setplace(e.target.value)
    console.log(place);
  }

  const handleEnter=(e)=>{
    if(e.key==='Enter')
      {
        e.preventDefault();
        getData();
      }
  }
  
  const  getData=async()=> {

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=us&key=HHFTWYRNKS4VYZFY63FETDKHL`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      console.log(data);

    } catch (error) {
        console.error(error);
    }
  }


  return (
  <>
    <div className="backdrop-blur-md flex flex-row flex-wrap h-16">
        <div className="text-white font-bold ml-16 text-xl mt-3">Weathery !</div>

          <div
            className="me-auto my-2 my-lg-0 h-10"
          />
          <div className="d-flex">
          <form className='mr-5 mt-3'>
              <input type="search" onChange={handleChange} onKeyDown={handleEnter} value={place} className="h-7 pl-2 border rounded-xl border-black"/>
            </form>
          </div>
    </div>
    {weatherData&&<Content data={weatherData}/>}
  </>
  );
}

export default NavScrollExample;