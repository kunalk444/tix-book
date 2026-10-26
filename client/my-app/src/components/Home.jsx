import React, { useState } from 'react'
import City from './City';
import { useSelector } from 'react-redux';
import Movies from './Movies';

function Home() {

  const city = useSelector(state => state.citySlice.city); 

  console.log(city);
  
  return (
    <>
        {
            city == null ? <City /> : null
            
        }
        <Movies />
    </>
  )
}

export default Home