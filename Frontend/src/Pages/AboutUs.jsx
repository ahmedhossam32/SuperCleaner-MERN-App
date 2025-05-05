import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import image1 from "../assets/image1aboutus.jpeg";
import image2 from "../assets/image2aboutus.jpeg";

const AboutUs = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <section className="bg-white/30 backdrop-blur-md rounded-xl p-10 shadow-xl animate-fadeIn">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 relative pb-3 border-b-4 border-green-500 inline-block w-full">
            About Our Cleaning Excellence
          </h1>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-lg text-gray-800 leading-relaxed relative pl-8 mb-6">
                <span className="absolute left-0 top-0 text-2xl">✨</span>
                Welcome to Super Cleaner, your go-to professional cleaning
                service. We specialize in eco-friendly solutions for both homes
                and businesses.
              </p>

              <div className="bg-white/80 border-l-4 border-green-500 rounded-lg shadow p-6 mb-6">
                <p className="text-green-800 font-medium leading-relaxed">
                  Our certified team uses hospital-grade equipment to ensure
                  99.9% germ-free surfaces, backed by a 100% satisfaction
                  guarantee.
                </p>
              </div>

              <p className="text-base text-gray-800 mb-8 leading-relaxed">
                Since 2015, we've transformed over 10,000 spaces in the
                metropolitan area. Our staff undergoes rigorous training in the
                latest cleaning technologies and sustainability practices.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <div className="flex-1 text-center bg-white/70 p-6 rounded-xl shadow">
                  <h3 className="text-3xl font-bold text-green-600">15K+</h3>
                  <p className="text-gray-700 mt-2">Completed Jobs</p>
                </div>
                <div className="flex-1 text-center bg-white/70 p-6 rounded-xl shadow">
                  <h3 className="text-3xl font-bold text-green-600">98%</h3>
                  <p className="text-gray-700 mt-2">Client Retention</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden shadow-lg h-[240px] group">
                <img
                  src={image2}
                  alt="Cleaning supplies"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-center p-3 text-lg font-medium">
                  Certified Eco-Friendly Cleaning Experts
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
