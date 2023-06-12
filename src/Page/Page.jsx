import Date from "./Date";

function Page({ locationInfo,
                dayWithTimeStamps,
                weatherApiError,
                longLatError
            }) {
  return (
    <>
    <div className="border-2 text-center">
          <p>Location: {locationInfo.name}</p>
          <p>Latitude: {locationInfo.coord.lat}</p>
          <p>Longitude: {locationInfo.coord.lon}</p>
    </div> 

    <div className="border-2">
        <Date
            date = {dayWithTimeStamps['2023-06-12']}
        />
    </div>
    </>
  )
}

export default Page;