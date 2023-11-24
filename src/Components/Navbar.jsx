import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../src/App.css";


function Navbarr() {
  return (
    <>
      <div className="bg-body-tertiary">
        <Navbar data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#" className="fs-3 fw-bold">ZONE</Navbar.Brand>
            <Nav className="mx-auto fs-5 gap-5">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Components</Nav.Link>
              <Nav.Link href="#">Pages</Nav.Link>
              <Nav.Link href="#">Docs</Nav.Link>
            </Nav>
              <button className="btn btn-dark">Buy Now</button>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navbarr;
