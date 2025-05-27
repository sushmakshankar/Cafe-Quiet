import { Routes, Route } from 'react-router-dom'
// import Home from './pages/home'
import MapView from './components/mapView'
import CafeDetails from './pages/CafeDetails'
import './components/cafeQuiet.css'

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<MapView />} />
      <Route path="/cafe/:id" element={<CafeDetails />} />
    </Routes>
  )
}

export default App
