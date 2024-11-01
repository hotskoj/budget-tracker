import React from "react";
import { useSelector} from "react-redux";
import { selectAllIncome } from "../IncomeEntries/incomeSlice.js";
import { selectAllExpenses } from "../ExpenseEntries/expensesSlice.js"


export default function Summary() {
  const expenses = useSelector(selectAllExpenses);
  const income = useSelector(selectAllIncome);

  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const incomeTotal = income.reduce((a, b) => a + b.amount, 0);
  const expensesTotal = expenses.reduce((a, b) => a + b.amount, 0);

  return (
    <div className="card mb-3">
      <div className="card-header">Summary</div>
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-6 text-center">
              <h6 className="h6 strong">Total Income</h6>
              <p>{USDollar.format(incomeTotal)}</p>
            </div>
            <div className="col-6 text-center">
              <h6 className="h6 strong">Total Expenses</h6>
              <p>{USDollar.format(expensesTotal)}</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 text-center">
              <h6 className="h6 strong">Left after spending</h6>
              <p>{USDollar.format(incomeTotal - expensesTotal)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
