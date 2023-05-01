import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'

import checkLogin from '@/utils/checkLogin';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MoviesList from '@/components/MoviesList';
import useMovies from '@/hooks/useMovies';

export async function getServerSideProps(context: NextPageContext) {
  return checkLogin(context);
}


export default function Home() {
  const { data: movies } = useMovies();
  return (
    <>
      <Navbar />
      <Billboard />
      <MoviesList title={'Trending Now'} data={movies} />
      <div className='h-[1000px]'></div>
    </>
  )
}
