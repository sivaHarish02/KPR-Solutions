import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

 export default function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="warning" variant="dark">
        <Container>
          <Navbar.Brand href="/"><h3>BLOG </h3></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#/create"><h4>CREATE</h4></Nav.Link>
            <Nav.Link href="#/deposit"><h4>ALL BLOG</h4></Nav.Link>
        
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}
