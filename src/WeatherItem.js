import React from 'react'
// - Date
// - Temp in C
// - Location
// - Humidity
// - Rain
const WeatherItem = ({weather}) => {
    return (
        <div className={'p-3 text-center text-gray-100'}>
            <p className={'text-center'}>{weather.local_date_time.split('/')[1] }</p>
            <p className="text-2xl font-bold">{weather.air_temp + "°C"}</p>
            <p className="text-sm tfont-semibold">{weather.rel_hum + "%"} Humidity</p>
            
           
        </div>
    )
}

export default WeatherItem
