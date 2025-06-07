import React from 'react';
import './NavBar.css';

export default function Footer() {
    return (
        <footer className="custom-bg4 text-[#F2F2F7] py-4 mt-8">
            <div className="container mx-auto text-left px-6">
                <p className="mb-2">© 2025 SiNiaga. All rights reserved.</p>
                <p className="mb-2">
                Email: <a href="mail:wixossnna@gmail.com" className="underline hover:text-gray-300">wixossnna@gmail.com</a>
                </p>
                <p>
                Phone: <a href="tel:+6281234567890" className="underline hover:text-gray-300">+62 853 8985 8442</a>
                </p>
            </div>
        </footer>
    );
}