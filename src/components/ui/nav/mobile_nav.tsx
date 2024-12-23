// import { useState, useEffect } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

import icon from '../../../assets/images/logo.svg'
import { RiShoppingBasketLine } from 'react-icons/ri'
import { TiThMenu } from 'react-icons/ti'

const MobileNav = () => {
    // const [isScrolled, setIsScrolled] = useState(false)

    // // add bg and shadow for nav onscroll event
    // useEffect(() => {
    //     const handleScroll = () => {
    //     setIsScrolled(window.scrollY > 0)
    //     }
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // });
  
    return (
        <nav className={`flex gap-2 justify-between bg-white items-center z-20 w-[100%] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 py-8 font-main`}>
            <Link to="/">
                <img src={`${icon}`} alt="YawnsWorld" />
            </Link>
            <ul className='flex gap-4 lg:justify-between px-12 py-4 bg-gray-100 rounded-xl items-center'>
                <NavLink to={'#about'} className={`text-[18px] xl:text-[20px] 2xl:text-[22px] text-[#0D0B0B] hover:bg-[#e8e8e8] px-2 py-1  hover:rounded-2xl`}>
                    About
                </NavLink>
                <li className=' border-r-[1.4px] border-r-black w-5 h-4' />
                <NavLink to={'#about'} className={`text-[18px] xl:text-[20px] 2xl:text-[22px] text-[#0D0B0B] hover:bg-[#e8e8e8] px-2 py-1  hover:rounded-2xl`}>
                    Ecosystem
                </NavLink>
                <li className=' border-r-[1.4px] border-r-black w-5 h-4' />
                <NavLink to={'#trainers'} className={`text-[18px] xl:text-[20px] 2xl:text-[22px] text-[#0D0B0B] hover:bg-[#e8e8e8] px-2 py-1  hover:rounded-2xl`}>
                    Latest
                </NavLink>
                <li className=' border-r-[1.4px] border-r-black w-5 h-4' />
                <NavLink to={'#plans'} className={`text-[18px] xl:text-[20px] 2xl:text-[22px] text-[#0D0B0B] hover:bg-[#e8e8e8] px-2 py-1  hover:rounded-2xl`}>
                    Community
                </NavLink>
                <li className=' border-r-[1.4px] border-r-black w-5 h-4' />
                <NavLink to={'#reviews'} className={`text-[18px] xl:text-[20px] 2xl:text-[22px] text-[#0D0B0B] hover:bg-[#e8e8e8] px-2 py-1  hover:rounded-2xl`}>
                    Get $YAWN
                </NavLink>
                <li className=' border-r-[1.4px] border-r-black w-5 h-4' />
                <NavLink to={'#reviews'} className={`text-[18px] xl:text-[20px] 2xl:text-[22px] text-[#0D0B0B] hover:bg-[#e8e8e8] px-2 py-1  hover:rounded-2xl`}>
                    Bitget Wallet
                </NavLink>
            </ul>
            <div className='flex items-center gap-4 justify-between'>
                <button type="button" className='p-5 bg-gray-100 hover:bg-black group/btn rounded-xl'>
                    <RiShoppingBasketLine className='w-6 h-6 group-hover/btn:text-white' />
                </button>
                <button type="button" className='p-5 bg-gray-100 hover:bg-black group/btn rounded-xl'>
                    <TiThMenu className='w-6 h-6 group-hover/btn:text-white' />
                </button>
            </div>
        </nav>
    )
}

export default MobileNav