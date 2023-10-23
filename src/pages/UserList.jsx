import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../lib/actions/userActions";
import { Col, Container, Row } from "react-bootstrap";
import style from "./UserList.module.css";
import UserFilters from "../components/UserList/UserFilters";
import UserTable from "../components/UserList/UserTable";
// import { useNavigate } from "react-router-dom";

const UserList = () => {
  // Function to dispatch actions
  const dispatch = useDispatch();

  // Function to navigate in the application
  // const navigate = useNavigate()

  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  if (loading) return <h1>Loading</h1>;

  if (error) return <h1>Error</h1>;

  if (users)
    return (
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={3} className={style.sidebar}>
            <h2>Filters</h2>
            <UserFilters />
          </Col>
          {/* Mainpanel */}
          <Col md={9} className={style.mainPanel}>
            <h1>User List</h1>
            <UserTable users={users} />
          </Col>
        </Row>
      </Container>
    );
};
export default UserList;
