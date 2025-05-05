import React from "react";
import HomeCleaning from "../../assets/ServicesPics/office.png";
import CarCleaning from "../../assets/ServicesPics/Car.png";
import Laundry from "../../assets/ServicesPics/Laundary.jpg";
import Ironing from "../../assets/ServicesPics/ironing.png";
import Window from "../../assets/ServicesPics/Window.png";
import Roof from "../../assets/ServicesPics/Roof.png";

const servicesData = [
  {
    id: 1,
    title: "🏠 Home/Office Cleaning",
    image: HomeCleaning,
    description:
      "Professional home and office cleaning tailored to your schedule and needs.",
  },
  {
    id: 2,
    title: "🚗 Car Cleaning",
    image: CarCleaning,
    description:
      "Get your car shining inside and out with our mobile car cleaning service.",
  },
  {
    id: 3,
    title: "🧺 Laundry Service",
    image: Laundry,
    description:
      "Wash, dry, and fold service with pickup and delivery available.",
  },
  {
    id: 4,
    title: "🧼 Ironing",
    image: Ironing,
    description: "Crisp and neat ironing so you always look your best.",
  },
  {
    id: 5,
    title: "🪟 Window Cleaning",
    image: Window,
    description:
      "Crystal-clear windows from top to bottom, streak-free guaranteed.",
  },
  {
    id: 6,
    title: "🧹 Roof Cleaning",
    image: Roof,
    description:
      "We remove debris, leaves, and dirt to maintain your roof’s health and look.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10 text-black">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-black">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
