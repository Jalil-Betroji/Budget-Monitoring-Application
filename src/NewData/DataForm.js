import React, { useState } from "react";
import "./Form.css";

const DataForm = (props) => {

  const initialOptions = [
    { value: "Shopping", label: "Shopping" },
    { value: "Transaport", label: "Transoprt" },
    { value: "Life porpus", label: "Life porpus" },
  ];
  const [options, setOptions] = useState(initialOptions);
  const [selectedOption, setSelectedOption] = useState(initialOptions[0].value);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (inputValue.trim() !== "") {
      setOptions([...options, { value: inputValue, label: inputValue }]);
      setSelectedOption(inputValue);
      setInputValue("");
      setIsEditing(false);
    }
  };

  const handleCancelClick = () => {
    setInputValue("");
    setIsEditing(false);
  };

  const initialType = [
    { value: "Expense", label: "Expense" },
    { value: "Income", label: "Income" }
  ];
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredType, setEnteredType] = useState(initialType[0].value);

  const enteredTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const enteredDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const enteredDescriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  };
  const enteredAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const enteredTypeHandler = (event) => {
    setEnteredType(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const budgetData = {
      title: enteredTitle,
      type: enteredType,
      category: selectedOption,
      date: new Date(enteredDate),
      description: enteredDescription,
      amount: enteredAmount,
    };
    console.log(budgetData);
    props.onSaveNewData(budgetData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredDescription("");
    setEnteredAmount("");
    setEnteredType("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-data__controler">
        <div className="new-data__controled">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={enteredTitleHandler}
          />
        </div>
        <div className="new-data__controled">
          <label>Type</label>
          <select value={enteredType} onChange={enteredTypeHandler}>
            {initialType.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="new-data__controled">
          <label>Category</label>
          <select value={selectedOption} onChange={handleOptionSelect}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {isEditing ? (
            <>
              <input
                style={{ width: "10rem" }}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            <button onClick={handleEditClick}>Add New Category</button>
          )}
        </div>

        <div className="new-data__controled">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={enteredDateHandler}
          />
        </div>
        <div className="new-data__controled">
          <label htmlFor="message">Description:</label>
          <textarea
            name="description"
            rows="3"
            value={enteredDescription}
            onChange={enteredDescriptionHandler}
          />
        </div>
        <div className="new-data__controled">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={enteredAmountHandler}
          />
        </div>
      </div>
      <button className="add-new-second-button">Add New</button>
    </form>
  );
};

export default DataForm;