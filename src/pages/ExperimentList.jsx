import { Col, Container, Row } from "react-bootstrap";
import style from "./ExperimentList.module.css";
import ExperimentTable from "../components/ExperimentList/ExperimentTable";
import ExperimentFilters from "../components/ExperimentList/ExperimentFilters";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchExperimentList } from "../lib/actions/experimentActions";

const ExperimentList = () => {
  const dispatch = useDispatch();

  const experimentList = useSelector((state) => state.experimentList);

  const { loading, experiments, error } = experimentList;

  useEffect(() => {
    dispatch(fetchExperimentList());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error {error}</h1>;

  console.log(experiments);
  if (experiments)
    return (
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={3} className={style.sidebar}>
            <h2>Filters</h2>
            <ExperimentFilters />
          </Col>
          {/* Mainpanel */}
          <Col md={9} className={style.mainPanel}>
            <h1>Experiment List</h1>
            <ExperimentTable experiments={experiments} />
          </Col>
        </Row>
      </Container>
    );
};
export default ExperimentList;
