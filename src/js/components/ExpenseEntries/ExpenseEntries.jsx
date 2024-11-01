import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllExpenses,
  addExpense,
  removeExpense,
} from "./expensesSlice.js";

export default function ExpenseEntries() {
  const dispatch = useDispatch();
  const expenses = useSelector(selectAllExpenses);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onAmountChange = (e) => setAmount(e.target.value);

  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const onAdd = () => {
    if (description && parseInt(amount)) {
      dispatch(addExpense(description, amount));
      setDescription("");
      setAmount("");
    }
  };

  const onDelete = (id) => {
    dispatch(removeExpense(id));
  };

  const renderedExpenses = expenses.map((expense) => (
    <tr>
      <td>{expense.description}</td>
      <td>{USDollar.format(expense.amount)}</td>
      <td className="text-end">
        <i
          onClick={() => onDelete(expense.id)}
          class="fa-solid fa-x"
        ></i>
      </td>
    </tr>
  ));

  return (
    <div className="card mb-3">
      <div className="card-header bg-danger-subtle">Expense Entries</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="expense-description">Description</label>
            <input
              type="text"
              className="form-control"
              id="expense-description"
              value={description}
              onChange={onDescriptionChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expense-amount">Amount</label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                id="expense-amount"
                value={amount}
                onChange={onAmountChange}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center my-2">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={onAdd}
            >
              + Add Expense
            </button>
          </div>
          <table className="table table-sm table-hover">
            <thead>
              <tr>
                <th>Description</th>
                <th style={{ width: 120 }}>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {renderedExpenses}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
