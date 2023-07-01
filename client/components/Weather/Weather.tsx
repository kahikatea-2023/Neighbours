import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { API_KEY } from '../config'
import { loadWeatherData } from '../../apis/weather'

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
      loadWeatherData(API_KEY, setWeatherData)
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
          <div className="flex flex-row">
            <div>
              <h2 className="font-semibold">{weatherData.name}</h2>
              <div>
                {weatherIcon && (
                  <img
                    className="w-20 items-center"
                    src={weatherIcon}
                    alt="Weather Icon"
                  />
                )}
                <p className="pl-6 text-left text-xs font-semibold">
                  {formatTemperature(weatherData.main.temp)}
                </p>
              </div>
            </div>
            <div className="pt-8">
              <p className="text-sm font-sm">
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
