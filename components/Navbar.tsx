import MobileMenu from "./MobileMenu"
import NavItems from "./NavItems"
import { AiOutlineDown } from 'react-icons/ai'
import { BsSearch, BsBell } from 'react-icons/bs'
import { useState, useEffect, useCallback } from 'react';
import { mainNavMenu } from "@/utils/navMenus";
import MenuExpand from "./MenuExpand";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);

    const toggleMobileView = useCallback(() => {
        setShowMobileMenu(current => !current);
        setShowAccountMenu(false);
    }, [])

    const toggleAccountView = useCallback(() => {
        setShowAccountMenu(current => !current);
        setShowMobileMenu(false);
    }, [])

    return (
        <nav className="h-16 w-full items-center py-6 px-4 md:px-10 opacity-90 fixed flex flex-row z-10 bg-black gap-8">
            <div>
                <img src="/images/logo.png" className="h-4 md:h-7" alt="logo" />
            </div>
            <div className="text-white hidden lg:flex ml-8 gap-7">
                {mainNavMenu.map((menu, index) => (
                    <NavItems item={menu} key={index} />
                ))}
            </div>
            <div
                onClick={toggleMobileView}
                className="lg:hidden gto flex items-center gap-2 ml-8 cursor-pointer relative">
                <div className="group flex items-center gap-1">
                    <p className="text-white  text-sm
                ">Browse</p>
                    <MenuExpand expand={showMobileMenu} />
                </div>
                <MobileMenu visible={showMobileMenu} />
            </div>
            <div className="flex flex-row ml-auto gap-7 items-center">
                <div className="text-white hover:text-gray-400 cursor-pointer transition">
                    <BsSearch />
                </div>
                <div className="text-white hover:text-gray-400 cursor-pointer transition">
                    <BsBell />
                </div>
                <div
                    onClick={toggleAccountView}
                    className="flex flex-row items-center cursor-pointer gap-2 relative">
                    <div className="w-6 h-6 rounded-md lg:w-10 lg:h-10 overflow-hidden">
                        <img src="/images/default-blue.png" alt="default Image" />
                    </div>
                    <MenuExpand expand={showAccountMenu} />
                    <AccountMenu visible={showAccountMenu} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar