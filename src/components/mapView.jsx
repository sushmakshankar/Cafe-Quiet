import { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import Sidebar from './sidebar'
import CafeCard from './CafeCard'
import NavBar from './navBar'

export default function MapView() {
  const [cafes, setCafes] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [center, setCenter] = useState({ lat: 47.6062, lng: -122.3321 })

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },
      () => console.warn('Geolocation failed or blocked.')
    )

    //cafe data
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

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ['places']
  })

  return (
    <div>
      <NavBar onSearch={setSearchQuery} /> {}
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">

          {/* Google Map */}
          {loadError && <p>Error loading map</p>}
          {!isLoaded ? (
            <p>Loading map...</p>
          ) : (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={14}
            >
              {filtered.map((cafe, i) => (
                <Marker
                  key={i}
                  position={{
                    lat: center.lat + i * 0.005,
                    lng: center.lng + i * 0.005
                  }}
                  title={cafe.name}
                />
              ))}
            </GoogleMap>
          )}

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
    </div>
  )
}
