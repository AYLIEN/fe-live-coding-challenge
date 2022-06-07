import { createSlice, Slice } from "@reduxjs/toolkit";

export const searchSlice: Slice<any> = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {

  }
});

export default searchSlice.reducer;