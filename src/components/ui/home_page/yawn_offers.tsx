import { Link } from "react-router-dom"
import { motion } from 'motion/react'

interface YawnOffersProps {
    img: string,
    header: string,
    text: string,
    buttonText: string,
    bgColor: string,
    imgColor: string,
    btnColor: string,
}

const YawnOffers = (props: YawnOffersProps) => {
    return (
        <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={`flex gap-6 font-main w-[100%] md:w-[450px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px] py-2 px-3 sm:p-3 md:p-4 lg:p-6 rounded-xl items-center md:items-stretch`}
            style={{ backgroundColor: props.bgColor }}>
            <div 
                className="w-[120px] h-fit md:w-[286px] md:h-[286px] xl:w-[400px] xl:h-[400px] rounded-2xl"
                style={{ backgroundColor: props.imgColor }}>
                <img src={props.img} alt={props.header} className="w-[100%] rounded-2xl" />
            </div>
            <div className="flex flex-col justify-between py-1 xl:py-4 gap-2 md:gap-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-[4rem]">
                    {props.header}
                </h2>
                <p className="tracking-wide leading-snug text-[12px] sm:text-sm md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] w-[100%] md:w-[200px] font-light">
                    {props.text}
                </p>
                <Link 
                    className="w-fit px-4 sm:px-8 py-1 sm:py-3 rounded-full text-black hover:bg-black text-[12px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] font-extra font-medium hover:font-semibold" 
                    to={''}
                    style={{ backgroundColor: props.btnColor }}>
                    {props.buttonText}
                </Link>
            </div>
        </motion.div>
    )
}

export default YawnOffers