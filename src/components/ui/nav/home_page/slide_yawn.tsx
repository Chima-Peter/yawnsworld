import { useEffect, useState } from 'react';
import { animate, motion, useMotionValue } from 'motion/react';
import useMeasure from 'react-use-measure';


import { TiStarFullOutline } from "react-icons/ti";
import { FaEye } from "react-icons/fa";



const SlideYawn = () => {
    const slideList = [
        'STAKE $YAWN', 'STAKE $YAWN', 'STAKE $YAWN', 'STAKE $YAWN', 'STAKE $YAWN', 'STAKE $YAWN', 'STAKE $YAWN', 'STAKE $YAWN', 'STAKE $YAWN', 'STAKE $YAWN'
    ];

    const [ ref, { width } ] = useMeasure()
    const xTranslation = useMotionValue(0)
    const [hover, setHover] = useState(false)

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 10

        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: hover ? 50 : 30,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
        })
        
        return controls.stop
    }, [xTranslation, width, hover])

    const handleMouseEvent = () => setHover(!hover)

    return (
        <div className="w-full overflow-hidden font-main">
            <motion.div
                className="w-max flex gap-8 bg-black py-4"
                style={{ x: xTranslation }}
                ref={ref}
                onHoverStart={handleMouseEvent}
                onHoverEnd={handleMouseEvent}
            >
                {[...slideList, ...slideList].map((text, index) => (
                    <div 
                        className='flex gap-3 items-center' 
                        key={`${text}-${index}`}
                        >
                        <TiStarFullOutline className='w-7 h-7 text-purple-200' />
                        <p className='text-xl font-normal text-white'>
                            {text}
                        </p>
                        <FaEye className='w-7 h-7 text-purple-200' />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SlideYawn;
