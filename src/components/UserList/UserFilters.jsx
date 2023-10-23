import { Form } from "react-bootstrap";
import style from "./UserFilters.module.css";
import { useUserListFilter } from "../../lib/hooks/useUserListFilter";

const UserFilters = () => {
  const { filterBy, search, sortBy, setFilterBy, setSearch, setSortBy } =
    useUserListFilter();

  return (
    <Form className={style.form}>
      <Form.Group className={style.formGroup} controlId="filterBy">
        <Form.Label>Filter table by</Form.Label>
        <Form.Control
          as="select"
          value={filterBy}
          onChange={(e) => setFilterBy(Number(e.target.value))}
        >
          <option value="0">name</option>
          <option value="1">username</option>
          <option value="3">role</option>
          <option value="4">is staff</option>
          <option value="5">laboratory</option>
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
          <option value="0">name</option>
          <option value="1">username</option>
          <option value="3">role</option>
          <option value="4">is staff</option>
          <option value="5">laboratory</option>
        </Form.Control>
      </Form.Group>

      <div className={style.btnWrapper}>
        <button className={style.btnPrimary}>Search users</button>
      </div>
    </Form>
  );
};
export default UserFilters;
