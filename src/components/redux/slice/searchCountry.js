import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    changeInput: '',
    notFounded: false
}

const searchCountry = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setChangeInput(state, action) {
            state.changeInput = action.payload
            state.notFounded = false;
        },
        setFounded(state, action) {
            state.notFounded = action.payload;
        },
    },
})

export const inputSelect = (state) => state.searchCountry;

export const { setChangeInput, setFounded } = searchCountry.actions;

export default searchCountry.reducer;