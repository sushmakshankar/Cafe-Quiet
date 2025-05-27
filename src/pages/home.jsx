import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

function HomePage() {
  const navigate = useNavigate()

  return (
    <Container className="text-center mt-5">
      <h1>Café Quiet</h1>
      <Button variant="primary" onClick={() => navigate('/map')}>
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
  