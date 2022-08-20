import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  code: null,
}
const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setInfo(state, action) {
        state.code = action.payload;
        // console.log(action.payload);
    },
  },
})

export const infoSelect = (state) => state.info;

export const { setInfo } = infoSlice.actions;

export default infoSlice.reducer;