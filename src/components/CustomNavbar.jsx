import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import netflixLogo from "../assets/netflix_logo.png";
import accountPhoto from "../assets/avatar.png";

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image
            src={netflixLogo}
            alt="logo"
            id="netflix-logo"
            responsive="true"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <Icon.Search color="white" />
            </Nav.Link>
            <Nav.Link href="#">KIDS</Nav.Link>
            <Nav.Link href="#deets">
              <Icon.BellFill />
            </Nav.Link>
            <Image
              src={accountPhoto}
              alt="logo"
              id="avatar"
              responsive="true"
            />
            <NavDropdown id="collasible-nav-dropdown">
              <div>
                <Image
                  src={accountPhoto}
                  alt="logo"
                  id="avatar"
                  responsive="true"
                  className="pl-2"
                />
                <span className=" pl-2 text-light">Alexis</span>
              </div>
              <NavDropdown.Item href="#" className=" px-2 text-light">
                Manage Profiles
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className=" px-2 text-light">
                Account
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className=" px-2 text-light">
                Help Center
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className=" px-2 text-light">
                Signout Netflix
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
