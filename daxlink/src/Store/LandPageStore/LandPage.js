import { createSlice } from "@reduxjs/toolkit"

export const LandPageSlice = createSlice({
    name: "LPModal",
    initialState: { value: {ModalState: true} },
    reducers: {
        ModalClick: (state, action)=>{
            state.value = action.payload;
        }
    },
})

export default LandPageSlice.reducer
