import './Total.css';
import { useState , useEffect } from 'react';

const Total = (props) => {
  const [totalCounter, setTotalCounter] = useState("");
  useEffect(() => {
    let totalBudget = 0;

  for (const data of props.budgets)  {  
        totalBudget += parseInt(data.amount);    
    };
    setTotalCounter(totalBudget);
});
    return (
        <div className="total">
            <h2>Total Budget</h2>
            <h3>${totalCounter}</h3>
        </div>
    )
};
export default Total;