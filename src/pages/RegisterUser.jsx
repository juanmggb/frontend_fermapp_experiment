import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

import style from "./RegisterUser.module.css";
import {
  useRegisterUserForm,
  validateUsername,
} from "../lib/hooks/useRegisterUserForm";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../lib/actions/userActions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { REGISTER_USER_RESET } from "../constants/userConstants";

const RegisterUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerUser = useSelector((state) => state.registerUser);

  const { loading, success, error } = registerUser;

  useEffect(() => {
    let toastId;
    if (loading) {
      toastId = toast.loading("Registering user");
    }

    if (error) {
      toast.dismiss(toastId); // Dismiss the loading toast if there's an error
      toast.error("An error occurred when registering user");
    }

    if (success) {
      toast.dismiss(toastId); // Dismiss the loading toast if registration succeeds
      toast.success("User registered successfully");
      dispatch({ type: REGISTER_USER_RESET });
      navigate("/user-list");
    }
  }, [loading, error, success, dispatch, navigate]);

  useEffect(() => {
    return () => {
      toast.dismiss();
    };
  }, []);

  const {
    username,
    password,
    confirmPassword,
    first_name,
    is_staff,
    role,
    setUsernameValue,
    setUsernameError,
    setUsernameLoading,
    setPassword,
    setConfirmPassword,
    setUserField,
    setIsStaff,
  } = useRegisterUserForm();

  useEffect(() => {
    if (username.value) {
      setUsernameLoading();
      validateUsername(username.value, setUsernameError, setUsernameValue);
    }
  }, [username.value]);

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.dismiss();

    if (confirmPassword !== password) {
      toast.error("Passwords must match");
      return;
    }

    const user = {
      username: username.value,
      password,
      first_name,
      role,
      is_staff,
    };

    dispatch(postUser(user));
  };

  return (
    <Container className={style.wrapper}>
      <Row className={style.row}>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Username:</Form.Label>
              <Form.Control
                className={username.error ? style.usernameError : ""}
                type="text"
                value={username.value}
                onChange={(e) => setUsernameValue(e.target.value)}
                required
              />
              {username.error && (
                <span className={style.error}>{username.error}</span>
              )}

              {username.loading && (
                <span className={style.loading}>Loading...</span>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={first_name}
                onChange={(e) => setUserField(e)}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Role:</Form.Label>
              <Form.Control
                as="select"
                name="role"
                value={role}
                onChange={(e) => setUserField(e)}
                required
              >
                <option value="">Select a role</option>
                <option value="Student Researcher">Student Researcher</option>

                <option value="Lab Director">Lab Director</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Check
                type="checkbox"
                name="is_staff"
                label="Is staff"
                checked={is_staff}
                onChange={() => setIsStaff(!is_staff)}
              ></Form.Check>
            </Form.Group>

            <button className={style.btnPrimary} type="submit">
              Register User
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default RegisterUser;
