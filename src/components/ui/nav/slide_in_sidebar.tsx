import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'

import { CgClose } from "react-icons/cg";
import { GoArrowRight } from 'react-icons/go';

import icon from '../../../assets/images/logo.svg'
import slide1 from '../../../assets/images/home_page/tg-icon.webp'
import slide2 from '../../../assets/images/home_page/tw-icon.webp'
import useNavbarContext from '../../hooks/useNavbarContext';


const SideBar = () => {
    const { setNavbar } = useNavbarContext()
    const links = [
        'about', 'ecosystem', 'latest', 'community'
    ]

    const closeNavbar = () => {
        setNavbar(false)
    }
  return (
    <AnimatePresence mode='wait'>
        <motion.section 
            className="bg-white fixed top-0 w-[100vw] z-50 overflow-hidden min-h-[100vh] px-4 sm:px-6 lg:px-12 xl:px-14 2xl:px-24 py-8 font-main flex flex-col gap-16"
            >
            <div className='w-[100%] flex justify-between'>
                <Link to="/">
                    <img src={`${icon}`} alt="YawnsWorld" />
                </Link>
                <button onClick={closeNavbar} className='p-3 bg-gray-100 rounded-lg'>
                    <CgClose className='w-6 h-6' />
                </button>
            </div>
            <section className='flex w-[100%] min-lg:w-[70%] 2xl:w-[50%] flex-col gap-24 sm:gap-0 sm:flex-row sm:justify-between sm:items-end'>
                <ul className='flex flex-col gap-2'>
                    {
                    links.map((link) => (
                        <li key={link} className='flex gap-0 items-center group/parent'>
                        <GoArrowRight className='text-black w-5 h-5' />
                        <HashLink to={`#${link}`} className='font-light text-[16px] md:text-[18px] min-lg:text-[22px] xl:text-[24px] 2xl:text-[26px] group-hover/parent:bg-gray-200 rounded-2xl px-3 py-1 capitalize'>
                            {link}
                        </HashLink>
                        </li>
                    ))
                    }
                    <li className='flex gap-0 items-center group/parent'>
                    <GoArrowRight className='text-black w-5 h-5' />
                    <HashLink to={'#get-yawn'} className='font-light  text-[16px] md:text-[18px] min-lg:text-[22px] xl:text-[24px] 2xl:text-[26px] group-hover/parent:bg-gray-200 rounded-2xl px-3 py-1'>
                        Get $YAWN
                    </HashLink>
                    </li>
                    <li className='flex gap-0 items-center group/parent'>
                    <GoArrowRight className='text-black w-5 h-5' />
                    <Link to={``} className='font-light  text-[16px] md:text-[18px] min-lg:text-[22px] xl:text-[24px] 2xl:text-[26px] group-hover/parent:bg-gray-200 rounded-2xl px-3 py-1'>
                        Terms of Use
                    </Link>
                    </li>
                    <li className='flex gap-0 items-center group/parent'>
                    <GoArrowRight className='text-black w-5 h-5' />
                    <Link to={``} className='font-light  text-[16px] md:text-[18px] min-lg:text-[22px] xl:text-[24px] 2xl:text-[26px] group-hover/parent:bg-gray-200 rounded-2xl px-3 py-1'>
                        Privacy Policy
                    </Link>
                    </li>
                </ul>
                <div className='flex gap-0 sm:gap-6 sm:static justify-between sm:justify-normal w-[100%] sm:w-fit px-2 pb-20'>
                    <Link 
                        to={'https://t.me/yawnsworld'} 
                        target='_blank'
                        className='outline-none w-[45%] sm:w-[150px]'>
                        <img src={slide1} alt="Slide Icon" className='w-[100%]' />
                    </Link>
                    <Link 
                        to={'https://x.com/yawnsworld'} 
                        target='_blank'
                        className='outline-none w-[45%] sm:w-[150px]'>
                        <img src={slide2} alt="Slide Icon" className='w-[100%]' />
                    </Link>
                </div>
            </section>
        </motion.section>
    </AnimatePresence>
  )
}

export default SideBar