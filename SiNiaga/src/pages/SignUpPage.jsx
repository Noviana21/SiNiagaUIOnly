import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import signin from "../assets/signin.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";

export default function SignUpPage() {
    const [type, setType] = useState('password');

    const handleToggle = () => {
        setType(type === 'password' ? 'text' : 'password');
    }

    useEffect(() => {
            AOS.init({
                duration: 1000,
                once: false
            });
    }, []);
        
    return (
        <div className="min-h-screen flex items-center flex-col justify-center px-6 pb-4 mt-16 scroll-smooth md:scroll-auto">
            <div className="max-w-7xl w-full">
                <div className="grid md:grid-cols-5 gap-2 ml-8 items-center justify-center">
                    <div className="md:col-span-3 px-8 py-2 text-center flex flex-col max-w-xl">
                        <div data-aos="fade-left">
                            <h1 className="text-4xl font-bold custom-h1">Create New Account</h1>
                            <p className="px-2 mb-4">Please complete all information to create your account on SiNiaga</p>
                        </div>
                        <div className="space-y-4 p-8 m-2 max-w-lg bg-white rounded-xl shadow-lg" data-aos="fade-left">
                            <form>
                                <div>
                                    <label className="block text-left mb-2 font-medium" htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#6b7f61] mb-4"
                                        placeholder="Enter your username"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-left mb-2 font-medium" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#6b7f61] mb-4"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <label className="block text-left mb-2 font-medium" htmlFor="password">Password</label>
                                    <input
                                        type={type}
                                        id="password"
                                        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#6b7f61] mb-6"
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        required
                                    />
                                    <span
                                    onClick={handleToggle}
                                    className="absolute right-4 top-1/2 m-1 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                    role="button"
                                    aria-label={type === 'password' ? "Show password" : "Hide password"}
                                    tabIndex={0}
                                    onKeyDown={e => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            handleToggle();
                                        }
                                    }}
                                    >
                                        {type === 'password' ?  <FaEyeSlash size={24} /> : <FaEye size={24} />}
                                    </span>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full custom-bg text-[#F2F2F7] px-4 py-2 mt-2 rounded-full font-medium transition-colors duration-300 hover:bg-[#6b7f61]"
                                >
                                    Sign In
                                </button>
                            </form>
                            <div className="mt-4 text-gray-600">
                                <p className="text-sm">Already have an account? <Link to="/signin" className="text-[#6b7f61] hover:underline">Sign In</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 flex p-2 m-2" data-aos="fade-left">
                        <img
                            src={signin}
                            alt="Sign Logo"
                            className="w-full max-w-sm max-h-100 object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}