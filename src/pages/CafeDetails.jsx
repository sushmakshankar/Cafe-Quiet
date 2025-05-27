import { useParams } from 'react-router-dom'

export default function CafeDetails() {
  const { id } = useParams()

  return (
    <div className="p-4">
      <h2>Cafe Details</h2>
      <p>Showing more info for café ID: {id}</p>
    </div>
  )
}
