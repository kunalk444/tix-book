import React from 'react'
import { apiCalls } from '../helperFunctions/apiCalls'
import {useDispatch} from 'react-redux';
import { addCity } from '../redux-components/citySlice';

function City() {

    const dispatch = useDispatch();
    const selectedCity = async(cityName) =>{

        const res = await apiCalls("POST", {cityName} , "city");
        dispatch(addCity(cityName));

    }

    return (

        <>

            <button onClick={() => selectedCity("Pune")}>Pune</button>
            <button onClick={() => selectedCity("Mumbai")}>Mumbai</button>
            <button onClick={() => selectedCity("Bangalore")}>Bangalore</button>
            <button onClick={() => selectedCity("Hyderabad")}>Hyderabad</button>



        </>

    )
}

export default City