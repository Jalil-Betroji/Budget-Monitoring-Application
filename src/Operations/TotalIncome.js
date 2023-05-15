import { useState , useEffect } from 'react';
import './TotalIncome.css';

const TotalIncome = (props) => {
  const [incomeCounter, setIncomeCounter] = useState("");
  useEffect(() => {
    let totalIncome = 0;

  for (const data of props.budgets)  {
    console.log(data.type)
      if (data.type === "Income") {
        totalIncome += parseInt(data.amount);
      } 
    };
    setIncomeCounter(totalIncome);
});
    return (
        <div className="total-income">
            <h2>Total Income</h2>
            <h3>+ ${incomeCounter}</h3>
        </div>
    )
};
export default TotalIncome;