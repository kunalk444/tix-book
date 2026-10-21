import React, { useState } from 'react'
import City from './City';
import { useSelector } from 'react-redux';

function Home() {

  const city = useSelector(state => state.citySlice.city); 

  console.log(city);
  
  return (
    <>
        {
            city == null ? <City /> : null
            
        }
    </>
  )
}

export default Home