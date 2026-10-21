import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({

    name : 'citySlice',
    initialState:{
        city : document.cookie.city
    },
    reducers:{

        addCity:(state , action)=>{
            state.city = action.payload;
        }
    }

});

export default citySlice.reducer;
export const {addCity} = citySlice.actions;