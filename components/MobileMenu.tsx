import React from 'react'
import NavItems from './NavItems'
import { mainNavMenu } from '@/utils/navMenus'
interface MobileMenuProps {
    visible: boolean
}
const MobileMenu: React.FC<MobileMenuProps> = ({
    visible
}) => {
    if (!visible) {
        return null
    }
    return (
        <div className='bg-black text-white absolute top-8 left-0 z-10 w-56 py-5 px-4 border-2 border-gray-800 animate-zoom-in'>
            <div className='flex flex-col gap-4'>
                {mainNavMenu.map((menu, index) => (
                    <NavItems item={menu} key={index} />
                ))}
            </div>
        </div>
    )
}

export default MobileMenu