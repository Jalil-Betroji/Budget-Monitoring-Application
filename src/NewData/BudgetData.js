import React, { useState } from "react";
import Card from "./Card";
import FilteredBudget from "./FilteredBudget";
import DataList from "./DataList";
import BudgetChart from "./BudgetChart";

const BudgetData = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((budget) => {
    return budget.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card>
        <FilteredBudget
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <BudgetChart budgets={filteredExpenses} />
        <DataList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default BudgetData;