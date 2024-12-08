import React from 'react'
import { useState } from 'react'
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { TiWeatherWindyCloudy } from "react-icons/ti";

const Content=()=> {

  return (
  <>
    <div className="container flex flex-row flex-wrap justify-around w-10/12 mt-16">
    <div className="item w-80 h-[35vh] p-3 font-serif flex flex-col items-center gap-3 text-white rounded-2xl backdrop-blur-md">
        <div className='flex flex-row h-10  text-stone-300 '>
        <h5>Temp </h5>
        <LiaTemperatureHighSolid className='h-8 w-8'/>
        </div>
        <div className="min-w-56 h-0.5 bg-slate-300"/>
        <div>Temperature is<span className='ml-1' id="temperature"></span></div>
        <div>Sunrise :<span id="sunrise"></span></div>
        <div>Sunset :<span id="sunset"></span></div>
      </div>

      <div  className="item w-80 h-[35vh] p-3 font-serif items-center text-white gap-3 flex flex-col rounded-2xl backdrop-blur-md">
      <div className='flex flex-row h-10 '>
        <h5>Atmosphere </h5>
        <TiWeatherWindyCloudy className='h-8 w-8'/>
        </div>

        <div className="min-w-56 h-0.5 bg-slate-300"/>
        <div>The humidity is<span id="humidity"></span></div>
        <div>Visibility :<span id="visibility"></span></div>
        <div>Pressure :<span id="pressure"></span></div>
      </div>

      <div  className="item w-80 h-[35vh] p-3 font-serif items-center text-white gap-3 flex flex-col rounded-2xl backdrop-blur-md">
        <h5>Forcast</h5>
        <div className="min-w-56 h-0.5 bg-slate-300"/>
        <div>The day is<span id="day"></span></div>
        <div>Highest temp :<span id="highest"></span></div>
        <div>Lowest temp :<span id="lowest"></span></div>
      </div>  
    </div>



    <div className='flex flex-row w-3/6 mt-16 ml-48 text-white h-40 rounded-2xl backdrop-blur-md'>
      <div className='flex flex-col w-24 ml-20 mt-5 h-28 justify-between'>
        <h6>10:00:00</h6>
        <h6>14:00:00</h6>
        <h6>17:00:00</h6>
      </div>

    <div className='flex flex-col w-full'>
      <div className='flex flex-row w-full'>
        <h5 className='ml-7'>Temperature</h5>
        <h5 className='ml-20'>Humidity</h5>
        <h5 className='ml-32'>Forcast</h5>
      </div>

    <div className='flex flex-row w-full mt-3 justify-around'>
      <div className='flex flex-col h-28 justify-between'>
        <p id="temp10"></p>
        <p id="temp2"></p>
        <p id="temp5"></p>
      </div>

      <div className='flex flex-col   h-28 justify-between'>
        <p id="humidity10"></p>
        <p id="humidity2"></p>
        <p id="humidity5"></p>
      </div>

      <div className='flex flex-col h-28 justify-between'>
        <p id="forcast10"></p>
        <p id="forcast2"></p>
        <p id="forcast5"></p>
      </div>
    </div>
    </div>
    </div>
  </>
  );
}

export default Content;