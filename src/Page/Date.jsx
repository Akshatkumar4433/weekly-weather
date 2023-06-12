import React from 'react'
import Time from './Time'

function Date({date}) {
  return (
    <div>
        <Time item = {date[0]}/>
    </div>
  )
}

export default Date