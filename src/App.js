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

  const cityName = "Gold Coast";
  const APIkey = "51e92b20f26072684d35a73387bcca26";
  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setLoading(true)
    const res = await axios.get(`/data/2.5/forecast/hourly?q=${cityName}&appid=${APIkey}`,{
      method: 'GET',
      mode: 'no-cors',
      credentials: 'same-origin',
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
        }
    }) 
    console.log(res.data);
    if(res.error){
      setError(res.error)
    } else {
      
      var i = 0;
      let reduced = res.data.list.slice(0,weatherPoints)
      setLocation(res.data.city.name)
      setWeatherData(reduced, renderWeather(reduced))
      setRainSince(res.data.list[0].rain ? res.data.list[0].rain : 0)
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
