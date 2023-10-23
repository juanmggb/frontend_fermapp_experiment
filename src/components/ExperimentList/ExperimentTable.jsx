import Table from "react-bootstrap/Table";
import ExperimentDetailsModal from "./ExperimentDetailsModal";
import style from "./ExperimentTable.module.css";
import { useExperimentDetailsModal } from "../../lib/hooks/experimentDetailsModal";

const ExperimentTable = ({ experiments }) => {
  const {
    experimentDetailsModal,
    showExperimentDetailsModal,
    handleShowExperimentDetailsModal,
    handleHideExperimentDetailsModal,
  } = useExperimentDetailsModal(experiments);

  return (
    <div className={style.tableContainer}>
      <Table striped bordered hover>
        <thead className={style.tableHeader}>
          <tr>
            <th>id</th>
            <th>author</th>
            <th>supervisor</th>
            <th>laboratory</th>
            <th>experiment type</th>
          </tr>
        </thead>
        <tbody>
          {experiments.map((exp) => (
            <tr
              key={exp.id}
              className={style.tableRow}
              onClick={() => handleShowExperimentDetailsModal(exp.id)}
            >
              <td>{exp.id}</td>
              <td>{exp.author}</td>
              <td>{exp.supervisor}</td>
              <td>{exp.laboratory}</td>
              <td>{exp.experiment_type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showExperimentDetailsModal && (
        <div className={style.modalContainer}>
          <ExperimentDetailsModal
            experiment={experimentDetailsModal}
            show={showExperimentDetailsModal}
            handleClose={handleHideExperimentDetailsModal}
          />
        </div>
      )}
    </div>
  );
};

export default ExperimentTable;
