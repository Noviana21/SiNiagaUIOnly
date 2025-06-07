import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useState, useEffect, useRef } from 'react';
import sundayProfile from "../assets/sunday_profil.jpg";

export default function Navbar({ isLoggedIn }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        setDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="custom-bg3 text-[#f2f2f7] p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    SiNiaga
                </Link>
                <div className="space-x-6 flex items-center">
                    {isLoggedIn ? (
                    <>
                        <Link to="/dashboard" className="hover:text-gray-300">
                            Dashboard
                        </Link>
                        <Link to="/product" className="hover:text-gray-300">
                            Products
                        </Link>
                        <Link to="/report" className="hover:text-gray-300">
                            Report
                        </Link>
                        <Link to="/chatbot" className="hover:text-gray-300">
                            Chatbot
                        </Link>
                        <div className="relative inline-block text-left" ref={dropdownRef}>
                            <img
                                src={sundayProfile}
                                alt="Profile"
                                className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#f2f2f7]"
                                onClick={toggleDropdown}
                            />
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-[#f2f2f7] text-black rounded-lg shadow-lg z-20">
                                    <Link
                                        to="/logout"
                                        onClick={handleLogout}
                                        className="block px-4 py-2 hover:bg-gray-300 hover:rounded-lg"
                                    >
                                        Log out
                                    </Link>
                                </div>
                            )}
                        </div>
                    </>
                    ) : (
                    <>
                    </>
                    )}
                </div>
            </div>
    </nav>
    );
}
