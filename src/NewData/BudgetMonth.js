import React from "react";
import BudgetChart from "./BudgetChart";

const BudgetMonth = (props) => {
  const { month, expenses, income } = props;

  let totalExpenses = 0;
  let totalIncome = 0;

  for (const data of expenses) {
    totalExpenses += parseInt(data.amount);
  }

  for (const data of income) {
    totalIncome += parseInt(data.amount);
  }

  return (
    <div>
      <h2>{month}</h2>
      <BudgetChart totalExpenses={totalExpenses} totalIncome={totalIncome} />
    </div>
  );
};

export default BudgetMonth;