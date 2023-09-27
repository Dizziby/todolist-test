import React from "react";
import { Button } from "antd";
import { FilterType, FilterValuesType } from "../../types";
import styles from "./Filter.module.css";

const filters: FilterType[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

const Filters = ({
  activeFilter,
  changeFilter,
}: {
  activeFilter: any;
  changeFilter: (filter: FilterValuesType) => void;
}) => {
  return (
    <div className={styles.container}>
      {filters.map((filter) => (
        <Button
          type={activeFilter === filter.value ? "primary" : "default"}
          onClick={() => changeFilter(filter.value)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default Filters;
