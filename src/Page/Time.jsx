import React from 'react'

function Time({item}) {
  console.log(item)
  
  return (
    <div className='border-2'>
      <h1>{item[0].stamp}</h1>
      <p>Temperature : {item[0].time.temp}</p>
      <p>Feels Like : {item[0].time.feels_like}</p>
      <p>Humidity : {item[0].time.humidity}</p>
    </div>
  )
}

export default Time