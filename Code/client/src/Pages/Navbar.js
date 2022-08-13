import { Navbar, Container, Button, Row, Col } from "react-bootstrap";
import { SuitSpadeFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
export const NavBar = (props) => {

  return (

    < Navbar bg="dark" expand="lg fixed-top" >
      <Container fluid className="justify-content-center py-2">
        <div className="d-flex justify-content-center">
          <Navbar.Brand href="/" className="text-white" >
            {/* <CpuFill className="rotated" size={30} /> */}
            <img src={require('../Images/logo.png')} alt='logo' width={150} />
          </Navbar.Brand>
        </div>
        <div className="d-flex justify-content-end" style={{ position: "absolute", right: "30px" }}>
          <Link to="/info">
            <Button size="sm" variant="outline-warning" style={{ fontWeight: "bold" }}>
              Learn More
            </Button>
          </Link>
        </div>
      </Container>
    </Navbar >
  );
}

export default NavBar;