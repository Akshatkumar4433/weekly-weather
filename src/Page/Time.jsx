import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';

function Time({item}) {
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0)
 
  const handleArrowUpIcon = () => {
    if (selectedTimeIndex < item.length - 1) {
        setSelectedTimeIndex(selectedTimeIndex + 1);
    }
    else {
      setSelectedTimeIndex(0);
    }

  }

  const handleArrowDownIcon = () => {
    if (selectedTimeIndex > 0) {
        setSelectedTimeIndex(selectedTimeIndex - 1);
    }
    else {
      setSelectedTimeIndex(item.length - 1);
    }
  }
  
  const time = (
    <>
      <h1>{item[selectedTimeIndex].stamp}</h1>
      <p>Temperature : {item[selectedTimeIndex].time.temp}</p>
      <p>Feels Like : {item[selectedTimeIndex].time.feels_like}</p>
      <p>Humidity : {item[selectedTimeIndex].time.humidity}</p>
    </>
  )

  return (
    <div className='border-2 '>
      <button onClick={handleArrowUpIcon}>
        <KeyboardArrowUpIcon/>
      </button>
        {time}
      <button onClick={handleArrowDownIcon}>
        <KeyboardArrowDownIcon/>
      </button>
    </div>
  )
}

export default Time