import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

const citySlice = createSlice({

    name : 'citySlice',
    initialState:{
        city : Cookies.get('city')
    },
    reducers:{

        addCity:(state , action)=>{
            state.city = action.payload;
        }
    }

});

export default citySlice.reducer;
export const {addCity} = citySlice.actions;