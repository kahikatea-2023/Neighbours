import React, { useEffect, useRef } from 'react'
import maplibregl, { GeolocateControl } from 'maplibre-gl'
import { API_KEY_MAP } from '../config'

function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const map = useRef<maplibregl.Map | null>(null)

  useEffect(() => {
    // Set your MapTiler API Key here
    const apiKey = API_KEY_MAP

    // Initialize map if the map container exists
    if (mapContainer.current) {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://api.maptiler.com/maps/streets/style.json?key=' + apiKey,
        center: [174.7633, -36.8485], // Auckland coordinates
        zoom: 12,
      })

      // Add MapTiler Geolocate Control to the map
      const geolocateControl = new GeolocateControl({
        // Set the position of the geolocate control using CSS
        positionOptions: {
          enableHighAccuracy: true,
          timeout: 5000,
        },
        // Fit the map to the geolocation result
        fitBoundsOptions: {
          maxZoom: 15,
        },
        // Track the user's location on the map
        trackUserLocation: true,
      })

      // Add the geolocate control to the map
      map.current.addControl(geolocateControl)

      // Clean up on unmount
      return () => map.current?.remove()
    }
  }, [])

  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />
}

export default Map
