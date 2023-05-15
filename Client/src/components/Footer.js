import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer  '>
        <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4 '>
            <div className='lex flex-[0.5] justiy-center items-center '>
                <img src='./images/logo3.png'  alt="logo" className='w-32 ' />
            </div>
            <div className='flex flex-1 justify-evenly items-centerflex-wrap sm:mt-0 mt-5 w-full '>
                <p className='text-white text-base text-center mx-2 cursor-pointer hover:text-red-400'>Market</p>
                <p className='text-white text-base text-center mx-2 cursor-pointer hover:text-red-400'>Exchange</p>
                <p className='text-white text-base text-center mx-2 cursor-pointer hover:text-red-400'>Tutorials</p>
                <p className='text-white text-base text-center mx-2 cursor-pointer hover:text-red-400'>Wallets</p>

            </div>

        </div>
        <div className='flex justify-center items-center flex-col mt-5'>
            <p className='text-white text-sm text-center'>Come join us</p>
            <p className='text-white text-sm text-center'>info@aethereo.COM</p>

        </div>
        <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 '/>
        <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
            <p className='text-white text-sm text-center'>@AETHEREO 2022</p>
            <p className='text-white text-sm text-center'>All rights reserved</p>

        </div>
    </div>
  )
}

export default Footer
