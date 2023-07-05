import axios from 'axios'

type SetWeatherData = (data: any) => void

export async function loadWeatherData(
  apiKey: string,
  setWeatherData: SetWeatherData
) {
  try {
    const urlParams = new URLSearchParams(window.location.search)
    const city = urlParams.get('city') || 'newmarket'
    const country = urlParams.get('country') || 'nz'
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
    )
    setWeatherData(response.data)
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}
