import React from "react";
import './Operations.css';
import Total from "./Total";
import TotalExpenses from "./TotalExpenses";
import TotalIncome from "./TotalIncome";

const Operations = (props) => {
    return (
        <div className="operation-flex">
          <Total budgets={props.budgets}/>
          {console.log(props.budgets)}
          <TotalExpenses budgets={props.budgets}/>
          <TotalIncome budgets={props.budgets}/>
        </div>
    )
};
export default Operations;