import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ReportPage() {
    const [activeTab, setActiveTab] = useState("penjualan");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        });

        const storedTab = localStorage.getItem("activeTab");
        if (storedTab) {
            setActiveTab(storedTab);
        }
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        localStorage.setItem("activeTab", tab);
    };

    const penjualan = [
        { harga: 12000000 }
    ];

    const produkTerjual = [
        { jumlah: 1234 },
    ];

    const dataPenjualan = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [
            {
            label: 'Penjualan',
            data: [12000000, 15000000, 18000000, 20000000, 22000000, 25000000, 27000000, 30000000, 32000000, 35000000, 37000000, 40000000],
            backgroundColor: "#4e5847"
            },
        ],
    };

    const dataStok = [
        { name: "Mie Instan", price: 3500, stok: 77, minimal: 10 },
        { name: "Gula Pasir", price: 17000, stok: 7, minimal: 10 },
        { name: "Teh kotak", price: 3500, stok: 0, minimal: 10 },
        { name: "Kopi Sachet", price: 3500, stok: 7, minimal: 24 },
        { name: "Beras 5kg", price: 50000, stok: 77, minimal: 24 },
        { name: "Minyak Goreng 1L", price: 15000, stok: 77, minimal: 24 },
        { name: "Sabun Mandi Batangan", price: 5000, stok: 77, minimal: 24 },
        { name: "Pasta Gigi", price: 12000, stok: 77, minimal: 77 },
        { name: "Sampo Botol", price: 25000, stok: 9, minimal: 77 },
        { name: "Detergen Bubuk", price: 20000, stok: 70, minimal: 77 }
    ];

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
            },
        },
    };

    return (
        <div className="min-h-screen flex items-center flex-col justify-center px-6 pb-4 mt-24 scroll-smooth md:scroll-auto">
            <div className="max-w-7xl w-full">
                <div
                    className="bg-white px-8 pb-16 pt-8 my-2 rounded-xl shadow-lg"
                    data-aos="fade-in"
                >
                    <div className="text-center mb-4" data-aos="fade-up">
                        <h1 className="text-4xl font-bold custom-h1">Ringkasan Penjualan</h1>
                        <p className="text-gray-600 font-medium">Periode Oktober 2025</p>
                    </div>
                    <div className="mt-6" data-aos="fade-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg1 p-4 rounded-xl shadow">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Total Penjualan</h2>
                                <p className="text-2xl font-bold text-gray-900">
                                    Rp. {penjualan[0].harga.toLocaleString()}
                                </p>
                                <p className="text-sm text-gray-700">naik 16% dari bulan kemarin</p>
                            </div>
                            <div className="bg2 p-4 rounded-xl shadow">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Produk Terjual</h2>
                                <p className="text-2xl font-bold text-gray-900">
                                    {produkTerjual[0].jumlah.toLocaleString()} unit
                                </p>
                                <p className="text-sm text-gray-700">naik 8% dari bulan kemarin</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up">
                    <h2 className="text-xl font-bold mb-4 mt-8 px-2 custom-h2">Penjualan dan Stok Bulanan</h2>
                    <div className="bg-white p-6 my-2 rounded-xl shadow-lg h-full">
                        <div className="flex flex-col items-center justify-start rounded-lg">
                            <div className="mb-4 flex w-full">
                                <button
                                    onClick={() => handleTabClick("penjualan")}
                                    className={`flex-1 px-4 py-2 rounded-l-full transition-colors duration-300 ease-in-out ${
                                        activeTab === "penjualan"
                                            ? "bg-[#A0937D] text-gray-100"
                                            : "bg-gray-100 text-[#A0937D]"
                                    }`}
                                >
                                    Penjualan
                                </button>
                                <button
                                    onClick={() => handleTabClick("stok")}
                                    className={`flex-1 px-4 py-2 rounded-r-full transition-colors duration-300 ease-in-out ${
                                        activeTab === "stok"
                                            ? "bg-[#A0937D] text-gray-100"
                                            : "bg-gray-100 text-[#A0937D]"
                                    }`}
                                >
                                    Stok
                                </button>
                            </div>
                            <div className="flex items-center justify-center h-full w-full rounded-lg p-4" data-aos="fade-up">
                                {activeTab === "penjualan" ? (
                                    <div className="w-full h-[30rem]">
                                        <Bar data={dataPenjualan} options={options} />
                                    </div>
                                ) : (
                                    <div className="w-full h-[30rem] overflow-y-auto">
                                        <div className="w-full h-full overflow-y-auto">
                                            <div className="grid md:grid-cols-1 gap-4 w-full">
                                                {dataStok.map((item, index) => {
                                                    const stokSelisih = item.minimal - item.stok;
                                                    let statusText = '';
                                                    let statusColor = '';

                                                    if (stokSelisih >= 10) {
                                                        statusText = 'Kritis';
                                                        statusColor = 'text-red-600';
                                                    } else if (stokSelisih >= 5) {
                                                        statusText = 'Rendah';
                                                        statusColor = 'text-yellow-500';
                                                    } else {
                                                        statusText = 'Aman';
                                                        statusColor = 'text-green-600';
                                                    }

                                                    return (
                                                        <div key={index} className="flex justify-between items-center py-4 border-b last:border-none">
                                                            <div className="flex items-center gap-4 mx-4">
                                                                <div className="w-10 h-10 rounded bg-[#f6e6cb]" />
                                                                <div>
                                                                    <p className="font-bold">{item.name}</p>
                                                                    <p className="text-sm text-gray-600 mb-1">
                                                                        Harga: Rp. {item.price.toLocaleString()}
                                                                    </p>
                                                                    <p className={`text-sm font-semibold ${statusColor}`}>
                                                                        Stok: {item.stok} (Min: {item.minimal})
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center justify-between mx-8">
                                                                <p className={`text-md font-bold ${statusColor}`}>
                                                                    {statusText}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}