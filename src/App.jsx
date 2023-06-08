import { useState } from 'react'
import axios from 'axios';
import sortTimeByDate from './services/service';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  
  const  getNextFiveDaysWeather = async () => {
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
      sortTimeByDate(response.data.list);

        }
    
    catch (error) {
      console.log(error)
    }
  }

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          getNextFiveDaysWeather();

        },
        (error) => {
            //create premission denied component
            console.error(error);
        }
      );
    }
      else {
        console.log('No Geolocation suppport')
      }
    }
  
  return (
    <>
     <button onClick={getGeolocation}>Press for Location</button>
    </>
  )
}

export default App
