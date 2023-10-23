import { Form } from "react-bootstrap";
import style from "./ExperimentFilters.module.css";
import { useExperimentListFilter } from "../../lib/hooks/useExperimentListFilter";

const ExperimentFilters = () => {
  const {
    filterBy,
    search,
    sortBy,
    initialDate,
    finalDate,
    setFilterBy,
    setSearch,
    setSortBy,
    setDate,
  } = useExperimentListFilter();

  return (
    <Form className={style.form}>
      <Form.Group className={style.formGroup} controlId="filterBy">
        <Form.Label>Filter table by</Form.Label>
        <Form.Control
          as="select"
          value={filterBy}
          onChange={(e) => setFilterBy(Number(e.target.value))}
        >
          <option value="0">author</option>
          <option value="1">supervisor</option>
          <option value="2">laboratory</option>
          <option value="3">experiment type</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className={style.formGroup} controlId="search">
        <Form.Control
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group className={style.formGroup} controlId="sortBy">
        <Form.Label>Sort table by</Form.Label>
        <Form.Control
          as="select"
          value={sortBy}
          onChange={(e) => setSortBy(Number(e.target.value))}
        >
          <option value="0">author</option>
          <option value="1">supervisor</option>
          <option value="2">laboratory</option>
          <option value="3">experiment type</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className={style.formDate} controlId="date">
        <div className={style.dateWrapper}>
          <Form.Control
            className={style.initialDateControl}
            type="date"
            name="initalDate"
            value={initialDate}
            onChange={(e) => setDate(e)}
          ></Form.Control>
        </div>
        <div className={style.dateWrapper}>
          <Form.Control
            className={style.finalDateControl}
            type="date"
            name="finalDate"
            value={finalDate}
            onChange={(e) => setDate(e)}
          ></Form.Control>
        </div>
      </Form.Group>

      <div className={style.btnWrapper}>
        <button className={style.btnPrimary}>Search experiments</button>
      </div>
    </Form>
  );
};
export default ExperimentFilters;
