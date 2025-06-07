import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./HomePage.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const products = [
        { name: "Mie Instan", price: 3500, stok: 77 },
        { name: "Gula Pasir", price: 17000, stok: 77 },
        { name: "Teh kotak", price: 3500, stok: 7 },
        { name: "Kopi Sachet", price: 3500, stok: 77 },
        { name: "Beras 5kg", price: 50000, stok: 7 },
        { name: "Minyak Goreng 1L", price: 15000, stok: 10 },
        { name: "Sabun Mandi Batangan", price: 5000, stok: 77 },
        { name: "Pasta Gigi", price: 12000, stok: 77 },
        { name: "Sampo Botol", price: 25000, stok: 6 },
        { name: "Detergen Bubuk", price: 20000, stok: 77 }
    ];

    const filteredProducts = products.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [filteredProducts]);

    return (
        <div className="min-h-screen flex items-center flex-col px-6 pb-4 mt-24 scroll-smooth md:scroll-auto">
            <div className="max-w-7xl w-full">
                <div className="mb-10" data-aos="fade-in">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Cari produk....."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-12 py-4 rounded-full shadow-md bg-white text-gray-700 focus:outline-none"
                        />
                        <FiSearch className="absolute top-3 left-4 text-gray-400 text-xl mt-1.5 ml-1" />
                    </div>
                </div>

                <div>
                    <div className="mt-6 space-y-4">
                        {filteredProducts.map((item, index) => (
                            <div
                                key={`${item.name}-${index}-${searchTerm}`}
                                className="bg-white shadow rounded-xl flex justify-between items-center p-4"
                                data-aos="fade-up"
                            >
                                <div className="flex items-center gap-4 mx-4">
                                    <div className="w-12 h-12 rounded bg-[#f6e6cb]" />
                                    <div>
                                        <p className="font-bold">{item.name}</p>
                                        <p className="text-sm text-gray-500">Rp. {item.price.toLocaleString()}</p>
                                    </div>
                                </div>
                                <div className="text-up mx-4">
                                        <p className={`text-sm font-semibold ${item.stok <= 10 ? 'text-red-600' : 'text-green-600'}`}>Stok: {item.stok}</p>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}