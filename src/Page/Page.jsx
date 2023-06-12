import Date from "./Date";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
    />
  )
  return (
    <>
    <div className="border-2 w-1/2 mx-auto p-10 text-center">
    <div className="p-2 text-center ">
          <p>Location: {locationInfo.name}</p>
          <p>Latitude: {locationInfo.coord.lat}</p>
          <p>Longitude: {locationInfo.coord.lon}</p>
    </div> 
   
    <div className="border-2">
      <button onClick = {handleBackIcon}>
      <ArrowBackIcon />
      </button>
        {date}
        <button onClick = {handleForwardIcon}>
        <ArrowForwardIcon />
        </button>
        
    </div>
    </div>
    </>
  )
}

export default Page;