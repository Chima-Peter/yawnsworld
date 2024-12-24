// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { RiShoppingBasketLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";

import icon from '../../../assets/images/logo.svg'



const MobileNav = () => {


//     const [isScrolled, setIsScrolled] = useState(false)

//     // add bg and shadow for nav onscroll event
//    useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0)
//       }
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   });

  return (
    <nav className={`flex gap-2 justify-between bg-white items-center z-20 w-[100%] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-24 py-8 font-main h-fit`}>
        <Link to="/">
            <img src={`${icon}`} alt="YawnsWorld" />
        </Link>
        <div className='flex items-center gap-2 xs:gap-4 justify-between'>
            <button type="button" className='p-3 xs:p-4 bg-gray-100 hover:bg-black group/btn rounded-xl'>
                <RiShoppingBasketLine className='w-4 h-4 xs:w-6 xs:h-6 group-hover/btn:text-white' />
            </button>
            <button type="button" className='p-3 xs:p-4 bg-gray-100 hover:bg-black group/btn rounded-xl'>
                <TiThMenu className='w-4 h-4 xs:w-6 xs:h-6 group-hover/btn:text-white' />
            </button>
        </div>
    </nav>
  )
}

export default MobileNav