import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function CafeCard({ cafe }) {
  const navigate = useNavigate()

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{cafe.name}</Card.Title>
        <Card.Text>Status: {cafe.status}</Card.Text>
        <Button onClick={() => navigate(`/cafe/${cafe.id}`)}>Details</Button>
      </Card.Body>
    </Card>
  )
}

export default CafeCard
