import React from "react";
import IncomeEntries from "./components/IncomeEntries/IncomeEntries.jsx";
import ExpenseEntries from "./components/ExpenseEntries/ExpenseEntries.jsx";
import Summary from "./components/Summary/Summary.jsx";

export default function App() {
  return (
    <div className="container">
      <h1 className="display-3 text-center p-5">Budget Tracker</h1>
      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <IncomeEntries />
        </div>
        <div className="col-12 col-md-6 mb-4">
          <ExpenseEntries />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <Summary />
        </div>
      </div>
    </div>
  );
}
