import { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db }  from '../firebase/config';
// import { useNavigate } from 'react-router-dom'

// import Sidebar from './sidebar'
import CafeCard from './CafeCard'
import NavBar from './navBar'

export default function MapView() {
  const [cafes, setCafes] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [center, setCenter] = useState({ lat: 47.6577, lng: -122.3063 })
  const [selectedCafe, setSelectedCafe] = useState(null)
  const [clickCounts, setClickCounts] = useState({});
  const [filterPins, setFilterPins] = useState(false);
  // const navigate = useNavigate()



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

    const cafes = [
      { id: 1, name: 'Cafe Solstice', status: 'Quiet', lat: 47.657438, lng: -122.313063 },
      { id: 2, name: 'Ugly Mug Cafe', status: 'Moderate', lat: 47.659712, lng: -122.313797  },
      { id: 3, name: 'Mr. West Cafe Bar', status: 'Busy', lat: 47.662063, lng: -122.298187  },
      { id: 4, name: 'Microsoft Cafe', status: 'Quiet', lat: 47.653063, lng: -122.305063 }
    ];
    setCafes(cafes);

    const fetchClickCounts = async () => {
      const clickCountsData = {};
      for (const cafe of cafes) {
        const docRef = doc(db, "cafes", cafe.id.toString());
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          clickCountsData[cafe.id] = docSnap.data().clickCount || 0;
        } else {
          await setDoc(docRef, {
            name: cafe.name,
            crowdLevels: [],
            clickCount: 0
          });
          // if no data exists
          clickCountsData[cafe.id] = 0;
        }
      }
      setClickCounts(clickCountsData);
    };
    fetchClickCounts();
  }, [])

  const filtered = cafes.filter(cafe =>
    cafe.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const visibleCafes = filterPins
    ? cafes.filter(cafe =>
        cafe.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cafes;


  const handleMarkerClick = async (locationId, locationName, crowdLevel) => {
    try {
      const locationRef = doc(db, "cafes", locationId);
      const docSnap = await getDoc(locationRef);
      let newCount = 1;
      if (docSnap.exists()) {
        const prevCount = docSnap.data().clickCount || 0;
        newCount = prevCount + 1;
        await updateDoc(locationRef, {
          clickCount: newCount,
        });
      } else {
        await setDoc(locationRef, {
          name: locationName,
          clickCount: 1,
          crowdLevels: [crowdLevel]
        });
      }
      setClickCounts(prevCounts => ({
        ...prevCounts,
        [locationId]: (prevCounts[locationId] || 0) + 1
      }));
      console.log("Click count updated to", newCount);
    } catch (error) {
      console.error("Error updating click count:", error);
    }

    setSelectedCafe(cafes.find(c => c.id === Number(locationId)) || null);
  };

  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  }


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ['places']
  })
  

  return (
    // <div style={{ height: "100%", width: "100%", margin: 0, padding: 0 }}>
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* <NavBar onSearch={setSearchQuery} /> */}
      <NavBar
        onSearch={setSearchQuery}
        filterPins={filterPins}
        onTogglePins={() => setFilterPins(prev => !prev)}
      />

      <div style={{ flexGrow: 1, position: 'relative' }}>
        <div className="p-0" style={{ height: "100%" }}>
          {/* Google Map */}
          {loadError && <p>Error loading map</p>}
          {!isLoaded ? (
            <p>Loading map...</p>
          ) : (
            // <GoogleMap style="height: 100%"
            <GoogleMap
              // mapContainerStyle={mapContainerStyle}
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={center}
              zoom={14} 
            >
              {/* {filtered.map((cafe, i) => ( */}
              {visibleCafes.map((cafe, i) => (
                <Marker
                  key={i}
                  position={{ lat: cafe.lat, lng: cafe.lng }}
                  title={`${cafe.name} - Clicked ${clickCounts[cafe.id] || 0} times`}
                  onClick={() => {
                    handleMarkerClick(cafe.id.toString(), cafe.name, "low");
                    setSelectedCafe(cafe);
                  }}
                />
              ))}

            </GoogleMap>
          )}

        {selectedCafe && (
          <div
            style={{
              position: 'absolute',
              top: '100px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
              width: '300px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden'
            }}
          >
            {/* <CafeCard cafe={selectedCafe} clicks={clickCounts[selectedCafe.id] || 0} /> */}
            <button 
              className="btn btn-sm btn-secondary" 
              onClick={() => setSelectedCafe(null)}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                zIndex: 10
              }}
            >
              X
              
            </button>
            <CafeCard cafe={selectedCafe} clicks={clickCounts[selectedCafe.id] || 0} />
           
          </div>
          // </div>
        )}
        </div>
      </div>
    </div>
  );
}
