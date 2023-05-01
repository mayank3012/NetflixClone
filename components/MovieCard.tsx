import React from 'react'
import { BsFillPlayFill, BsPlusLg } from 'react-icons/bs'
import { RiArrowDownSLine } from 'react-icons/ri'

interface MovieCardProps {
    item: Record<string, any>
}
const MovieCard: React.FC<MovieCardProps> = ({
    item
}) => {
    return (
        <div className='group bg-zinc-900 col-span relative h-[12vw]'>
            <img className='
                cursor-pointer
                object-cover
                shadow-xl
                transition
                duration
                rounded-md
                delay-300
                w-full
                h-[12vw]
                group-hover:opacity-90
                sm:group-hover:opacity-0
            ' src={item.thumbnailUrl} />
            <div
                className='
                opacity-0
                absolute
                top-0
                transition
                duration-200
                z-10
                invisible
                sm:visible
                delay-300
                w-full
                scale-0
                group-hover:scale-110
                group-hover:translate-y-[6vw]
                group-hover:translate-x-[2vw]
                group-hover:opacity-100
            '>
                <img
                    src={item.thumbnailUrl}
                    className='cursor-pointer
                object-cover
                rounded-t-md
                transition
                duration
                shadow-xl
                w-full
                h-[12vw];
                '/>
                <div className="
                z-10
                bg-zinc-800
                p-3
                lg:p-4
                absolute
                w-full
                transition
                shadow-md
                rounded-b-md
                ">
                    <div className='flex gap-2'>
                        <div className='
                        rounded-full
                        bg-white
                        h-8
                        w-8
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                        hover:bg-opacity-70
                        transition
                        duration-200
                        '>
                            <BsFillPlayFill size={20} />
                        </div>
                        <div className='
                        rounded-full
                        text-white
                        border-white
                        border-2
                        h-8
                        w-8
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                        hover:bg-opacity-70
                        transition
                        duration-200
                        '>
                            <BsPlusLg size={20} />
                        </div>
                        <div className='
                        rounded-full
                        text-white
                        border-white
                        border-2
                        h-8
                        w-8
                        flex
                        justify-center
                        items-center
                        cursor-pointer
                        hover:bg-opacity-70
                        transition
                        duration-200
                        ml-auto
                        '>
                            <RiArrowDownSLine size={20} />
                        </div>
                    </div>
                    <div className='text-green-500 text-md flex pt-2 gap-2'>
                        New
                        <span className="text-white font-semibold ">2023</span>
                    </div>
                    <div className='text-sm text-white pt-2'>
                        {item.duration}
                    </div>
                    <div className='text-sm text-white pt-2'>
                        {item.genre}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard