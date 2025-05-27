import { useState, useEffect } from 'react'
import SearchBar from './searchbar'
import Sidebar from './sidebar'
import CafeCard from './CafeCard'

export default function MapView() {
  const [cafes, setCafes] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    // Mock data for now — can replace with Firebase later
    setCafes([
      { id: 1, name: 'Latte Lane', status: 'Quiet' },
      { id: 2, name: 'Espresso Express', status: 'Busy' }
    ])
  }, [])

  const filtered = cafes.filter(cafe =>
    cafe.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3">
        <SearchBar onSearch={setSearchQuery} />
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
