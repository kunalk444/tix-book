import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice.js"
import Cookies from 'js-cookie';


const persistedState = localStorage.getItem("reduxState");

export const store = configureStore({
    reducer:{
        citySlice : cityReducer
    },

    preloadedState: persistedState ? JSON.parse(persistedState) : undefined

});


const persistedStore = {
    citySlice : {
        city : Cookies.get('city') 
    }
} 
store.subscribe(()=> localStorage.setItem("reduxState" , JSON.stringify(persistedStore) ) );
console.log(persistedStore)