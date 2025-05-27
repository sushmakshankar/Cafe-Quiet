import { useState, useEffect } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import SearchBar from './searchbar'
import Sidebar from './sidebar'
import CafeCard from './CafeCard'

export default function MapView() {
  const [cafes, setCafes] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [center, setCenter] = useState({ lat: 47.6062, lng: -122.3321 }) // Default: Seattle

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  useEffect(() => {
    // Geolocation to center the map on user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },
      () => console.warn('Geolocation failed or blocked.')
    )

    // Mock data for now
    setCafes([
      { id: 1, name: 'Latte Lane', status: 'Quiet' },
      { id: 2, name: 'Espresso Express', status: 'Busy' }
    ])
  }, [])

  const filtered = cafes.filter(cafe =>
    cafe.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    marginBottom: '1rem'
  }

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3">
        <SearchBar onSearch={setSearchQuery} />

        {/* Google Map */}
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
          >
            {/* You can add <Marker /> components later */}
          </GoogleMap>
        </LoadScript>

        {/* Cafe Cards */}
        <div className="row">
          {filtered.map(cafe => (
            <div key={cafe.id} className="col-md-4">
              <CafeCard cafe={cafe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
