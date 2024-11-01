import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    expenses: [],
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: {
      reducer(state, action) {
        state.expenses.push(action.payload);
      },
      prepare(description, amount){
        return {
            payload: {
                id: nanoid(),
                description: description,
                amount: parseInt(amount)
            }
        }
      }
    },
    removeExpense: {
        reducer(state, action) {
            state.expenses = state.expenses.filter(item => item.id !== action.payload.id);
        },
        prepare(id){
            return {
                payload: {
                    id
                }
            }
        }
    }
  },
});

export const selectAllExpenses = (state) => state.expenses.expenses;

export const { addExpense, removeExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
