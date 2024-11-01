import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    income: [],
};

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    addIncome: {
      reducer(state, action) {
        state.income.push(action.payload);
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
    removeIncome: {
        reducer(state, action) {
            state.income = state.income.filter(item => item.id !== action.payload.id);
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

export const selectAllIncome = (state) => state.income.income;

export const { addIncome, removeIncome } = incomeSlice.actions;

export default incomeSlice.reducer;