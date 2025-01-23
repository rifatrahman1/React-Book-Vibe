import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const [books, set_books] = useState([]);

    useEffect(() => {
        fetch('/Books.json')
            .then(res => res.json())
            .then(data => {
                set_books(data);
            })
    }, [])
    return (
        <div className='mt-24'>
            <h2 className='playfair text-[40px] font-bold text-center'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;