import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from '../features/quote/quoteSlice';
import colorReducer from '../features/color/colorSlice'

export default configureStore({
  reducer: {
    quote: quoteReducer,
    color: colorReducer
  },
});
