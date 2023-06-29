import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { API_KEY } from './config'
import { useAuth0 } from '@auth0/auth0-react'

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

  const { user, isAuthenticated, isLoading } = useAuth0()

  console.log(user)
  if (isLoading) {
    return <div>Loading ...</div>
  }
  return (
    <>
      <div>
        {weatherData ? (
          <div>
            <h2>Weather in {weatherData.name}</h2>
            <p>Temperature: {formatTemperature(weatherData.main.temp)}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            {weatherIcon && <img src={weatherIcon} alt="Weather Icon" />}
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </>
  )
}

export default Weather
