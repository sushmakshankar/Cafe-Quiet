import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function CafeCard({ cafe, clicks }) {
  const navigate = useNavigate()

  return (
    // <Card className="mb-1">
    <Card className="mb-3 cafe-quiet shadow-sm rounded">
      <Card.Body>
        <Card.Title className="display-7 fw-bold">{cafe.name}</Card.Title>
        <Card.Text className="lead"> <strong>Crowd Level</strong>: {cafe.status}</Card.Text>
        <Card.Text className="lead"> <strong>Number of Café Quiet Customers Visited</strong>: {clicks}</Card.Text>
        <Button 
          variant="success" 
          size ="lg"
          className="rounded-pill shadow-sm"
          onClick={() => navigate(`/cafe/${cafe.id}`)}>
          Details
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CafeCard
