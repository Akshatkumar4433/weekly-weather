import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import serviceWorker from '../services/service';

import { useState } from 'react';

function Time({item}) {
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0)
 
  const handleArrowUpIcon = () => {

    if (selectedTimeIndex > 0) {
      setSelectedTimeIndex(selectedTimeIndex - 1);
  }
  else {
    setSelectedTimeIndex(item.length - 1);
  }

  }

  const handleArrowDownIcon = () => {
    if (selectedTimeIndex < item.length - 1) {
      setSelectedTimeIndex(selectedTimeIndex + 1);
  }
  else {
    setSelectedTimeIndex(0);
  }
  }
  
  return (
    <div className='border-2 w-fit p-5 mx-auto flex flex-col gap-2'>
      <button onClick={handleArrowUpIcon}>
        <KeyboardArrowUpIcon/>
      </button>
        <TimeStamp
            stamp = {item[selectedTimeIndex].stamp}
            weatherData = {item[selectedTimeIndex].time}
        />
      <button onClick={handleArrowDownIcon}>
        <KeyboardArrowDownIcon/>
      </button>
    </div>
  )
}


const TimeStamp = ({stamp, weatherData}) => {
 
  return (
    <>
        <h1 className='text-2xl'>{stamp}</h1>
      <p>Temperature : {serviceWorker.convertKelvinToCelsius(weatherData.temp)}</p>
      <p>Feels Like : {serviceWorker.convertKelvinToCelsius(weatherData.feels_like)}</p>
      <p>Humidity : {weatherData.humidity}</p>
    </>
  )
}

export default Time