import { useState } from "react";

export const useExperimentListFilter = () => {
  const [filters, setFilters] = useState({
    filterBy: 0,
    search: "",
    sortBy: 0,
    initialDate: "",
    finalDate: "",
  });

  const setFilterBy = (newFilterBy) =>
    setFilters((prevFilters) => ({ ...prevFilters, filterBy: newFilterBy }));

  const setSearch = (newSearch) =>
    setFilters((prevFilters) => ({ ...prevFilters, search: newSearch }));

  const setSortBy = (newSortBy) =>
    setFilters((prevFilters) => ({ ...prevFilters, sortBy: newSortBy }));

  const setDate = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    ...filters,
    setFilterBy,
    setSearch,
    setSortBy,
    setDate,
  };
};
