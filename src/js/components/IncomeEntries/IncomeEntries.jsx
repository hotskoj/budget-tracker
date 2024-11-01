import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllIncome, addIncome, removeIncome } from "./incomeSlice.js";

export default function IncomeEntries() {
  const dispatch = useDispatch();
  const income = useSelector(selectAllIncome);
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
      dispatch(addIncome(description, amount));
      setDescription("");
      setAmount("");
    }
  };

  const onDelete = (id) => {
    dispatch(removeIncome(id));
  };

  const renderedIncome = income.map((item) => (
    <tr>
      <td>{item.description}</td>
      <td>{USDollar.format(item.amount)}</td>
      <td className="text-end">
        <i onClick={() => onDelete(item.id)} class="fa-solid fa-x"></i>
      </td>
    </tr>
  ));

  return (
    <div className="card mb-3">
      <div className="card-header bg-success-subtle">Income Entries</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="income-description">Description</label>
            <input
              type="text"
              className="form-control"
              id="income-description"
              value={description}
              onChange={onDescriptionChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="income-amount">Amount</label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                id="income-amount"
                value={amount}
                onChange={onAmountChange}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center my-2">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={onAdd}
            >
              + Add Income
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
            <tbody>{renderedIncome}</tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
