import axios from 'axios'

type SetMapData = (data: any) => void

export async function loadMapData(apiKey: string, setMapData: SetMapData) {
  try {
    const response = await axios.get(
      `https://api.maptiler.com/geolocation/ip.json?key=${apiKey}`
    )
    setMapData(response.data)
  } catch (error) {
    console.error('Error fetching weather data;', error)
  }
}
