import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../lib/actions/sessionActions";
import { isValidPassword, isValidUsername } from "../lib/utilis/users";

const Login = () => {
  // Function to dispatch actions
  const dispatch = useDispatch();

  // Function to navigate in application
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, token, error } = userLogin;

  const setUsername = (newUsername) => {
    if (isValidUsername(newUsername) || !newUsername) {
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        username: newUsername,
      }));
    } else {
      toast.error("Invalid username. Only lowercase letters are allowed.");
    }
  };

  const setPassword = (newPassword) => {
    if (isValidPassword(newPassword) || !newPassword) {
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        password: newPassword,
      }));
    } else {
      toast.error("Invalid password. Only letters and numbers are allowed.");
    }
  };

  useEffect(() => {
    if (loading) {
      toast.loading("Login user ...");
    }

    if (token) {
      toast.dismiss();
      toast.success("Login successfully");

      navigate("/");
    }

    if (error) {
      toast.remove();
      toast.error(error);
    }
  }, [navigate, token, error, loading]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(credentials));
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={credentials.username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={credentials.password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <button type="submit">Login</button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
