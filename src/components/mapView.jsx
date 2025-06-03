import { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db }  from '../firebase/config';
import Sidebar from './sidebar'
import CafeCard from './CafeCard'
import NavBar from './navBar'

export default function MapView() {
  const [cafes, setCafes] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [center, setCenter] = useState({ lat: 47.6577, lng: -122.3063 })
  const [selectedCafe, setSelectedCafe] = useState(null)
  const [clickCounts, setClickCounts] = useState({});



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

  const handleMarkerClick = async (locationId, locationName, crowdLevel) => {
    try {
      const locationRef = doc(db, "cafes", locationId);
      console.log("Crowd level saved!");
    } catch (error) {
      console.error("Error saving crowd level:", error);
    }
    setClickCounts(prevCounts => ({
      ...prevCounts,
      [locationId]: (prevCounts[locationId] || 0) + 1
    }));
  };

  const mapContainerStyle = {
    display: 'flex',
    direction: 'column',
    width: '100%',
    // height: '100%',
    height: '100vh',
    // overflow: hidden,
    // margin:auto,
    marginBottom: '1rem'
    // position: 'relative'
  }


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ['places']
  })
  

  return (
    <div style={{height: "100%"}}>
      <NavBar onSearch={setSearchQuery} /> {}
      <div className="d-flex" style={{height: "85%"}}>
        <Sidebar cafes={filtered}/>
        <div className="flex-grow-1 p-3" style={{height: "100%"}} >

          {/* Google Map */}
          {loadError && <p>Error loading map</p>}
          {!isLoaded ? (
            <p>Loading map...</p>
          ) : (
          <div style={{ height: "100%" }}>
            <GoogleMap style="height: 100%"
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={14} >
              {filtered.map((cafe, i) => (
                <Marker
                  key={i}
                  position={{
                    lat: center.lat + i * 0.005,
                    lng: center.lng + i * 0.005
                  }}
                  title={`${cafe.name} - Clicked ${clickCounts[cafe.id] || 0} times`}
                  onClick={() => {
                    handleMarkerClick(cafe.id.toString(), cafe.name, "low");
                    setSelectedCafe(cafe);
                  }}
                />
              ))}
            </GoogleMap>

            {/* overlay */}
            {/* {selectedCafe && (
              <div
                style={{
                  position: 'absolute',
                  top: '100px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 1000,
                  width: '300px'
                }}
              >
                <CafeCard cafe={selectedCafe} />
                <div className="d-flex justify-content-end p-2">
                  <button className="btn btn-sm btn-secondary" onClick={() => setSelectedCafe(null)}>
                    Close
                  </button>
                </div>
              </div>
            )} */}


          </div>
        )}

        {selectedCafe && (
          <div
            style={{
              position: 'absolute',
              top: '100px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
              width: '300px'
            }}
          >
            <CafeCard cafe={selectedCafe} clicks={clickCounts[selectedCafe.id] || 0} />
            <div className="d-flex justify-content-end p-2">
              <button className="btn btn-sm btn-secondary" onClick={() => setSelectedCafe(null)}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Cafe Cards */}
          {/* <div className="row">
            {filtered.map(cafe => (
              <div key={cafe.id} className="col-md-4">
                <CafeCard cafe={cafe} />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  )
}
