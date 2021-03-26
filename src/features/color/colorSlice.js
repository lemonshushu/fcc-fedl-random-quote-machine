import { createSlice } from "@reduxjs/toolkit";

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colorSlice = createSlice({
  name: 'color',
  initialState: '#14a085',
  reducers: {
    newColor: (state, action) => {
      return getRandomColor();
    }
  }
});

export const {newColor} = colorSlice.actions;
export default colorSlice.reducer;

export const selectColor = state => state.color;