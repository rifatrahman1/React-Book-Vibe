import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;
    return (
        <Link to={`/details/${bookId}`}>
            <div className="border border-[#13131326] rounded-2xl p-6 flex flex-col justify-between h-full">
                <div className="bg-[#F3F3F3] px-[96px] flex justify-center py-8 rounded-2xl">
                    <img className="w-[130px] h-[170px]" src={image} alt={bookName} />
                </div>
                <div className="flex gap-2 mt-4 flex-wrap">
                    {tags.map((tag, idx) => (
                        <button key={idx} className="bg-[#23BE0A0D] px-4 py-[7px] rounded-[30px] font-medium text-[#23BE0A]" >{tag} </button>))}
                </div>
                <h3 className="text-2xl playfair font-bold mt-4">{bookName}</h3>
                <p className="mt-4 text-[#131313CC] font-medium">By : {author}</p>
                <div className="border-t-2 border-dashed mt-5"></div>
                <div className="flex items-center justify-between mt-5 text-[#131313CC] font-medium">
                    <p>{category}</p>
                    <div className="flex items-center gap-2">
                        <p>{rating}</p>
                        <FaStar className="text-orange-500" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
