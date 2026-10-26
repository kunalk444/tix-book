import React, { useEffect, useState } from 'react'
import { apiCalls } from '../helperFunctions/apiCalls';

function Movies() {

    const [movies , setMovies] = useState(null);

    useEffect(()=>{

        (async()=>{

            const res = await apiCalls("GET" , null , "movies");
            setMovies(res);



        })();

    } , [])
    return (
    <div className="w-full px-6 py-8">
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {movies?.map((movie, index) => (
                <div
                    key={index}
                    className="min-w-[180px] w-[180px] shrink-0 snap-start overflow-hidden rounded-xl bg-gray-900 shadow-lg transition-transform hover:scale-105"
                >
                    <img
                        src={movie.posterUrl}
                        alt={movie.movieName}
                        className="h-[250px] w-full object-cover"
                    />

                    <h3 className="px-3 py-3 text-center text-sm font-semibold text-white">
                        {movie.movieName}
                    </h3>
                </div>
            ))}
        </div>
    </div>
)
}

export default Movies