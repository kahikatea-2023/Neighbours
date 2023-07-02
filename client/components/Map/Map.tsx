import React, { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import { GeocodingControl } from '@maptiler/geocoding-control/maplibregl'
import '@maptiler/geocoding-control/dist/style.css'
import 'maplibre-gl/dist/maplibre-gl.css'
import { loadMapData } from '../../apis/map'
import { API_KEY_MAP } from '../config'
import { useLocation } from 'react-router-dom'

interface MapData {
  container: string
  style: string
  center: [number, number]
  zoom: number
}

const map: MapData = {
  container: 'map',
  style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY_MAP}`,
  center: [16.3, 49.2],
  zoom: 7,
}

// Usage:
console.log(map.container) // Access the container property
console.log(map.style) // Access the style property

function Map() {
  const location = useLocation()
  const [mapData, setMapaData] = useState<MapData | null>(null)

  useEffect(() => {
    const fetchMapData = async () => {
      loadMapData(API_KEY_MAP, setMapaData)
    }

    fetchMapData()
  }, [location.pathname])

  return (
    <>
      <div>{mapData ? <div></div> : <div></div>}</div>
    </>
  )
}

export default Map
