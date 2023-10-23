import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ExperimentVariableTable from "./ExperimentVariableTable";

function ExperimentDetailsModal({ experiment, show, handleClose }) {
  // Destructure experiment properties for easy access
  const {
    id,
    date,
    author,
    supervisor,
    laboratory,
    experiment_type,
    observations,
    substrate,
    microorganism,
    product,

    // variables
    variables,
  } = experiment;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Experiment {id}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>Date: {date}</ListGroup.Item>
          <ListGroup.Item>Author: {author}</ListGroup.Item>
          <ListGroup.Item>Supervisor: {supervisor}</ListGroup.Item>
          <ListGroup.Item>Laboratory: {laboratory}</ListGroup.Item>
          <ListGroup.Item>Experiment Type: {experiment_type}</ListGroup.Item>
          <ListGroup.Item>Observations: {observations}</ListGroup.Item>
          <ListGroup.Item>Substrate: {substrate}</ListGroup.Item>
          <ListGroup.Item>Microorganism: {microorganism}</ListGroup.Item>
          <ListGroup.Item>Product: {product}</ListGroup.Item>
        </ListGroup>

        <ExperimentVariableTable variables={variables} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ExperimentDetailsModal;
