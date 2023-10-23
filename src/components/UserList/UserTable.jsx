import Table from "react-bootstrap/Table";
import UserDetailsModal from "./UserDetailsModal";
import style from "./UserTable.module.css";
import { useUserDetailsModal } from "../../lib/hooks/useUserDetailsModal";

const UserTable = ({ users }) => {
  const {
    userDetailsModal,
    showUserDetailsModal,
    handleShowUserDetailsModal,
    handleHideUserDetailsModal,
  } = useUserDetailsModal(users);

  return (
    <div className={style.tableContainer}>
      <Table striped bordered hover>
        <thead className={style.tableHeader}>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>laboratory</th>
            <th>role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className={style.tableRow}
              onClick={() => handleShowUserDetailsModal(user.id)}
            >
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.username}</td>
              <td>{user.laboratory}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showUserDetailsModal && (
        <div className={style.modalContainer}>
          <UserDetailsModal
            user={userDetailsModal}
            show={showUserDetailsModal}
            handleClose={handleHideUserDetailsModal}
          />
        </div>
      )}
    </div>
  );
};

export default UserTable;
