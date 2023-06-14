import Date from "./Date";

import { useState } from "react";

function Page({ locationInfo,
                dayWithTimeStamps,
                weatherApiError,
                longLatError,
                days
            }) {
  
  const [selectedDateIndex, setSelectedDateIndex] = useState(0)
 
  const handleForwardIcon = () => {
    if (selectedDateIndex < days.length - 1) {
        setSelectedDateIndex(selectedDateIndex + 1);
    }
    else {
      setSelectedDateIndex(0);
    }

  }

  const handleBackIcon = () => {
    if (selectedDateIndex > 0) {
        setSelectedDateIndex(selectedDateIndex - 1);
    }
    else {
      setSelectedDateIndex(days.length - 1);
    }
  }

  const date = (
    <Date
      date = {days[selectedDateIndex]}
      dateData = {dayWithTimeStamps[days[selectedDateIndex]]}
      key = {days[selectedDateIndex]}
      handleBackIcon={handleBackIcon}
      handleForwardIcon={handleForwardIcon}
    />
  )
  return (
    <>
    <div className="border-2 w-1/2 mx-auto p-10 text-center">
    <div className="p-4 text-center border-2">
          <p className="text-2xl">{locationInfo.name}</p>
          <p>Lat: {locationInfo.coord.lat}</p>
          <p>Long: {locationInfo.coord.lon}</p>
    </div> 
    <div className="">
      {date}
    </div>
    </div>
    </>
  )
}

export default Page;