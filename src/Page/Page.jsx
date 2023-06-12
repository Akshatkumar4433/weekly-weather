import Date from "./Date";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Page({ locationInfo,
                dayWithTimeStamps,
                weatherApiError,
                longLatError,
                days
            }) {
  console.log(days);
  return (
    <>
    <div className="border-2 w-1/2 mx-auto p-10 text-center">
    <div className="p-2 text-center ">
          <p>Location: {locationInfo.name}</p>
          <p>Latitude: {locationInfo.coord.lat}</p>
          <p>Longitude: {locationInfo.coord.lon}</p>
    </div> 
   
    <div className="border-2">
     <ArrowBackIcon/>
        <Date
            date = {dayWithTimeStamps['2023-06-12']}
            key = '2023-06-12'
        />
        <ArrowForwardIcon/>
    </div>
    </div>
    </>
  )
}

export default Page;