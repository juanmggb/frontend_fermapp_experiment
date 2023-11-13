import { Button, Col, Container, Row } from "react-bootstrap";
import { logout } from "../lib/actions/sessionActions";

const Home = () => {
  return (
    <Container>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <Col sm={6} className="d-flex justify-content-center">
          <Button className="my-3" onClick={logout}>
            Logout
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
