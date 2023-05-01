import React from 'react'
import { isEmpty } from 'lodash'
import MovieCard from './MovieCard'

interface MovieListProps {
    title: string,
    data: Record<string, any>
}
const MoviesList: React.FC<MovieListProps> = ({
    title,
    data
}) => {
    return (
        <div className='px-4 md:px-12 mt-4 space-y-8'>
            <div>
                <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
                    {title}
                </p>
            </div>
            <div className='grid grid-cols-4 gap-2'>
                {data?.map((movie: any, index: number) => (
                    <MovieCard item={movie} key={index} />
                ))}
            </div>

        </div>
    )
}

export default MoviesList