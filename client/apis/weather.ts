import axios from 'axios'

type SetWeatherData = (data: any) => void

export async function loadWeatherData(
  apiKey: string,
  setWeatherData: SetWeatherData
) {
  try {
    const city = 'newmarket' // Get the city from the current URL
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
    setWeatherData(response.data)
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}
