import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-4 py-3 bg-white mt-12">
            <div className="flex justify-between w-full md:w-auto items-center">
                <h1 className="text-xl font-bold">Book Vibe</h1>
                <button 
                    className="md:hidden text-gray-800 focus:outline-none" 
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>
            
            <div
                className={`${
                    isMenuOpen ? "block" : "hidden"
                } md:flex md:items-center md:gap-9 mt-4 md:mt-0 text-[18px] font-semibold`}
            >
                <NavLink
                    to={'/'}
                    className="block md:inline border border-[#23BE0A] text-[#23BE0A] px-5 py-[14px] rounded-lg md:ml-0 md:mr-4"
                >
                    Home
                </NavLink>
                <NavLink to={'/list'} className="block md:inline mt-2 md:mt-0 md:mr-4">Listed Books</NavLink>
                <NavLink to={'/page'} className="block md:inline mt-2 md:mt-0">Pages to Read</NavLink>
            </div>

            <div
                className={`${
                    isMenuOpen ? "block" : "hidden"
                } md:flex md:items-center md:gap-4 mt-4 md:mt-0 text-[18px]`}
            >
                <NavLink>
                    <button className="block md:inline text-white bg-[#23BE0A] px-7 py-[18px] rounded-lg w-full md:w-auto">Sign up</button>
                </NavLink>
                <NavLink>
                    <button className="block md:inline bg-[#59C6D2] text-white px-7 py-[18px] rounded-lg mt-2 md:mt-0 w-full md:w-auto">Log in</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
