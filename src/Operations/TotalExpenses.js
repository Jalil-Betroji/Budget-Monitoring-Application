import { useState, useEffect } from "react";
import "./TotalExpenses.css";

const TotalExpenses = (props) => {
  const [expenseCounter, setExpenseCounter] = useState("");

  useEffect(() => {
    let totalExpense = 0;
  console.log(props.budgets)
  for (const data of props.budgets)  {
    console.log(data.type)
      if (data.type === "Expense") {
        totalExpense += parseInt(data.amount);
      }
    };
    setExpenseCounter(totalExpense);
});
  return (
    <div className="total-expenses">
        <h2>Total Expense</h2>
        <h3>- ${expenseCounter}</h3>
    </div>
  )
};
export default TotalExpenses;
