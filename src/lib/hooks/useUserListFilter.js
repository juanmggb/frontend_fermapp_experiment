import { useState } from "react";

export const useUserListFilter = () => {
  const [filters, setFilters] = useState({
    filterBy: 0,
    search: "",
    sortBy: 0,
  });

  const setFilterBy = (newFilterBy) =>
    setFilters((prevFilters) => ({ ...prevFilters, filterBy: newFilterBy }));

  const setSearch = (newSearch) =>
    setFilters((prevFilters) => ({ ...prevFilters, search: newSearch }));

  const setSortBy = (newSortBy) =>
    setFilters((prevFilters) => ({ ...prevFilters, sortBy: newSortBy }));

  return {
    ...filters,
    setFilterBy,
    setSearch,
    setSortBy,
  };
};
