import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'

function GetStarted() {
  return (
    <div 
        className={`${styles.flexCenter} w-[140px] h-[38px] rounded-[50px] bg-blue-gradient p-[2px] cursor-pointer`}
    >
        <div 
            className={`${styles.flexCenter} flex-col bg-blue-gradient w-[100%] h-[100%] rounded-full`}
        >
            <div 
                className={`${styles.flexStart} flex-row`}
            >
                <p 
                    className='font-poppins font-medium text-[18px] leading-[23px] mr-2'
                >
                    <span 
                        className='text-primary'
                    >
                        Speek to Our Team Today
                    </span>
                </p>
                {/* <img src={arrowUp} alt="arrow" 
                    className='w-[23px] h-[23px] object-contain'
                /> */}
            </div>
        </div>
    </div>
  )
}

export default GetStarted