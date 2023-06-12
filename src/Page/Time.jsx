import React from 'react'

function Time({item}) {
  console.log(item)
  
  return (
    <div className='border-2'>
      <h1>{item.stamp}</h1>
      <p>Temperature : {item.time.temp}</p>
      <p>Feels Like : {item.time.feels_like}</p>
      <p>Humidity : {item.time.humidity}</p>
    </div>
  )
}

export default Time