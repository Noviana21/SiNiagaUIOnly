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

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState("harian");
    const [activeTab2, setActiveTab2] = useState("stokMenipis");

    useEffect(() => {
        const storedTab = localStorage.getItem("activeTab");
        if (storedTab) {
            setActiveTab(storedTab);
        }
        const storedTab2 = localStorage.getItem("activeTab2");
        if (storedTab2) {
            setActiveTab2(storedTab2);
        }
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        localStorage.setItem("activeTab", tab);
    };

    const handleTabClick2 = (tab) => {
        setActiveTab2(tab);
        localStorage.setItem("activeTab2", tab);
    };

    const dataHarian = {
        labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
        datasets: [
        {
            label: "Penjualan Harian",
            data: [120, 190, 300, 250, 320, 210, 150],
            backgroundColor: "#6b7f61"
        }
        ]
    };

    const dataBulanan = {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
        datasets: [
        {
            label: "Penjualan Bulanan",
            data: [300, 500, 400, 280, 210, 190, 130, 450, 290, 360, 500, 420],
            backgroundColor: "#4e5847"
        }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: {
            beginAtZero: true,
            },
            x: {
            barPercentage: 0.5,
            categoryPercentage: 0.5,
            }
        }
    };

    const produkTerlaris = [
        { name: "Beras", terjual: 150, harga: 12000, stok: 50 },
        { name: "Minyak Goreng", terjual: 120, harga: 15000, stok: 30 },
        { name: "Gula Pasir", terjual: 100, harga: 10000, stok: 20 },
        { name: "Telur", terjual: 90, harga: 20000, stok: 40 },
        { name: "Susu", terjual: 80, harga: 25000, stok: 25 }
    ];

    const rekomendasi = [
        { name: "Susu Kotak", stok: 3, minimal: "15" },
        { name: "Biskuit", stok: 2, minimal: "17" },
        { name: "Sabun Mandi", stok: 2, minimal: "5" },
        { name: "Pasta Gigi", stok: 7, minimal: "18" },
        { name: "Shampo", stok: 8, minimal: "14" }
    ];

    const notifikasiStokMenipis = [
        { name: "Minyak Goreng", stok: 3, minimal: "13" },
        { name: "Gula Pasir", stok: 2, minimal: "14" },
        { name: "Telur", stok: 1, minimal: "15" },
        { name: "Susu", stok: 0, minimal: "12" }
    ]

    const notifikasiKadaluwarsa = [
        { name: "Biskuit", kadaluwarsa: "2025-01-15" },
        { name: "Susu Kotak", kadaluwarsa: "2025-02-10" },
        { name: "Sabun Mandi", kadaluwarsa: "2025-03-05" },
        { name: "Pasta Gigi", kadaluwarsa: "2025-04-20" },
        { name: "Shampo", kadaluwarsa: "2025-05-30" },
        { name: "Minyak Goreng", kadaluwarsa: "2025-06-15" },
        { name: "Gula Pasir", kadaluwarsa: "2025-07-25" },
        { name: "Coklat", kadaluwarsa: "2025-08-10" }
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        });
    }, []);

    return (
        <div className="min-h-screen flex items-center flex-col justify-center px-6 pb-4 mt-24 scroll-smooth md:scroll-auto">
            <div className="max-w-7xl w-full">
                <div className="bg-white px-8 pb-16 pt-8 my-2 rounded-xl shadow-lg" data-aos="fade-in">
                    <div className="text-center mb-4" data-aos="fade-up">
                        <h1 className="text-4xl font-bold custom-h1">Selamat Datang, Sunday!</h1>
                        <p className="text-gray-600 font-medium">Toko Kelontong Sejahtera</p>
                    </div>
                    <div className="mt-6" data-aos="fade-up">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg1 p-4 rounded-xl shadow">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Penjualan Hari Ini</h2>
                                <p className="text-2xl font-bold text-gray-900">Rp. 1.200.000,-</p>
                                <p className="text-sm text-gray-700">naik 12% dari kemarin</p>
                            </div>
                            <div className="bg2 p-4 rounded-xl shadow">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Stok Menipis</h2>
                                <p className="text-2xl font-bold text-gray-900">8 Produk</p>
                                <p className="text-sm text-gray-700">Isi produk anda segera!</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div data-aos="fade-up">
                    <h2 className="text-xl font-bold mb-4 mt-8 px-2 custom-h2">Tren Penjualan</h2>
                    <div className="bg-white p-6 my-2 rounded-xl shadow-lg h-full">
                        <div className="flex flex-col items-center justify-center h-[30rem] rounded-lg">
                            <div className="mb-4 flex w-full">
                                <button
                                    onClick={() => handleTabClick("harian")}
                                    className={`flex-1 px-4 py-2 rounded-l-full transition-colors duration-300 ease-in-out ${activeTab === "harian" ? "bg-[#A0937D] text-gray-100" : "bg-gray-100 text-[#A0937D]"}`}
                                >
                                    Harian
                                </button>
                                <button
                                    onClick={() => handleTabClick("bulanan")}
                                    className={`flex-1 px-4 py-2 rounded-r-full transition-colors duration-300 ease-in-out ${activeTab === "bulanan" ? "bg-[#A0937D] text-gray-100" : "bg-gray-100 text-[#A0937D]"}`}
                                >
                                    Bulanan
                                </button>
                            </div>
                            <div className="flex items-center justify-center h-full w-full rounded-lg p-4">
                                <Bar data={activeTab === "harian" ? dataHarian : dataBulanan} options={options} />
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up">
                    <h2 className="text-xl font-bold mb-4 mt-8 px-2 custom-h2">Produk Terlaris</h2>
                    <div className="bg-white p-6 my-2 rounded-xl shadow-lg">
                        {produkTerlaris.map((produk, index) => (
                            <div key={index} className="flex justify-between items-center py-4 border-b last:border-none">
                                <div className="flex items-center gap-4 mx-4">
                                    <div className="w-10 h-10 rounded bg-[#f6e6cb]" />
                                    <div>
                                        <p className="font-bold">{produk.name}</p>
                                        <p className="text-sm text-gray-500">
                                        Stok: {produk.stok} | Rp. {produk.harga.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-up mx-4">
                                    <p className="text-lg font-bold">{produk.terjual}</p>
                                    <p className="text-sm text-gray-400">Terjual</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div data-aos="fade-up">
                    <h2 className="text-xl font-bold mb-4 mt-8 px-2 custom-h2">Rekomendasi Restok</h2>
                    <div className="bg-white p-6 my-2 rounded-xl shadow-lg">
                        {rekomendasi.map((item, index) => (
                            <div key={index} className="flex justify-between items-center py-4 border-b last:border-none">
                                <div className="flex items-center gap-4 mx-4">
                                    <div className="w-10 h-10 rounded bg-[#f6e6cb]" />
                                    <div>
                                        <p className="font-bold">{item.name}</p>
                                        {(() => {
                                            const selisih = item.minimal - item.stok;
                                            return (
                                                <p className={`text-sm ${selisih >= 10 ? "text-red-600" : "text-yellow-600"}`}>
                                                Stok: {item.stok} (Minimal: {item.minimal})
                                                </p>
                                            );
                                        })()}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div data-aos="fade-up">
                    <h2 className="text-xl font-bold mb-4 mt-8 px-2 custom-h2">Notifikasi Stok</h2>
                    <div className="bg-white p-6 my-2 rounded-xl shadow-xl h-full">
                        <div className="flex flex-col items-center justify-center rounded-lg">
                            <div className="mb-4 flex w-full">
                                <button
                                    onClick={() => handleTabClick2("stokMenipis")}
                                    className={`flex-1 px-4 py-2 rounded-l-full transition-colors duration-300 ease-in-out ${activeTab2 === "stokMenipis" ? "bg-[#A0937D] text-gray-100" : "bg-gray-100 text-[#A0937D]"}`}
                                >
                                    Stok Menipis
                                </button>
                                <button
                                    onClick={() => handleTabClick2("Kadaluwarsa")}
                                    className={`flex-1 px-4 py-2 rounded-r-full transition-colors duration-300 ease-in-out ${activeTab2 === "Kadaluwarsa" ? "bg-[#A0937D] text-gray-100" : "bg-gray-100 text-[#A0937D]"}`}
                                >
                                    Kadaluwarsa
                                </button>
                            </div>
                            <div className="flex items-center justify-center h-full w-full rounded-lg p-4">
                                <div className="w-full h-[25rem] overflow-y-auto">
                                    {activeTab2 === "stokMenipis" ? (
                                        notifikasiStokMenipis.map((item, index) => (
                                            <div key={index} className="flex justify-between items-center py-4 border-b last:border-none">
                                                <div className="flex items-center gap-4 mx-4">
                                                    <div className="w-10 h-10 rounded bg-[#f6e6cb]" />
                                                    <div>
                                                        <p className="font-bold">{item.name}</p>
                                                        <p className="text-sm text-red-600">Stok: {item.stok} (Minimal: {item.minimal})</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        notifikasiKadaluwarsa.map((item, index) => (
                                            <div key={index} className="flex justify-between items-center py-4 border-b last:border-none">
                                                <div className="flex items-center gap-4 mx-4">
                                                    <div className="w-10 h-10 rounded bg-[#f6e6cb]" />
                                                    <div>
                                                        <p className="font-bold">{item.name}</p>
                                                        <p className="text-sm text-gray-500">kadaluwarsa: {new Date(item.kadaluwarsa).toLocaleDateString()}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}