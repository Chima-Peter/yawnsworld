import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { motion } from 'motion/react'
import { GoArrowRight } from "react-icons/go";
import { MdSubdirectoryArrowRight } from "react-icons/md";

import footer_img from '../../../assets/images/home_page/joinus-img.svg'
import slide1 from '../../../assets/images/home_page/tg-icon.webp'
import slide2 from '../../../assets/images/home_page/tg-icon1.webp'
import slide3 from '../../../assets/images/home_page/tw-icon.webp'
import slide4 from '../../../assets/images/home_page/tw-icon1.webp'
import slide5 from '../../../assets/images/home_page/tw-icon2.webp'
import slide6 from '../../../assets/images/home_page/tw-icon3.webp'

const Footer = () => {
  const links = [
    'about', 'ecosystem', 'latest', 'community'
  ]
  const slides = [
    slide1, slide3, slide5, slide2, slide4, slide6
  ]
  return (
    <footer className="flex flex-col gap-8 font-main bg-black text-white pt-24 overflow-hidden">
      <section className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start w-[100%] px-4 sm:px-6 min-lg:px-8 xl:px-10 2xl:px-24'>
        <div className='flex gap-0 items-center'>
          <h5 className="text-[3rem] md:text-[4rem] min-lg:text-[5rem] xl:text-[6rem] 2xl:text-[7rem] tracking-tighter w-[100%] leading-none">
            JOIN US
          </h5>
          <img src={footer_img} alt="JOIN US TODAY" className='w-[50%] md:w-[250px] min-lg:w-max' />
        </div>
        <ul className='flex flex-col gap-2'>
          {
            links.map((link) => (
              <li key={link} className='flex gap-2 items-center group/parent'>
                <GoArrowRight className='text-white w-5 h-5' />
                <HashLink to={`#${link}`} className='font-light text-[16px] md:text-[18px] min-lg:text-[20px] xl:text-[22px] 2xl:text-[24px] group-hover/parent:bg-gray-700 rounded-2xl px-2 py-1 capitalize'>
                  {link}
                </HashLink>
              </li>
            ))
          }
          <li className='flex gap-2 items-center group/parent'>
            <GoArrowRight className='text-white w-5 h-5' />
            <HashLink to={'#get-yawn'} className='font-light  text-[16px] md:text-[18px] min-lg:text-[20px] xl:text-[22px] 2xl:text-[24px] group-hover/parent:bg-gray-700 rounded-2xl px-2 py-1'>
              Get $YAWN
            </HashLink>
          </li>
          <li className='flex gap-2 items-center group/parent'>
            <GoArrowRight className='text-white w-5 h-5' />
            <Link to={``} className='font-light  text-[16px] md:text-[18px] min-lg:text-[20px] xl:text-[22px] 2xl:text-[24px] group-hover/parent:bg-gray-700 rounded-2xl px-2 py-1'>
              Terms of Use
            </Link>
          </li>
          <li className='flex gap-2 items-center group/parent'>
            <GoArrowRight className='text-white w-5 h-5' />
            <Link to={``} className='font-light  text-[16px] md:text-[18px] min-lg:text-[20px] xl:text-[22px] 2xl:text-[24px] group-hover/parent:bg-gray-700 rounded-2xl px-2 py-1'>
              Privacy Policy
            </Link>
          </li>
        </ul>
      </section>

      <motion.section 
        className='flex  gap-4 min-lg:gap-0'
        initial={{ x: '50px' }}
        animate={{ x: '-580px' }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'loop', repeatDelay: 0 }}>
        {
          slides.map(((slide, index) => (
            <Link 
              to={`${(index === 0) || (index === 3) ? 'https://t.me/yawnsworld' :'https://x.com/yawnsworld'}`} 
              target='_blank'
              className='flex gap-4 min-lg:gap-0 items-center'
              key={slide}>
              {
                index !== 0 && <MdSubdirectoryArrowRight className='w-[50px] h-[50px] text-white' />
              }
              <img src={slide} alt="Slide Icon" className='w-[150px]' />
            </Link>
          )))
        }
      </motion.section>

      <section className='flex py-6 w-[100%] items-center justify-center border-t border-t-gray-500'>
        <h6 className='text-[1rem] xl:text-[1.2rem] font-light uppercase'>
          All rights reserved © YAWN 2024
        </h6>
      </section>
    </footer>
  )
}

export default Footer