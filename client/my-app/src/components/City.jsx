
import React from 'react'
import { apiCalls } from '../helperFunctions/apiCalls'
import { useDispatch } from 'react-redux'
import { addCity } from '../redux-components/citySlice'

function City() {

    const dispatch = useDispatch();

    const selectedCity = async (cityName) => {
        const res = await apiCalls("POST", { city: cityName }, "city");
        dispatch(addCity(cityName));
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md">

            <div className="flex h-[40vh] w-full flex-col bg-white/95 px-8 py-5 shadow-xl">

                <div className="mb-4 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
                        TixBook
                    </p>

                    <h1 className="mt-1 text-2xl font-bold text-gray-900">
                        Choose your city
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Discover events happening around you
                    </p>
                </div>

                <div className="mx-auto grid w-full max-w-4xl grid-cols-4 gap-4">

                    <button
                        onClick={() => selectedCity("Pune")}
                        className="group overflow-hidden rounded-xl border border-gray-200 text-left transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Shaniwar_wada_001.jpg?width=400"
                            alt="Shaniwar Wada"
                            className="h-20 w-full object-cover transition group-hover:scale-105"
                        />
                        <div className="p-2 text-center">
                            <h2 className="text-sm font-semibold text-gray-900">Pune</h2>
                            <p className="text-xs text-gray-500">Shaniwar Wada</p>
                        </div>
                    </button>

                    <button
                        onClick={() => selectedCity("Mumbai")}
                        className="group overflow-hidden rounded-xl border border-gray-200 text-left transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Gateway_Of_India.jpg?width=400"
                            alt="Gateway of India"
                            className="h-20 w-full object-cover transition group-hover:scale-105"
                        />
                        <div className="p-2 text-center">
                            <h2 className="text-sm font-semibold text-gray-900">Mumbai</h2>
                            <p className="text-xs text-gray-500">Gateway of India</p>
                        </div>
                    </button>

                    <button
                        onClick={() => selectedCity("Bangalore")}
                        className="group overflow-hidden rounded-xl border border-gray-200 text-left transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Vidhana_Soudha_LE.jpg?width=400"
                            alt="Vidhana Soudha"
                            className="h-20 w-full object-cover transition group-hover:scale-105"
                        />
                        <div className="p-2 text-center">
                            <h2 className="text-sm font-semibold text-gray-900">Bangalore</h2>
                            <p className="text-xs text-gray-500">Vidhana Soudha</p>
                        </div>
                    </button>

                    <button
                        onClick={() => selectedCity("Hyderabad")}
                        className="group overflow-hidden rounded-xl border border-gray-200 text-left transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <img
                            src="https://commons.wikimedia.org/wiki/Special:FilePath/Charminar%20in%20Hyderabad%2C%20India.jpg?width=400"
                            alt="Charminar"
                            className="h-20 w-full object-cover transition group-hover:scale-105"
                        />
                        <div className="p-2 text-center">
                            <h2 className="text-sm font-semibold text-gray-900">Hyderabad</h2>
                            <p className="text-xs text-gray-500">Charminar</p>
                        </div>
                    </button>

                </div>

            </div>
        </div>
    )
}

export default City
