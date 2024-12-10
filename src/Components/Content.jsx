import React from 'react'
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { TiWeatherWindyCloudy } from "react-icons/ti";


const Content=({data})=> {
    const {
      temp,
      sunrise,
      sunset,
      humidity,
      visibility,
      pressure,
      conditions,
    } = data.currentConditions;

    const{
      tempmin,
      tempmax
    }=data.days[0]

    
    const temp1=data.days[0].hours[11].temp;
    const humidity1=data.days[0].hours[11].humidity;
    const forcast1=data.days[0].hours[11].conditions;

    const temp2=data.days[0].hours[14].temp;
    const humidity2=data.days[0].hours[14].humidity;
    const forcast2=data.days[0].hours[14].conditions;

    const temp3=data.days[0].hours[17].temp;
    const humidity3=data.days[0].hours[17].humidity;
    const forcast3=data.days[0].hours[17].conditions;


  return (
    <>
    <div className="container flex flex-row flex-wrap justify-around md:w-10/12 md:mt-16 font-serif">
      <div className="item md:w-80 md:h-[35vh] p-3  flex flex-col items-center gap-3 text-white rounded-2xl backdrop-blur-md">
        <div className='flex flex-row h-10  text-stone-300 '>
          <h5>Temp </h5>
          <LiaTemperatureHighSolid className='h-8 w-8'/>
        </div>
        <div className="min-w-56 h-0.5 bg-slate-300"/>
        <div>Temperature is {Math.floor((temp-32)*5/9)} °C</div>
        <div>Sunrise : {sunrise}</div>
        <div>Sunset : {sunset}<span id="sunset"></span></div>
      </div>

      <div  className="item w-80 h-[35vh] p-3 font-serif items-center  text-white gap-3 flex flex-col rounded-2xl backdrop-blur-md">
      <div className='flex flex-row h-10 '>
        <h5>Atmosphere </h5>
        <TiWeatherWindyCloudy className='h-8 w-8'/>
        </div>

        <div className="min-w-56 h-0.5 bg-slate-300"/>
        <div>The humidity is {humidity} %</div>
        <div>Visibility : {visibility} km</div>
        <div>Pressure : {pressure} mb</div>
      </div>

      <div  className="item w-80 h-[35vh] p-3 font-serif items-center text-white gap-3 flex flex-col rounded-2xl backdrop-blur-md">
        <h5>Forcast</h5>
        <div className="min-w-56 h-0.5 bg-slate-300"/>
        <div>The day is {conditions}</div>
        <div>Highest temp : {Math.floor((tempmax-32)*5/9)} °C</div>
        <div>Lowest temp : {Math.floor((tempmin-32)*5/9)} °C</div>
      </div>  
    </div>



    <div className='hidden lg:flex flex-row  via-slate-200 w-2/4 lg:mt-16 md:ml-10 lg:ml-48 text-white h-40 rounded-2xl backdrop-blur-md'>
      <div className='flex flex-col w-24 md:ml-20 mt-5 h-28 justify-between'>
        <h6>10:00:00</h6>
        <h6>14:00:00</h6>
        <h6>17:00:00</h6>
      </div>

    <div className='flex flex-col w-full'>
      <div className='flex flex-row w-full'>
        <h5 className='ml-7'>Temperature</h5>
        <h5 className='ml-20'>Humidity</h5>
        <h5 className='ml-20'>Forcast</h5>
      </div>

    <div className='flex flex-row w-full mt-3'>
      <div className='flex flex-col h-28 justify-between ml-16'>
        <p>{Math.floor((temp1-32)*5/9)} °C</p>
        <p>{Math.floor((temp2-32)*5/9)} °C</p>
        <p>{Math.floor((temp3-32)*5/9)} °C</p>
      </div>

      <div className='flex flex-col   h-28 justify-between ml-32'>
        <p>{humidity1} %</p>
        <p>{humidity2} %</p>
        <p>{humidity3} %</p>
      </div>

      <div className='flex flex-col h-28 justify-between ml-28'>
        <p>{forcast1}</p>
        <p>{forcast2}</p>
        <p>{forcast3}</p>
      </div>
    </div>
    </div>
    </div>
  </>
  );
}

export default Content;