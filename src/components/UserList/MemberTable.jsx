import Table from "react-bootstrap/Table";
import MemberDetailsModal from "./MemberDetailsModal";
import style from "./MemberTable.module.css";
import { useMemberDetailsModal } from "../../lib/hooks/useUserDetailsModal";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../lib/actions/userActions";
import toast from "react-hot-toast";
import DeleteObjectConfirm from "../general/DeleteObjectConfirm";
import { MEMBER_DETAILS_RESET } from "../../constants/userConstants";

const MemberTable = ({ members }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    memberDetailsModal,
    showMemberDetailsModal,
    handleShowMemberDetailsModal,
    handleHideMemberDetailsModal,
  } = useMemberDetailsModal(members);

  const handleMemberDetails = (memberId) => {
    dispatch({ type: MEMBER_DETAILS_RESET });
    navigate(`/members/${memberId}`);
  };

  const handleUserDelete = (memberId, userId) => {
    toast.dismiss();
    toast(
      (t) => (
        <DeleteObjectConfirm
          t={t}
          onDelete={() => dispatch(deleteUser(userId))}
          object={`member ${memberId}`}
        />
      ),
      {
        duration: 5000,
      }
    );
  };

  return (
    <div className={style.tableContainer}>
      <Table striped bordered hover>
        <thead className={style.tableHeader}>
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>LABORATORY</th>
            <th>ROLE</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr
              key={member.id}
              className={style.tableRow}
              onClick={() => handleShowMemberDetailsModal(member.id)}
            >
              <td>{member.id}</td>
              <td>
                <img
                  width="100px"
                  src={`http://127.0.0.1:8000/${member.image}`}
                  alt={member.first_name}
                />
              </td>
              <td>{member.name}</td>
              <td>{member.laboratory_name}</td>
              <td>{member.role}</td>
              <td
                onClick={(e) => {
                  e.stopPropagation();
                  handleMemberDetails(member.id);
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </td>
              <td
                onClick={(e) => {
                  e.stopPropagation();
                  handleUserDelete(member.id, member.user);
                }}
              >
                <i className="fa-solid fa-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showMemberDetailsModal && (
        <div>
          <MemberDetailsModal
            member={memberDetailsModal}
            show={showMemberDetailsModal}
            handleClose={handleHideMemberDetailsModal}
          />
        </div>
      )}
    </div>
  );
};

export default MemberTable;
