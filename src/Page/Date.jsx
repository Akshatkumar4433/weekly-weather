import React from 'react'
import Time from './Time'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Date({date, dateData, handleBackIcon,handleForwardIcon}) {
  return (
    <div className='p-2'>
      <div className='flex justify-center'>
      <button onClick = {handleBackIcon} className="h-fit p-2  ">
      <ArrowBackIcon />
      </button>
      <p className='text-xl p-1'> {date} </p>
        <button onClick = {handleForwardIcon} className=" h-fit p-2 ">
        <ArrowForwardIcon />
        </button>
      </div>
       
        <Time item = {dateData}/>
    </div>
  )
}

export default Date