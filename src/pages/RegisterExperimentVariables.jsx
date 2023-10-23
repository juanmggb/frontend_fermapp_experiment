import { Card, Col, Container, Form, Row } from "react-bootstrap";

import { useForm } from "react-hook-form";
import style from "./RegisterExperimentVariables.module.css";
import { toast } from "react-hot-toast";
import { useExperimentVariables } from "../lib/hooks/useExperimentVariables";
import { getExperimentalVariables } from "../lib/utilis/experiments";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postExperiment } from "../lib/actions/experimentActions";
import { useNavigate } from "react-router-dom";
import { REGISTER_EXPERIMENT_RESET } from "../constants/experimentConstants";

const RegisterExperimentVariables = () => {
  // Function to dispatch actions
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get register experiment from the Redux store
  const registerExperiment = useSelector((state) => state.registerExperiment);

  const { loading, success, error } = registerExperiment;

  console.log(loading, success, error);

  // useForm to manage form validation
  const { register, handleSubmit, reset } = useForm();

  const { variableNames, variableValues, handleFileChange } =
    useExperimentVariables();

  useEffect(() => {
    let toastId;

    if (loading) {
      toastId = toast.loading("Registering Experiment");
    }

    if (success) {
      toast.dismiss(toastId);
      toast.success("Experiment Registered Successfully");
      navigate("/experiment-list");
      dispatch({ type: REGISTER_EXPERIMENT_RESET });
    }

    if (error) {
      toast.dismiss(toastId);
      toast.error("An Error Occurred When Registering the Experiment");
    }
  });

  useEffect(() => {
    const newDefaultValues = {};
    variableNames.forEach((varName) => {
      newDefaultValues[varName + "-variable_name"] = varName;
    });
    reset(newDefaultValues);
  }, [variableNames, reset]);

  const onSubmit = (data) => {
    // Do something with the selected file

    const variables = getExperimentalVariables(
      data,
      variableNames,
      variableValues
    );

    if (!variables.length) {
      toast.dismiss();
      toast.error("All variables must be named");
      return;
    }

    const experimentDetails = JSON.parse(
      localStorage.getItem("experimentDetails") || null
    );

    const experiment = {
      experimentDetails,
      variables,
    };

    console.log("Experiment", experiment);

    dispatch(postExperiment(experiment));
  };

  return (
    <Container fluid className={style.wrapper}>
      <h1 className={style.title}>Register Experiment Variables</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <Row className={style.row}>
          <Col md={3}>
            <Form.Group className={style.formGroup} controlId="data">
              <Form.Label>Enter experimental data</Form.Label>
              <Form.Control
                {...register("data")}
                type="file"
                onChange={(e) => handleFileChange(e.target.files[0])}
                required
              ></Form.Control>
            </Form.Group>

            {/* <Form.Group className={style.formGroup} controlId="observations">
              <Form.Label>Observations (Optional)</Form.Label>
              <Form.Control
                {...register("observations")}
                type="text"
                placeholder="Enter observations"
              ></Form.Control>
            </Form.Group> */}

            <button className={style.btnPrimary} type="submit">
              Go to operation conditions section &rarr;
            </button>
          </Col>
          <Col md={9} className={style.cardContainer}>
            {variableNames.map((varName, index) => (
              <Card key={index}>
                <Card.Body>
                  <Form.Group className={style.formGroup} controlId="name">
                    <Form.Label>Variable name:</Form.Label>
                    <Form.Control
                      {...register(varName + "-variable_name")}
                      type="text"
                      defaultValue={varName}
                      placeholder="Enter variable name"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className={style.formGroup} controlId="units">
                    <Form.Label>Variable units:</Form.Label>
                    <Form.Control
                      {...register(varName + "-variable_units")}
                      as="select"
                    >
                      {/* Concentration */}
                      <option value="g/L">g/L</option>
                      <option value="°T">°T</option>
                      <option value="rmp">rpm</option>
                      <option value="seconds">seconds</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group
                    className={style.formGroup}
                    controlId="detection_method"
                  >
                    <Form.Label>Detection method (Optional):</Form.Label>
                    <Form.Control
                      {...register(varName + "-detection_method")}
                      type="text"
                      placeholder="Enter detection method"
                    ></Form.Control>
                  </Form.Group>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default RegisterExperimentVariables;
