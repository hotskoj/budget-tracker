import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './components/ExpenseEntries/expensesSlice.js'
import incomeReducer from './components/IncomeEntries/incomeSlice.js'

const store = configureStore({
    reducer: {
        expenses: expensesReducer,
        income: incomeReducer
    }
});

export default store;