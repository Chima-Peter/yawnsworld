import { motion } from 'motion/react'

const BlockTemplate = () => {
    const blockData = [
        {
            header: '2 BILLION',
            subheader: 'Liquidity Locked',
            text: 'Ensuring stability and trust, our DEX liquidity is locked and reviewed every quarter.',
            color: '#FFF494'
        },
        {
            header: '10%',
            subheader: 'Development Fund',
            text: 'A dedicated fund for continuous project development to support Yawn’s growth.',
            color: '#ECC3FF'
        },
        {
            header: '5%',
            subheader: 'Marketing Fund',
            text: 'Reserved for marketing initiatives, this fund is to fuel strategic promotions.',
            color: '#94B8FF'
        },
        {
            header: '5%',
            subheader: 'CEX Fund',
            text: 'Set aside for Centralized Exchange listings and partnerships, bolstering the token’s accessibility and market presence.',
            color: '#BFFA83'
        }
    ]

    return (
        <section className="w-[100%] flex flex-col gap-4 xl:gap-8 mt-4 items-center">
            {
                blockData.map((block) => (
                    <motion.div 
                        style={{ backgroundColor: block.color }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: 'easeIn' }}
                        viewport={{ amount: 0.2, once: false }}
                        key={block.text}
                        className='w-[95%] rounded-2xl py-4 px-8 md:py-8 md:px-16 flex flex-col md:flex-row gap-6 md:gap-0 sm:justify-between'>
                        <h4 className='text-[2rem] font-medium sm:text-[3rem] min-lg:text-[4rem]'>
                            {block.header}
                        </h4>
                        <div className='flex flex-col sm:gap-0 gap-1 w-[100%] md:w-[300px] min-lg:w-[450px] lg:w-[500px] xl:w-[800px] 2xl:w-[1000px]'>
                            <h4  className='font-light text-[2rem] min-lg:text-[3rem]'>
                                {block.subheader}
                            </h4>
                            <p  className="font-thin opacity-80 text-[16px] md:text-[18px] min-lg:text-[20px] xl:text-[24px] 2xl:text-[30px] tracking-wide leading-tight">
                                {block.text}
                            </p>
                        </div>
                    </motion.div>
                ))
            }
        </section>
  )
}

export default BlockTemplate