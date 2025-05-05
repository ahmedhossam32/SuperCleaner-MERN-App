import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import backgroundImage from "../assets/image1aboutus.jpeg";

const BookingPage = () => {
  const navigate = useNavigate();

  const services = [
    { icon: "🏠", name: "Home/Office Cleaning", detail: "From $99/session" },
    { icon: "🚗", name: "Car Cleaning", detail: "Interior & exterior" },
    { icon: "🧺", name: "Laundry Service", detail: "Washed and folded" },
    { icon: "🧼", name: "Ironing", detail: "Clothes ironed & ready" },
    { icon: "🪟", name: "Window Cleaning", detail: "Crystal clear finish" },
    { icon: "🏠", name: "Roof Cleaning", detail: "Safe and spotless" },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center brightness-110 relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0"></div>

      <div className="relative z-10">
        <Header />

        <div className="flex flex-col items-center justify-center text-center pt-32 space-y-10 px-4">
          <h1 className="text-4xl font-bold text-black">
            Book a cleaning service
          </h1>
          <p className="text-lg text-gray-800">
            Book your professional cleaning in 60 seconds
          </p>

          <div className="grid gap-6 max-w-3xl w-full px-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
              >
                <p className="text-xl font-medium text-black">
                  {service.icon} {service.name}
                </p>
                <p>{service.detail}</p>
              </div>
            ))}
          </div>

          <p className="text-black font-semibold text-lg mt-10">
            🌟 100% Satisfaction Guarantee
          </p>
          <p className="text-black mb-4">
            Love your clean or we'll redo it for free
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate("/booking-form")}
              className="bg-green-500 text-white font-bold text-xl px-8 py-4 rounded-full shadow-md hover:bg-green-600 transition"
            >
              Book Now →
            </button>

            <button
              onClick={() => navigate("/manage-booking")}
              className="bg-green-500 text-white fontbold text-xl px-8 py-4 rounded-full shadow  hover:bg-green-600 transition"
            >
              Manage Your Booking
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default BookingPage;
