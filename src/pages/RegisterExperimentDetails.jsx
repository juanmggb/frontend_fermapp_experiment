import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import style from "./RegisterExperimentDetails.module.css";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMicroorganismList,
  fetchProductList,
  fetchSubstrateList,
} from "../lib/actions/elementActions";

const RegisterExperimentDetails = () => {
  // Function to dispatch actions
  const dispatch = useDispatch();

  // Function to navigate in the application
  const navigate = useNavigate();

  // Get microorganisms from the Redux store
  const microorganismList = useSelector((state) => state.microorganismList);
  const { microorganisms } = microorganismList;

  // Get products from the redux store
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  // Get products from the redux store
  const substrateList = useSelector((state) => state.substrateList);
  const { substrates } = substrateList;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useEffect para mostrar las alertas de validacion del formulario
  useEffect(() => {
    if (errors.laboratory) {
      toast.dismiss();
      toast.error(errors.laboratory.message);
    }

    if (errors.supervisor) {
      toast.dismiss();
      toast.error(errors.supervisor.message);
    }

    if (errors.author) {
      toast.dismiss();
      toast.error(errors.author.message);
    }
  }, [errors.author, errors.supervisor, errors.laboratory]);

  useEffect(() => {
    dispatch(fetchMicroorganismList());
    dispatch(fetchSubstrateList());
    dispatch(fetchProductList());
  }, [dispatch]);

  const onSubmit = (data) => {
    // Do something with the selected file

    const experiment = {
      author: data.author,
      supervisor: data.supervisor,
      laboratory: data.laboratory,
      substrate: data.substrate,
      microorganism: data.microorganism,
      product: data.product,
      experiment_type: data.experiment_type,
      observations: data.observations,
    };

    localStorage.setItem("experimentDetails", JSON.stringify(experiment));

    navigate("/register-experiment-variables");
  };

  console.log(microorganisms);

  if (microorganisms && products && substrates)
    return (
      <Container fluid className={style.wrapper}>
        <h1 className={style.title}>Register Experiment Details</h1>
        <Form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <Row className={style.row}>
            <Col md={6}>
              <Form.Group className={style.formGroup} controlId="author">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  {...register("author", {
                    required: "Please introduce the author name",
                  })}
                  type="text"
                  placeholder="Enter author name"
                  autoComplete="off"
                ></Form.Control>
              </Form.Group>

              <Form.Group className={style.formGroup} controlId="supervisor">
                <Form.Label>Supervisor</Form.Label>
                <Form.Control
                  {...register("supervisor", {
                    required: "Please introduce the supervisor name",
                  })}
                  type="text"
                  placeholder="Enter supervisor name"
                  autoComplete="off"
                ></Form.Control>
              </Form.Group>

              <Form.Group className={style.formGroup} controlId="laboratory">
                <Form.Label>Laboratory</Form.Label>
                <Form.Control
                  {...register("laboratory", {
                    required: "Please introduce the laboratory name",
                  })}
                  type="text"
                  placeholder="Enter laboratory name"
                  autoComplete="off"
                ></Form.Control>
              </Form.Group>

              <Form.Group className={style.formGroup} controlId="substrate">
                <Form.Label>Sbustrate</Form.Label>
                <Form.Control {...register("substrate")} as="select">
                  {substrates.map((substrate) => (
                    <option key={substrate.id} value={substrate.id}>
                      {substrate.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className={style.formGroup} controlId="microorganism">
                <Form.Label>Microorganism</Form.Label>
                <Form.Control {...register("microorganism")} as="select">
                  {microorganisms.map((mo) => (
                    <option key={mo.id} value={mo.id}>
                      {mo.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group className={style.formGroup} controlId="product">
                <Form.Label>Product</Form.Label>
                <Form.Control {...register("product")} as="select">
                  {products.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      {prod.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group className={style.formGroup} controlId="type">
                <Form.Label>Experiment Type</Form.Label>
                <Form.Control {...register("experiment_type")} as="select">
                  <option value="kinetic">Kinetic growth</option>
                  <option value="process optimization">
                    Operation parameters optimization
                  </option>
                </Form.Control>
              </Form.Group>

              <Form.Group className={style.formGroup} controlId="observations">
                <Form.Label>Observations (Optional)</Form.Label>
                <Form.Control
                  {...register("observations")}
                  type="text"
                  placeholder="Enter experiment observations"
                  autoComplete="off"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row className={style.row}>
            <button className={style.btnPrimary}>
              Register Experiment Variables
            </button>
          </Row>
        </Form>
      </Container>
    );
};

export default RegisterExperimentDetails;
