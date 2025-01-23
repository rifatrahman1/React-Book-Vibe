import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';

const Book_Details = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find((book) => book.bookId === id);
    const { bookName, author, image, review, totalPages, rating, category, tags, yearOfPublishing, publisher } = book;
    return (
        <div className='flex gap-12'>
            <div className='bg-[#1313130D] rounded-lg p-16 w-6/12'>
                <img className='w-full h-full' src={image} alt="" />
            </div>
            <div className='w-6/12'>
                <h1 className='text-[40px] font-bold playfair'>{bookName}</h1>
                <p className='text-xl font-medium mt-4'>By : {author}</p>
                <div className="divider"></div>
                <p className='text-[#131313CC] text-xl font-medium'>{category}</p>
                <div className="divider"></div>
                <p className='font-bold'>Review : <span className='font-normal text-[#131313B3] leading-8'>{review}</span></p>
                <div className="flex gap-4 mt-6 flex-wrap font-bold items-center">Tags
                    {tags.map((tag, idx) => (
                        <button key={idx} className="bg-[#23BE0A0D] px-4 py-[7px] rounded-[30px] font-medium text-[#23BE0A]" >#{tag} </button>))}
                </div>
                <div className="divider"></div>
                <div className="space-y-2">
  <div className="flex justify-between">
    <span className="font-medium text-gray-600">Number of Pages:</span>
    <span className="text-black">281</span>
  </div>
  <div className="flex justify-between">
    <span className="font-medium text-gray-600">Publisher:</span>
    <span className="text-black">J.B Lippincott & Co.</span>
  </div>
  <div className="flex justify-between">
    <span className="font-medium text-gray-600">Year of Publishing:</span>
    <span className="text-black">1960</span>
  </div>
  <div className="flex justify-between">
    <span className="font-medium text-gray-600">Rating:</span>
    <span className="text-black">4.8</span>
  </div>
</div>

                <div className='flex items-center gap-3'>
                    <NavLink>Read</NavLink>
                    <NavLink>Wishlist</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Book_Details;