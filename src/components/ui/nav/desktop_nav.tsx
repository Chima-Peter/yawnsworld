// import { useEffect, useState } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

// import { RiShoppingBasketLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";

import icon from '../../../assets/images/logo.svg'
import useNavbarContext from '../../hooks/useNavbarContext';
import SideBar from './slide_in_sidebar';
import { useEffect } from 'react';




const DesktopNav = () => {
    const { navbar, setNavbar } = useNavbarContext()
    const location = useLocation(); // for getting the location

    const isActive = (hash: string) => location.hash === hash; // determining if a nav link matches the current location

//     const [isScrolled, setIsScrolled] = useState(false)

//     // add bg and shadow for nav onscroll event
//    useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0)
//       }
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   });
    
    useEffect(() => {
        setNavbar(false);
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }, [location])

    const openNavbar = () => {
        setNavbar(true)
    }

  return (
    <>
        <nav className={`flex gap-2 justify-between bg-white items-center w-[100%] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-24 py-8 font-main h-fit`}>
            <Link to="/">
                <img src={`${icon}`} alt="YawnsWorld" />
            </Link>
            <ul className='flex gap-4 lg:justify-between px-12 py-3 bg-gray-100 rounded-xl items-center'>
                <NavLink to={'#about'} className={`text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#0D0B0B] hover:bg-[#e8e8e8] px-2 py-1  hover:rounded-2xl ${isActive('#about') ? 'bg-[#e8e8e8] rounded-xl' : 'font-light'}`}>
                    About
                </NavLink>
                <li className=' border-r-[1.4px] border-r-black w-5 h-4' />
                <NavLink to={'#ecosystem'} className={`text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#0D0B0B] hover:bg-[#e8e8e8] px-2 py-1  hover:rounded-2xl ${isActive('#ecosystem') ? 'bg-[#e8e8e8] rounded-xl' : 'font-light'}`}>
                    Ecosystem
                </NavLink>
                <li className=' border-r-[1.4px] border-r-black w-5 h-4' />
                <NavLink to={'#latest'} className={`text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#0D0B0B] hover:bg-[#e8e8e8] px-2 py-1  hover:rounded-2xl ${isActive('#latest') ? 'bg-[#e8e8e8] rounded-xl' : 'font-light'}`}>
                    Latest
                </NavLink>
                <li className=' border-r-[1.4px] border-r-black w-5 h-4' />
                <NavLink to={'#community'} className={`text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#0D0B0B] hover:bg-[#e8e8e8] px-2 py-1  hover:rounded-2xl ${isActive('#community') ? 'bg-[#e8e8e8] rounded-xl' : 'font-light'}`}>
                    Community
                </NavLink>
                <li className=' border-r-[1.4px] border-r-black w-5 h-4' />
                <NavLink to={'#get-yawn'} className={`text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#0D0B0B] hover:bg-[#e8e8e8] px-2 py-1  hover:rounded-2xl ${isActive('#get-yawn') ? 'bg-[#e8e8e8] rounded-xl' : 'font-light'}`}>
                    Get $YAWN
                </NavLink>
                <li className=' border-r-[1.4px] border-r-black w-5 h-4' />
                <Link to={'https://web3.bitget.com/en/docs/dapp/web-dapp.html'} target='_blank' className={`text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#0D0B0B] hover:bg-[#e8e8e8] px-2 py-1  hover:rounded-2xl ${isActive('https://web3.bitget.com/en/docs/dapp/web-dapp.html') ? 'bg-[#e8e8e8] rounded-xl' : 'font-light'}`}>
                    Bitget Wallet
                </Link>
            </ul>
            <div className='flex items-center gap-4 justify-between'>
                {/* <button type="button" className='p-4 bg-gray-100 hover:bg-black group/btn rounded-xl'>
                    <RiShoppingBasketLine className='w-6 h-6 group-hover/btn:text-white' />
                </button> */}
                <button onClick={openNavbar} type="button" className='p-4 bg-gray-100 hover:bg-black group/btn rounded-xl'>
                    <TiThMenu className='w-6 h-6 group-hover/btn:text-white' />
                </button>
            </div>
        </nav>
        <AnimatePresence mode="sync">
            {navbar ? (
                <motion.div
                    key="sidebar"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className='bg-white fixed top-0 w-[100vw] z-50 overflow-hidden min-h-[100vh] '
                >
                    <SideBar />
                </motion.div>
            ) : (
                <motion.div
                    key="empty"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <div />
                </motion.div>
            )}
        </AnimatePresence>

    </>
  )
}

export default DesktopNav