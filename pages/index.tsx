import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'

import useCurrentUser from '@/hooks/useCurrentUser';
import checkLogin from '@/utils/checkLogin';

export async function getServerSideProps(context: NextPageContext) {
  return checkLogin(context);
}


export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <h1 className="text-4xl text-green-600">Netflix Clone</h1>
      <p className='text-white'>{user?.name}</p>
      <button className='h-10 w-full bg-white' onClick={() => signOut()}>Log Out</button>
    </>
  )
}
