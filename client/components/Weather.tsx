import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from './config'

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
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const city = window.location.pathname.substring(1) // Get the city from the current URL
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )
        setWeatherData(response.data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeatherData()
  }, [])

  const formatTemperature = (temperature: number) => {
    const celsiusTemperature = temperature - 273.15
    return `${celsiusTemperature.toFixed(1)}°C`
  }

  const iconCode = weatherData?.weather[0]?.icon
  const weatherIcon = `https://openweathermap.org/img/w/${iconCode}.png`

  return (
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
  )
}

export default Weather
