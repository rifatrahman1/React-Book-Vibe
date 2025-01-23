import React from 'react';
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
    const { bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className='border border-[#13131326] rounded-2xl p-6'>
            <div className='bg-[#F3F3F3] px-[96px] flex justify-center py-8 rounded-2xl'>
                <img className='w-[130px] h-[170px] ' src={image} alt="" />
            </div>
            <p className='flex gap-4 mt-4'>{
                tags.map(tag => <button className='bg-[#23BE0A0D] px-4 py-[7px] rounded-[30px] font-medium text-[#23BE0A]'>{tag}</button>)
            }</p>
            <h3 className='text-2xl playfair font-bold mt-4'>{bookName}</h3>
            <p className='mt-4 text-[#131313CC] font-medium'>By : {author}</p>
            <div className='border-t-2 border-dashed mt-5'></div>
            <div className="flex items-center justify-between mt-5 text-[#131313CC] font-medium">
                <p>{category}</p>
                <p className='flex items-center gap-2'>
                    <p>{rating}</p>
                    <FaRegStar />
                </p>
            </div>
        </div>
    );
};

export default Book;