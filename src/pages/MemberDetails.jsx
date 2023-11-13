import { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMemberDetails, updateMember } from "../lib/actions/userActions";
import { MEMBER_UPDATE_RESET } from "../constants/userConstants";
import Loader from "../components/general/Loader";
import Message from "../components/general/Message";
import style from "./MemberDetails.module.css";
import { useForm } from "react-hook-form";

const MemberDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const memberId = params.id;

  const memberDetails = useSelector((state) => state.memberDetails);
  const { error, member, loading } = memberDetails;

  const memberUpdate = useSelector((state) => state.memberUpdate);
  const { error: updateError, success, loading: updateLoading } = memberUpdate;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (!member || Number(memberId) !== member.id) {
      dispatch(fetchMemberDetails(memberId));
    } else {
      setValue("role", member.role);
    }
  }, [member, memberId, dispatch, setValue]);

  useEffect(() => {
    let toastId;

    if (updateLoading) {
      toastId = toast.loading("Updating member");
    }

    if (updateError) {
      toast.dismiss(toastId);
      toast.error("An error occurred when updating member");
    }

    if (success) {
      toast.dismiss(toastId);
      toast.success("Member updated successfully");
      dispatch({ type: MEMBER_UPDATE_RESET });
      navigate("/member-list");
    }
  }, [updateError, updateLoading, success, dispatch, navigate]);

  useEffect(() => {
    if (errors.role) {
      toast.dismiss();
      toast.error(errors.role.message);
    }
  }, [errors.role]);

  const onSubmit = (data) => {
    dispatch(updateMember(data, memberId));
  };

  if (loading) return <Loader />;

  if (error)
    return (
      <Message variant="danger">
        An error occurred when requesting member details
      </Message>
    );

  if (member)
    return (
      <Container>
        <Row
          className={`d-flex justify-content-center align-items-center ${style.row}`}
        >
          <Col sm={6}>
            <h1>Member {memberId}</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="role">
                <Form.Label>Role:</Form.Label>
                <Form.Control
                  as="select"
                  {...register("role", { required: "Please, select a role" })}
                >
                  <option value="">Select a role</option>
                  <option value="Student Researcher">Student Researcher</option>
                  <option value="Lab Director">Lab Director</option>
                </Form.Control>
              </Form.Group>

              <Button type="submit" className="mt-3">
                Update Member
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
};
export default MemberDetails;
