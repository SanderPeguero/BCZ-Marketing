import React from 'react'
import styles from '../style'
import GetStarted from './GetStarted'

function Hero() {
    return (
        <section id='home' 
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
        >
            <div 
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            >
                <div 
                    className='flex flex-row justify-between items-center w-full'
                >
                    <h1 
                        className='flex-1 font-poppins font-semibold ss:text-[72px] text-[37px] text-white ss:leading-[86.8px] leading-[75px]'
                    >
                        We Help your Business Produce <br/> Spine-Chilling ROI Via <span 
                            className='text-gradient'
                            > 
                        Paid Advertising
                        </span>{" "}
                    </h1>
                    <div 
                        className='ss:flex hidden md:mr-4 mr-0'
                    >
                        <GetStarted/>
                    </div>
                </div>

                {/* <h1 
                    className='font-poppins font-semibold ss:text-[68px] text[52px] text-white ss:leading[100px] leading-[75px] w-full'
                >
                    Upgrade for your Business.
                </h1> */}
                <p 
                    className={`${styles.paragraph} max-w-[470px] mt-5`}
                >
                    Stop wasting time and money on faulty and ineffective ad campaigns. It's time to make your ad-budget count, scale your business and blow up your sales.

                </p>
            </div>

            <div 
                className={`ss:hidden ${styles.flexCenter} mt-[230px]`}
            >
                <GetStarted/>
            </div>
        </section>
    )
}

export default Hero