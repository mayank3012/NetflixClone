import useBillboard from '@/hooks/useBillboard'
import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'

const Billboard = () => {
    const { data: video } = useBillboard();
    return (
        <div className='relative h-[60vh] short:h-[85vh] xshort:h-[100vh] '>
            <video
                autoPlay
                muted
                loop
                src={video?.videoUrl}
                poster={video?.thumbnailUrl}
                className='h-[60vh] w-full object-cover short:h-[85vh] xshort:h-[100vh] brightness-[60%]'
            />
            <div className='absolute top-[35%] left-[10%] text-white max-w-[60%] flex flex-col gap-6'>
                <h1 className='text-4xl line-clamp-2 py-1'>
                    {video?.title}
                </h1>
                <p className='text-lg line-clamp-4' >
                    {video?.description}
                </p>
                <button className='bg-white bg-opacity-30 w-32 px-2 py-1 text-md hover:bg-opacity-20 transition duration-200 flex justify-center items-center gap-1'>
                    Learn More
                    <BsInfoCircle />
                </button>
            </div>
        </div>
    )
}

export default Billboard