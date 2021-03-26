import { createSlice } from '@reduxjs/toolkit';
import quotesData from './data';

const quoteSlice = createSlice({
  name: 'quote',
  initialState: { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  reducers: {
    newQuote: (state, action) => {
      const randomNumber = Math.floor(Math.random() * quotesData.length);
      return quotesData[randomNumber];
    }
  }
});

export const selectQuote = state => state.quote;

export const { newQuote } = quoteSlice.actions;
export default quoteSlice.reducer;