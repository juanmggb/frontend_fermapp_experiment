import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);

  const { token } = userLogin;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>OptApp</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!token ? (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            ) : (
              <>
                <LinkContainer to="/register-experiment">
                  <Nav.Link>Register Experiment</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/experiment-list">
                  <Nav.Link>Experiments</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/user-list">
                  <Nav.Link>Users</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/register-user">
                  <Nav.Link>Register User</Nav.Link>
                </LinkContainer>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
