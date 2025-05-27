function CafeCard({ cafe }) {
    return (
      <div style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <h5>{cafe.name} - {cafe.distance}</h5>
        <p>Crowd: {cafe.crowd}</p>
        <p>Noise Level: {cafe.noise}</p>
      </div>
    )
  }
  
  export default CafeCard
  