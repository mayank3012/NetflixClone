import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'

import useCurrentUser from '@/hooks/useCurrentUser';
import checkLogin from '@/utils/checkLogin';
import Navbar from '@/components/Navbar';

export async function getServerSideProps(context: NextPageContext) {
  return checkLogin(context);
}


export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <Navbar />
    </>
  )
}
