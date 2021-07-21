import React from 'react'
// - Date
// - Temp in C
// - Location
// - Humidity
// - Rain
const WeatherItem = ({weather}) => {
    return (
        <div className={'p-3 text-center text-gray-100'}>
            <p className={'text-center'}>{weather.dt_txt.split(" ")[1]}</p>
            <p className="text-2xl font-bold">{Math.floor(weather.main.temp-273.15) + "°C"}</p>
            <p className="text-sm tfont-semibold">{weather.main.humidity + "%"} Humidity</p>
            
           
        </div>
    )
}

export default WeatherItem
