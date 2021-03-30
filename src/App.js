import axios from'axios';
import './App.css';
import WeatherItem from './WeatherItem'
import {useState, useEffect} from 'react';
function App() {
  const [weatherData, setWeatherData] = useState();
  const [weatherDataRendered, setWeatherDataRendered] = useState();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [weatherPoints, setWeatherPoints] = useState(10);
  const [location, setLocation] = useState();
  const [rainSince, setRainSince] = useState();
  

  useEffect(async () => {
    setLoading(true)
    const res = await axios.get('https://www.bom.gov.au/fwo/IDQ60801/IDQ60801.94580.json',{
      method: 'GET',
      mode: 'no-cors',
      credentials: 'same-origin',
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
        }
    }) 
    if(res.error){
      setError(res.error)
    } else {
      var i = 0;
      let reduced = res.data.observations.data.slice(0,weatherPoints)
      setLocation(res.data.observations.data[0].name)
      setRainSince(res.data.observations.data[0].rain_trace)
      setWeatherData(reduced, renderWeather(reduced))
    }
  }, []);

  const renderWeather = (data) => {
    const rendered = data.map(point => <WeatherItem weather={point} />)

    setWeatherDataRendered(rendered, setLoading(false))
  }

  return (
    <div className="App w-min rounded-lg bg-gradient-to-tr from-primary to-primary-lighter shadow-lg m-10 p-3 text-white">
      <div className="text-4xl p-3 font-semibold text-gray-100">{`${location} Weather`}</div>
      <div className="pl-3">{`${rainSince}mm since 9am`}</div>
      <div className="points">
      {loading ? <div className="loader">Loading...</div> : 
      <div className="flex">
        {weatherDataRendered}
      </div>}
          
      </div>
    </div>
  );
}

export default App;
