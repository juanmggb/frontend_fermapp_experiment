import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Carousel from "react-bootstrap/Carousel";
import "./RegisterExperiment.css"; // Archivo CSS personalizado para los estilos

const RegisterExperiment = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const [colNames, setColNames] = useState([]);
  const [variableMeasures, setVariableMeasures] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < colNames.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onSubmit = (data) => {
    // Do something with the selected file

    const variables = createValuesArray(data, colNames, variableMeasures);
    console.log(variables);

    const experiment = {
      variables: variables,
    };

    console.log(experiment);
  };

  const handleFileChange = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      const lines = contents.split("\n");
      const columnNames = lines[0].split(",");
      const numberOfColumns = columnNames.length;

      const newColumnNames = columnNames.map((element) => element.trimEnd());
      setColNames(newColumnNames);

      const measures = [];

      for (let i = 0; i < numberOfColumns; i++) {
        const measure = {
          variable_name: newColumnNames[i],
          values: [],
        };
        measures.push(measure);
      }

      for (let j = 1; j < lines.length; j++) {
        const values = lines[j].split(",");
        for (let k = 0; k < numberOfColumns; k++) {
          const numericValue = parseFloat(values[k]);
          measures[k].values.push(isNaN(numericValue) ? null : numericValue);
        }
      }

      setVariableMeasures(measures);
    };

    reader.readAsText(file);
  };

  return (
    <Container>
      <h1>Register Experiment</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="author">
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

            <Form.Group controlId="supervisor">
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

            <Form.Group controlId="laboratory">
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

            <Form.Group controlId="substrate">
              <Form.Label>Sbustrate</Form.Label>
              <Form.Control {...register("substrate")} as="select">
                <option value="0">Glucose</option>
                <option value="1">Fructose</option>
                <option value="2">Sacarose</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="microorganism">
              <Form.Label>Microorganism</Form.Label>
              <Form.Control {...register("microorganism")} as="select">
                <option value="0">Yeast</option>
                <option value="1">Bacteria</option>
                <option value="2">Alge</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="product">
              <Form.Label>Product</Form.Label>
              <Form.Control {...register("product")} as="select">
                <option value="0">Ethanol</option>
                <option value="1">Protein</option>
                <option value="2">Enzyme</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Experiment Type</Form.Label>
              <Form.Control {...register("experiment_type")} as="select">
                <option value="0">Kinetic growth</option>
                <option value="1">Operation parameters optimization</option>
                <option value="2">Culture medium optimization</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="observations">
              <Form.Label>Observations (Optional)</Form.Label>
              <Form.Control
                {...register("observations")}
                type="text"
                placeholder="Enter experiment observations"
                autoComplete="off"
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="data">
              <Form.Label>Enter experimental data</Form.Label>
              <Form.Control
                {...register("data")}
                type="file"
                onChange={(e) => handleFileChange(e.target.files[0])}
              ></Form.Control>
            </Form.Group>

            {colNames.length > 0 && (
              <>
                <Carousel
                  // slide={false}
                  controls={false}
                  indicators={false}
                  activeIndex={currentIndex}
                >
                  {colNames.map((colName, index) => (
                    <Carousel.Item key={index}>
                      <Form.Group controlId={colName + "-variable_name"}>
                        <Form.Label>Variable name:</Form.Label>
                        <Form.Control
                          {...register(colName + "-variable_name")}
                          type="text"
                          defaultValue={colName}
                          placeholder="Enter variable name"
                        ></Form.Control>
                      </Form.Group>

                      <Form.Group controlId={colName + "-variable_units"}>
                        <Form.Label>Variable units:</Form.Label>
                        <Form.Control
                          {...register(colName + "-variable_units")}
                          as="select"
                        >
                          {/* Concentration */}
                          <option value="0">g/L</option>
                          <option value="1">°T</option>
                          <option value="2">rpm</option>
                          <option value="3">seconds</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group controlId={colName + "-detection_method"}>
                        <Form.Label>Detection method (Optional):</Form.Label>
                        <Form.Control
                          {...register(colName + "-detection_method")}
                          type="text"
                          placeholder="Enter detection method"
                        ></Form.Control>
                      </Form.Group>

                      <Form.Group controlId={colName + "-observations"}>
                        <Form.Label>Observations (Optional):</Form.Label>
                        <Form.Control
                          {...register(colName + "-observations")}
                          type="text"
                          placeholder="Enter observations"
                        ></Form.Control>
                      </Form.Group>
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Row>
                  <Col>
                    <Button
                      disabled={currentIndex === 0}
                      onClick={handleBack}
                      type="button"
                    >
                      &#8249; Back
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      disabled={currentIndex === colNames.length - 1}
                      onClick={handleNext}
                      type="button"
                    >
                      Next &#8250;
                    </Button>
                  </Col>
                </Row>
              </>
            )}
            <Row className="mt-5">
              <Col>
                <Button variant="primary" type="submit">
                  Go to operation conditions section &rarr;
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

function createValuesArray(formData, colNames, variableMeasures) {
  const values = [];

  console.log("variableMeasures", variableMeasures);

  // const fieldPrefixes = ["time", "x", "p", "s"];

  colNames.forEach((prefix) => {
    const variableName = formData[`${prefix}-variable_name`] || "";
    const variableUnits = formData[`${prefix}-variable_units`] || "";
    const detectionMethod = formData[`${prefix}-detection_method`] || "";

    const obj = {
      variable_name: variableName,
      variable_units: variableUnits,
      detection_method: detectionMethod,
      values: variableMeasures[variableName],
    };

    values.push(obj);
  });

  return values;
}

export default RegisterExperiment;
