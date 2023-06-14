import React from 'react'
import Time from './Time'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Date({date, dateData, handleBackIcon,handleForwardIcon}) {
  return (
    <div className='p-2'>
      <button onClick = {handleBackIcon} className="h-fit p-2 rounded-full ">
      <ArrowBackIcon />
      </button>
        <button onClick = {handleForwardIcon} className="border-2 h-fit p-2 rounded-full ">
        <ArrowForwardIcon />
        </button>
       <p className='text-xl p-1'> {date} </p>
        <Time item = {dateData}/>
    </div>
  )
}

export default Date