import CafeCard from './CafeCard'
import './CafeSidebar.css';

function CafeSidebar() {
  const dummyCafes = [
    { name: 'Starbucks', distance: '0.1 mi', crowd: 'Busy', noise: 3 },
    { name: 'Mr. West', distance: '0.3 mi', crowd: 'Empty', noise: 1 },
    { name: 'Mr. West', distance: '0.3 mi', crowd: 'Empty', noise: 1 },
  ]

  return (
    <div className="cafe-sidebar">
    {/* style={{ width: '300px', overflowY: 'auto', borderRight: '1px solid gray' }}> */}
      {dummyCafes.map((cafe, index) => (
        <CafeCard key={index} cafe={cafe} />
      ))}
    </div>
  )
}

export default CafeSidebar
