import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { API_KEY } from '../config'

interface WeatherData {
  name: string
  main: {
    temp: number
    humidity: number
  }
  weather: {
    icon: string
  }[]
}

function Weather() {
  const location = useLocation()
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const city = location.pathname.substring(1) // Get the city from the current URL
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )
        setWeatherData(response.data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeatherData()
  }, [location.pathname])

  const formatTemperature = (temperature: number) => {
    const celsiusTemperature = temperature - 273.15
    return `${celsiusTemperature.toFixed(1)}°C`
  }

  const iconCode = weatherData?.weather[0]?.icon
  const weatherIcon = `https://openweathermap.org/img/w/${iconCode}.png`

  return (
    <>
      <div>
        {weatherData ? (
          <div className='flex flex-row'>
            <div className='pl-6'>
              <h2 className='font-bold'>{weatherData.name}</h2>
              <div>
                {weatherIcon && <img className='w-20 items-center' src={weatherIcon} alt="Weather Icon" />}
                <p className='self-center'>{formatTemperature(weatherData.main.temp)}</p>
              </div>
            </div>
            <div className='pl-8 pt-8'>
              <p className='font-bold font-xl'>
                Bundle up and take umbrella with you! <br />
                You know New Zealand weather is fickle.
              </p>
            </div>

          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </>
  )
}

export default Weather
