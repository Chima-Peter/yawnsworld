import { useEffect } from 'react';
import { animate, motion, useMotionValue } from 'motion/react';
import useMeasure from 'react-use-measure';


import slidenewImg1 from '../../../assets/images/home_page/slidenewImg1.svg';
import slidenewImg2 from '../../../assets/images/home_page/slidenewImg2.svg';
import slidenewImg3 from '../../../assets/images/home_page/slidenewImg3.svg';
import slidenewImg4 from '../../../assets/images/home_page/slidenewImg4.svg';
import slidenewImg5 from '../../../assets/images/home_page/slidenewImg5.svg';
import slidenewImg6 from '../../../assets/images/home_page/slidenewImg6.svg';
import slidenewImg7 from '../../../assets/images/home_page/slidenewImg7.svg';
import slidenewImg8 from '../../../assets/images/home_page/slidenewImg8.svg';
import slidenewImg9 from '../../../assets/images/home_page/slidenewImg9.svg';
import slidenewImg10 from '../../../assets/images/home_page/slidenewImg10.svg';


const SlideBrands = () => {
    const slideList = [
        slidenewImg1, slidenewImg2, slidenewImg3, slidenewImg4, slidenewImg5, slidenewImg6,
        slidenewImg7, slidenewImg8, slidenewImg9, slidenewImg10,
    ];

    const [ ref, { width } ] = useMeasure()
    const xTranslation = useMotionValue(0)

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 10

        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 20,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
        })
        
        return controls.stop
    }, [xTranslation, width])

    return (
        <div className="w-full overflow-hidden mb-8">
            <motion.div
                className="w-max flex gap-12"
                style={{ x: xTranslation }}
                ref={ref}
            >
                {[...slideList, ...slideList].map((img, index) => (
                    <motion.img
                        src={img}
                        key={`${img}-${index}`}
                        alt="slidenew"
                        width="150"
                        height="50"
                        className="w-[150px] h-[50px]"
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default SlideBrands;
