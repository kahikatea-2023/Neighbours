import * as L from 'leaflet'
import '@maptiler/geocoding-control/style.css'

import { API_KEY_MAP } from '../components/config'
import { GeolocateControl } from 'maplibre-gl'

const apiKey = API_KEY_MAP

export default async function getAddressAutocomplete(
  input: string
): Promise<string[]> {
  const endpoint = `https://api.maptiler.com/geocoding/autocomplete?text=${encodeURIComponent(
    input
  )}&key=${apiKey}`

  try {
    const response = await fetch(endpoint)
    if (response.ok) {
      const data = await response.json()
      const autocompleteResults = data.features.map(
        (feature: any) => feature.properties.name
      )
      return autocompleteResults
    } else {
      throw new Error(
        `Error fetching address autocomplete: ${response.status} ${response.statusText}`
      )
    }
  } catch (error) {
    console.error('Error fetching address autocomplete:', error)
    return []
  }
}

export function createGeocodingControl(): L.Control {
  const geocodingControl = new GeolocateControl({
    apiKey,
    position: 'topright',
    expanded: true,
    autocomplete: true,
    autocompleteCallback: getAddressAutocomplete,
    placeholder: 'Enter an address',
  })

  return geocodingControl
}
