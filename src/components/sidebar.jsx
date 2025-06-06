// THIS FILE IS CURRENTLY UNUSED
// i decided to remove the sidebar element from my project as it wasn't adding 
// any substantial value to the application. this is something i'd be interested
// in developing further in the future!

import CafeCard from './CafeCard'
import './CafeSidebar.css';

// function CafeSidebar() {
//   const dummyCafes = [
//     { name: 'Starbucks', distance: '0.1 mi', crowd: 'Busy', noise: 3 },
//     { name: 'Mr. West', distance: '0.3 mi', crowd: 'Empty', noise: 1 },
//     { name: 'Mr. West', distance: '0.3 mi', crowd: 'Empty', noise: 1 },
//   ]

//   return (
//     <div className="cafe-sidebar">
//     {/* style={{ width: '300px', overflowY: 'auto', borderRight: '1px solid gray' }}> */}
//       {dummyCafes.map((cafe, index) => (
//         <CafeCard key={index} cafe={cafe} />
//       ))}
//     </div>
//   )
// }

function CafeSidebar({ cafes }) {
  return (
    <div className="cafe-sidebar">
      {cafes.map((cafe, index) => (
        <CafeCard key={index} cafe={cafe} />
      ))}
    </div>
  )
}


export default CafeSidebar
