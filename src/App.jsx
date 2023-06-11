import {  useState } from 'react'
import axios from 'axios';
import serviceWorker from './services/service';
import Page from './Page/Page';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [longLatError, setlongLatError] = useState(null);
  
  const [dayWithTimeStamps, setDayWithTimeStamps] = useState([]);
  const [locationInfo, setLocationInfo] = useState({})
  const [weatherApiError, setWeatherApiError] = useState(null);
  
  const [loading, setLoading] = useState(true);
   
  const getDateTimeStamps = async () => {
       await getGeolocation();
       await getWeatherData();
  }

  const  getWeatherData = async () => {
    let options = {
      method: 'GET',
      url: `https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${latitude}/${longitude}`,
      headers: {
        'X-RapidAPI-Key': '6c3109b6b5msh329f55f6a3e6c75p10ffebjsn28fd97160287',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    };
   
    try {
     
      const response = await axios.request(options);
     setLocationInfo( serviceWorker.getLocationInfo(response.data));
      setDayWithTimeStamps(serviceWorker.sortTimeByDate(response.data.list));
      setLoading(false);
      }
    
    catch (error) {
       console.log(error);
       setWeatherApiError(error);
       setLoading(false);
    }
  }

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

        },
        (error) => {
            //create premission denied component
            console.error(error);
            setlongLatError(error);
        }
      );
    }
      else {
        console.log('No Geolocation suppport');
        setlongLatError('No Geolocation Support')
      }
    }
  return (
    <>
    <button onClick={getDateTimeStamps}>Press</button>
     <Page
        locationInfo = {locationInfo}
        dayWithTimeStamps = {dayWithTimeStamps}
        weatherApiError = {weatherApiError}
        longLatError = {longLatError}
        loading = {loading}
     />
    </>
  )
}

export default App
