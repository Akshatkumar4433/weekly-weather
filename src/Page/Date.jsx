import React from 'react'
import Time from './Time'

function Date({date, dateData}) {
  return (
    <div>
        {date}
        <Time item = {dateData}/>
    </div>
  )
}

export default Date