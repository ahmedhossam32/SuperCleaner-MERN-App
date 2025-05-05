import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const services = [
  {
    id: 1,
    title: "Home/Office Cleaning",
    description:
      "Professional cleaning services for your home or office. Scheduled and on-demand options available.",
    icon: "🏠",
  },
  {
    id: 2,
    title: "Car Cleaning",
    description:
      "Mobile car cleaning service that comes to you. Get your car looking brand new.",
    icon: "🚗",
  },
  {
    id: 3,
    title: "Laundry Service",
    description:
      "Wash, dry, and fold services with pickup and delivery available.",
    icon: "🮺",
  },
  {
    id: 4,
    title: "Ironing",
    description: "Crisp and neat ironing so you always look your best.",
    icon: "🫼",
  },
  {
    id: 5,
    title: "Window Cleaning",
    description:
      "Crystal-clear windows from top to bottom, streak-free guaranteed.",
    icon: "🪟",
  },
  {
    id: 6,
    title: "Roof Cleaning",
    description:
      "We remove debris, leaves, and dirt to maintain your roof’s health and appearance.",
    icon: "🪚",
  },
];

const ManageBooking = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    navigate("/manage-booking-form", { state: { selectedService: service } });
  };

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-5">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Manage Your Booking
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Select the service you’ve already booked to make changes, cancel it,
          or leave special requests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between text-center hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors mt-auto"
                onClick={() => handleServiceClick(service)}
              >
                Manage Booking
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageBooking;
