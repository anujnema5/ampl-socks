import React from 'react';
import { FiMenu } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    const fakeCardData = 1;

    return (
        <nav className="py-5 px-5 xl:px-20 xl:py-6 flex justify-between border-b items-center relative">
            <div className="flex items-center">
                <FiMenu className="text-3xl " />

                <div className="hidden lg:flex items-center gap-6 ml-12">
                    <div className="flex items-center px-4 py-2 rounded-lg">
                        <span>Catalog</span>
                        <IoChevronDownOutline className="ml-2" />
                    </div>
                    <span className="text-gray-700">+38057 000 00 00</span>
                </div>
            </div>

            {/* Center Logo */}
            <div
                className="flex justify-center absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span className="font-bold text-2xl">Green City</span>
            </div>

            {/* Right Section for Icons */}
            <div className="flex items-center gap-4">
                {/* Desktop View */}
                <div className="hidden lg:flex items-center gap-7">
                    <FiSearch className="text-xl cursor-pointer" />
                    <FiUser className="text-xl cursor-pointer" />
                    <div className="relative">
                        <FiHeart className="text-xl cursor-pointer" />
                        <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs rounded-full px-1">
                            {fakeCardData}
                        </span>
                    </div>
                </div>

                {/* Cart Icon (Visible on all screens) */}
                <div className="relative flex items-center">
                    <FiShoppingCart className="text-2xl cursor-pointer" />
                    <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs rounded-full px-1">
                        {fakeCardData}
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
