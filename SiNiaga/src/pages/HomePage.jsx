import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import localShop from "../assets/local shop.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        });
    }, []);

    return (
        <div className="min-h-screen flex items-center flex-col justify-center px-6 pb-6 pt-8 mt-32 scroll-smooth md:scroll-auto">
            <div className="max-w-8xl w-full">
                <div className="grid md:grid-cols-5 gap-6 mb-24">
                    <div className="md:col-span-2 flex items-center justify-center p-2 m-2" data-aos="fade-up">
                        <img
                            src={localShop}
                            alt="SiNiaga Logo"
                            className="w-full object-cover"
                            data-aos="fade-up"
                        />
                    </div>

                    <div className="md:col-span-3 p-8 m-2" data-aos="fade-up">
                        <div>
                            <h1 className="text-6xl font-bold custom-h1 mb-4 text-left inline-block">SiNiaga</h1>
                        </div>
                        <div>
                            <h2 className="text-3xl mb-2 font-bold custom-h1 text-left inline-block">AI for Growth</h2>
                        </div>
                        <div>
                            <p className="text-gray-600 mb-8 text-left font-normal pl-3 mr-8">
                                We are here to help your business grow more organized, stronger,
                                and ready to go further! SiNiaga is an AI-based assistant that
                                optimizes inventory management and market analysis for micro,
                                small, and medium businesses. With many features like sales volume
                                projection, real-time AI dashboard, inventory optimization,
                                surplus management, and chatbot, SiNiaga provides education and
                                recommendations to enhance sales and profits.
                            </p>
                        </div>
                        <div className="text-left gap-3">
                            <Link to="/signin" className="inline-block custom-bg text-[#F2F2F7] px-16 py-3 rounded-full font-medium ml-3 mr-4 transition-colors duration-300 hover:bg-[#6b7f61]">
                                Sign In
                            </Link>
                            <Link to="/signup" className="inline-block border-2 colorr px-16 py-3 font-medium rounded-full transition-colors duration-300 hover:border-[#6b7f61] hover:text-[#6b7f61]">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="md:mt-24 md:mb-20 px-20 py-8 mx-auto our-story-bg" data-aos="fade-up">
                    <h1 className="text-5xl font-bold custom-h1 mb-6 inline-bloc text-center">
                    Our Story
                    </h1>
                    <div className="text-left p-12 m-2 bg-white bg-opacity-60 rounded-md shadow-lg">
                        <p className="mb-4 font-normal">SiNiaga was created in response to the real challenges faced by businesses in the local trade sector. We realise that suboptimal operational management, particularly in terms of stock management and demand forecasting, is often a major obstacle to the growth of small and medium-sized enterprises.</p>
                        <p className="mb-4 font-normal">Issues such as inaccuracies in inventory management—whether overstocking, which leads to product buildup and capital wastage, or understocking, which results in lost sales—are critical concerns. Additionally, the lack of tools to project demand based on seasonal trends, customer purchasing patterns, or external factors like weather and promotions further exacerbates the situation.</p>
                        <p className="mb-4 font-normal">Additionally, many businesses still struggle with managing leftover goods or excess inventory. The lack of systems that can recommend strategies such as dynamic discounts, product bundling, or donations hinders inventory turnover potential and ultimately leads to increased waste.</p>
                        <p className="mb-2 font-normal">Given this situation, SiNiaga offers an integrated solution tailored to the needs of local businesses. We provide key features such as sales projections and identification of peak demand periods, an interactive dashboard displaying real-time stock and sales data with AI support, and an inventory optimisation system that automatically determines reorder points and optimal quantities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
