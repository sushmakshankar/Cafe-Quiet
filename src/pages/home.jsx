import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import './home.css'

function HomePage() {
  const navigate = useNavigate()

  return (
    <Container className="text-center mt-5">
      <h1 className="display-3 fw-bold">Café Quiet</h1>
        <p className="lead mb-4">Find your next peaceful work spot</p>
        <Button
          variant="success"
          size="lg"
          className="rounded-pill shadow-sm"
          onClick={() => navigate('/map')}
        >
          Find Cafes Near Me
        </Button>
    </Container>
  )
}

export default HomePage

// export default function Home() {
//     return (
//       <div>
//         <h1>Nearby Cafes</h1>
//         {/* Your MapView, SearchBar, Sidebar etc. go here */}
//       </div>
//     );
//   }
  