import React, { useState } from "react";
import "./App.css";
import Operations from "./Operations/Operations";
import CallingForm from "./NewData/CallingForm";
import BudgetData from "./NewData/BudgetData";
import TotalExpenses from "./Operations/TotalExpenses";
const initial_Data = [
  {
    id: 1,
    date: new Date(2023, 3, 26),
    title: "New Laptop",
    description: "i bought a grey huawei laptop for learning purpos",
    type: "Expense",
    category: "shopping",
    amount: 360,
  },
  {
    id: "2",
    date: new Date(2023, 2, 10),
    title: "Iphone 11",
    description: "i bought an iphone 11 as a gift to my sister",
    type: "Expense",
    category: "shopping",
    amount: 470,
  },
  {
    id: "3",
    date: new Date(2023, 4, 19),
    title: "Trotine",
    description: "i bought a trotine to make some visit to near places",
    type: "Expense",
    category: "shopping",
    amount: 250,
  },
  {
    id: "4",
    date: new Date(2023, 2, 20),
    title: "New shoes",
    description: "i bought a grey new shoes to have a professional meeting",
    type: "Expense",
    category: "shopping",
    amount: 45
  },
  {
    id: "5",
    date: new Date(2023, 1, 25),
    title: "Sold iphone 13",
    description: "i Sold an iphone 13 using facebook ads",
    type: "Income",
    category: "e-commerce",
    amount: 1200
  },
];

function App() {
  const [budgets, setBudgets] = useState(initial_Data);
  const addDataHandler = (newBudget) => {
    setBudgets((prevBudgetData) => {
      return [newBudget, ...prevBudgetData];
    });
  };
  return (
    <div>
      <Operations budgets={budgets}/>
      <CallingForm onAddData={addDataHandler} />
      <BudgetData items={budgets} />
    </div>
  );
}

export default App;
