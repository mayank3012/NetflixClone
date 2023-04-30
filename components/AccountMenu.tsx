import React from 'react'
import { useRouter } from 'next/router'
import useCurrentUser from '@/hooks/useCurrentUser'
import { signOut } from 'next-auth/react'

interface AccountMenuProps {
    visible: boolean
}
const AccountMenu: React.FC<AccountMenuProps> = ({
    visible
}) => {
    if (!visible) {
        return null
    }

    const router = useRouter();
    const { data: user } = useCurrentUser();
    return (
        <div className='bg-black text-white absolute top-8 right-0 z-10 w-56 py-5 px-4 border-2 border-gray-800 animate-zoom-in'>
            <div className='flex flex-col gap-4 justify-center'>
                <div onClick={() => router.push('/profiles')} className='flex gap-3 group'>
                    <img src='images/default-blue.png' className='w-8 group-hover:scale-105 transition' alt='default-image' />
                    <p className='capitalize group-hover:text-gray-400 transition'>
                        {user.name}
                    </p>
                </div>
                <div onClick={() => signOut()}>
                    <p className='capitalize group-hover:text-gray-400 transition'>
                        Log Out
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AccountMenu