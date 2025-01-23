import React from 'react';
import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <div className='flex justify-evenly items-center bg-[#1313130D] rounded-3xl mt-12 py-20'>
            <div>
                <h1 className='text-[56px] font-bold playfair'>Books to freshen up <br /> your bookshelf</h1>
                <button className='bg-[#23BE0A] px-7 py-[21px] rounded-lg text-white font-bold text-xl mt-12'>View The List</button>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;