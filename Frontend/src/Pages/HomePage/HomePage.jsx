import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import backgroundImage from "../../assets/Back3.jpg";
import Services from "./ServiceSection";
import WhyChooseUs from "./WhyChooseUs";
import CustomerReviews from "./CustomersReviews";
import ContactBanner from "./ContactBanner";

function HomePage() {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking");
  };

  const handlePricing = () => {
    navigate("/pricing");
  };

  return (
    <div className="bg-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-start">
        <img
          src={backgroundImage}
          alt="Cleaning Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
        <div className="relative z-20 text-white px-10 max-w-xl">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            We Clean.
            <br />
            You Relax.
          </h1>
          <p className="text-lg mb-6">
            Experience sparkling clean spaces with our professional and
            eco-friendly services. We handle the mess so you can enjoy peace of
            mind!
          </p>
          <button
            onClick={handleBooking}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            Let’s Clean!
          </button>
        </div>
      </section>

      <Services />

      <section className="py-10 bg-gray-50">
        <div className="flex justify-center">
          <button
            onClick={handlePricing}
            className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-md transition duration-300"
          >
            View Pricing & Packages
          </button>
        </div>
      </section>

      <WhyChooseUs />
      <CustomerReviews />
      <ContactBanner />
      <Footer />
    </div>
  );
}

export default HomePage;
