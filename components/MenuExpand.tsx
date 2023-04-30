import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'

interface MenuExpandProps {
    expand: boolean
}

const MenuExpand: React.FC<MenuExpandProps> = ({
    expand
}) => {
    return (
        <AiOutlineDown className={`text-white text-sm
                    ${expand ? '-rotate-180' : 'rotate-0'}
                    transition
                    duration-200
                `} />
    )
}

export default MenuExpand