import React, { useRef, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import osm from './providers/osm-providers'
import 'leaflet/dist/leaflet.css'

const Header = () => {
    const [center, setCenter] = useState([-1.286389, 36.817223])
    const ZOOM_LEVEL = 10
    const mapRef = useRef()

  return (
    <div className='row bg-gray-500'>
        <div className='col text-center'>
            <h2>Basic openstreetmaps</h2>
            <div className='col'>
                <MapContainer
                    center={center}
                    zoom={ZOOM_LEVEL}
                    ref={mapRef}
                    style={{ height: '400px', width: '50%'}}
                >
                    <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
                </MapContainer>
            </div>

        </div>
      
    </div>
  )
}

export default Header
