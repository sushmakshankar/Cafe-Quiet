import { useParams } from 'react-router-dom'

export default function CafeDetails() {
  const { id } = useParams()

  return (
    <div className="display-2 fw-bold text-center mt-5">
      <h2>Cafe Details</h2>
      <div className="display-6 text-secondary size-1">
        Showing more info for café ID: {id}
      </div> 
    </div>

    
  )
}

// this code below would have been used to fetch cafe details from Firebase Firestore,
// but it wasn't working properly, so i decided to omit it in my final submission. 
// if i choose to implement this project further in the future, this is one major area
// that i'd like to improve and fully develop.

// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../firebase/config';

// export default function CafeDetails() {
//   const { cafeId } = useParams();
//   const [cafe, setCafe] = useState(null);

//   useEffect(() => {
//     async function fetchCafe() {
//       const docRef = doc(db, 'cafes', cafeId);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setCafe(docSnap.data());
//       } else {
//         setCafe(null); // handle no cafe found
//       }
//     }
//     fetchCafe();
//   }, [cafeId]);

//   if (!cafe) return <p>Loading or cafe not found...</p>;

//   return (
//     <div>
//       <h1>{cafe.name}</h1>
//       <p>Status: {cafe.status}</p>
//       <p>Click Count: {cafe.clickCount}</p>
//     </div>
//   );
// }
